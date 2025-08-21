require_relative "../../.stranger-quarkdown/squarkdown/utils/log"
log "exporting questions..."

require "json"
require "pathname"

require_relative "process"


def execute(source, dest)
  total = source.length

  data = {}
  i = 1

  source.each do |file|
    log "#{i}#{GREY} of #{total}: #{WHITE}#{file.parent.basename}#{GREY}/#{BLUE}#{file.basename}"
    
    shard = file.basename(".*")

    out = process(shard:, file:)
    topic = out["topic"]
    if topic.nil? then next end

    if data[topic].nil? then data[topic] = {} end
    data[topic][shard] = out

    i += 1
  end

  out = JSON.pretty_generate(data)
  File.write(dest, out)
end


## run
log "finding question files..."

ROOT = Pathname(__dir__).parent.parent

questions = (ROOT/"questions").glob("**/*-*.md")
log success: "found #{questions.length} question files!"
execute(questions, ROOT/"site/src/data/questions.json")

scriptures = (ROOT/"desmos/gamedev").glob("*/**/[!~]**.md")
log success: "found #{scriptures.length} dynamic scripture files!"
execute(scriptures, ROOT/"site/src/data/scriptures.json")
