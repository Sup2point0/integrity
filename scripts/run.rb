require_relative "../.stranger-quarkdown/squarkdown/utils/log"

log "exporting questions..."

require "json"

require_relative "process"

## find
log "finding question files..."

ROOT = Pathname(__dir__).parent

SOURCE = ROOT / "questions"
files = SOURCE.glob("**/*.md")
total = files.length

log success: "found #{total} question files!"

## process
data = {}
i = 1

files.each do |file|
  log "#{i}#{Cols[:grey]} of #{total}: #{Cols[:white]}#{file.parent.basename}#{Cols[:grey]}/#{Cols[:blue]}#{file.basename}"
  
  shard = file.basename(".*")

  out = process(filepath: file)
  kind = out["kind"]
  if kind.nil? then continue end

  if data[kind].nil?
    data[kind] = {}
  end
  data[kind][shard] = out

  i += 1
end

## save
out = JSON.pretty_generate(data)
dest = ROOT / "site/src/data/questions.json"
File.write(dest, out)
