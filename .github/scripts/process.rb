require "front_matter_parser"


def process(shard:, file:)
  parsed = FrontMatterParser::Parser.parse_file(file)

  data = {
    "shard": shard,
    **parsed.front_matter,
  }
  lines = parsed.content.split "\n"

  section = nil
  subsection = nil
  load = nil

  lines.each do |line|
    # if new heading, save current load
    if line.start_with?("##")
      if load and not load.empty?
        if subsection
          if data[section].nil?
            data[section] = {}
          end
          if data[section][subsection]
            i = 1
            while data[section]["#{subsection} (#{i})"]
              i += 1
            end
            subsection = "#{subsection} (#{i})"
          end

          data[section][subsection] = extract_blocks(load)
        elsif section
          data[section] = extract_blocks(load)
        end
      end

    else
      # if in a section, add to load
      if ( (section and not line.strip.empty?) ||
      #if ( ((section or not section.empty?) and not line.strip.empty?) ||
        (section and not load.empty?)
      )
        load.push(line.strip.empty? ? "\n" : line)
      end
    end

    # if heading is h2, start new section
    if line.start_with?("## ")
      _, _, section = line.downcase.partition("## ")
      subsection = nil
      load = []
    end

    # if heading is h3, start new subsection
    if line.start_with?("### ")
      if section
        _, _, subsection = line.downcase.partition("### ")
        load = []
      end
    end
  end

  # save last line
  if load and not load.empty?
    if subsection
      if data[section].nil?
        data[section] = {}
      end
      if data[section][subsection]
        i = 1
        while data[section]["#{subsection} (#{i})"]
          i += 1
        end
        subsection = "#{subsection} (#{i})"
      end

      data[section][subsection] = extract_blocks(load)
    elsif section
      data[section] = extract_blocks(load)
    end
  end

  return data
end


def extract_blocks(lines)
  out = []
  load = ""
  ctx = nil

  lines.each do |line|
    if (ctx == "latex" or ctx == "desmos") and line.end_with?("```")
      out.push({
        "kind" => ctx,
        "content" => clean(load),
      })
      ctx = nil
      next
    elsif ctx == "text" and line.start_with?("```")
      out.push({
        "kind" => "text",
        "content" => clean(load),
      })
      ctx = nil
    else
      if ctx == "desmos"
        load.concat("\n")
      end
      load.concat(line)
    end

    if line.start_with?("```math")
      ctx = "latex"
      load = ""
    elsif line.start_with?("```desmos")
      ctx = "desmos"
      load = ""
    elsif ctx.nil? and not line.strip.empty?
      ctx = "text"
      load = line
    end
  end

  if not ctx.nil?
    out.push({
      "kind" => "text",
      "content" => clean(load),
    })
  end

  return out
end


def clean(text)
  return text.strip.gsub(/[ ]+/, " ").gsub(/[\n]+/, "<br><br>")
end
