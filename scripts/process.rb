require "front_matter_parser"

require "pathname"


def process(filepath:)
  load = FrontMatterParser::Parser.parse_file(filepath)
  data = load.front_matter
  lines = load.content.split "\n"

  ## FIXME
  section = nil
  load = nil

  lines.each do |line|
    if line.start_with?("## ")
      if section and load
        data[section] = extract_groups(load)
      end

      _, _, section = line.partition("## ")
      load = []
    end
    
    if section
      load.push(line)
    end
  end

  return data
end


def extract_groups(lines)
  out = []
  load = ""
  ctx = nil

  lines.each do |line|
    if ctx == "math"
      if line.end_with?("```")
        out.push({
          "kind" => "latex",
          "content" => load,
        })
        ctx = nil
      else
        load.concat(line)
      end
    else
      if line
        load.concat(line)
      end
    end

    if line.start_with?("```math")
      ctx = "math"
      load = ""
    end
  end

  return out
end
