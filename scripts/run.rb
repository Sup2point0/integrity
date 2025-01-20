require_relative "../.stranger-quarkdown/squarkdown/utils/log"

log "exporting questions..."

require "json"

require_relative "process"

## find
log "finding question files..."

ROOT = Pathname(__dir__).parent

SOURCE = ROOT / "questions"
files = SOURCE.glob("**/*-*.md")
total = files.length

log success: "found #{total} question files!"

## process
data = {}
i = 1

files.each do |file|
  log "#{i}#{GREY} of #{total}: #{WHITE}#{file.parent.basename}#{GREY}/#{BLUE}#{file.basename}"
  
  shard = file.basename(".*")

  out = process(shard:, file:)
  topic = out["topic"]
  if topic.nil? then next end

  if data[topic].nil? then data[topic] = {} end
  data[topic][shard] = out

  i += 1
end

## save
out = JSON.pretty_generate(data)
dest = ROOT / "site/src/data/questions.json"
File.write(dest, out)
