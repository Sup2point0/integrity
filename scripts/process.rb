require "front_matter_parser"

require "pathname"


def process(filepath:)
  load = FrontMatterParser::Parser.parse_file(filepath)
  data = load.front_matter
  lines = load.content.split "\n"

  ## FIXME
  section = nil
  subsection = nil
  load = nil

  lines.each do |line|
    # if new heading, save current load
    if line.start_with?("##")
      if load and not load.empty?
        if subsection
          if data[section].nil? then data[section] = {} end
          data[section][subsection] = extract_groups(load)
        elsif section
          data[section] = extract_groups(load)
        end
      end

    else
      # if in a section, add to load
      if section and not line.strip.empty?
        load.push(line)
      end
    end

    # start new section
    if line.start_with?("## ")
      _, _, section = line.partition("## ")
      subsection = nil
      load = []
    end

    # start new subsection
    if line.start_with?("### ")
      if section
        _, _, subsection = line.partition("### ")
        load = []
      end
    end
  end

  return data
end


def extract_groups(lines)
  out = []
  load = ""
  ctx = nil

  lines.each do |line|
    if ctx == "latex"
      if line.end_with?("```")
        out.push({
          "kind" => "latex",
          "content" => load,
        })
        ctx = nil
        next
      else
        load.concat(line)
      end
    else
      if not line.strip.empty?
        load.concat(line)
      end
    end

    if line.start_with?("```math")
      ctx = "latex"
      load = ""
    elsif ctx.nil? and not line.strip.empty?
      ctx = "text"
    end
  end

  if not ctx.nil?
    out.push({
      "kind" => "text",
      "content" => load,
    })
  end

  return out
end
