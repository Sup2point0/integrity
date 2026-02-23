require "front_matter_parser"


## Process a file into its JSON representation.
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


module CTX
  TEXT   = "text"
  CODE   = "code"
  LATEX  = "latex"
  DESMOS = "desmos"
end

## Process lines of source text into a list of "text", "latex" or "desmos" blocks.
def extract_blocks(lines)
  out = []
  load = ""
  ctx = nil

  lines.each do |line|
    ## close context
    if (ctx == CTX::LATEX or ctx == CTX::DESMOS) and line.end_with?("```")
      out.push({
        "kind"    => ctx,
        "content" => clean_breaks(clean_spaces load),
      })
      ctx = nil
      next
    elsif ctx == CTX::CODE and line.end_with?("```")
      out.push({
        "kind"    => CTX::CODE,
        "content" => load + "\n```",
      })
      ctx = nil
      next
    elsif ctx == CTX::TEXT and line.start_with?("```")
      out.push({
        "kind"    => CTX::TEXT,
        "content" => clean_breaks(load),
      })
      ctx = nil
    else
      if ctx == CTX::TEXT or (ctx == CTX::DESMOS and not line.strip.empty?)
        load.concat("\n")
      end
      load.concat(line)
    end

    ## open context
    if line.start_with?("```math")
      ctx = CTX::LATEX
      load = ""
    elsif line.start_with?("```desmos")
      ctx = CTX::DESMOS
      load = ""
    elsif line.start_with?("```")
      ctx = CTX::CODE
      load = line + "\n"
    elsif ctx.nil? and not line.strip.empty?
      ctx = CTX::TEXT
      load = line
    end
  end

  if not ctx.nil?
    out.push({
      "kind" => CTX::TEXT,
      "content" => clean_breaks(load),
    })
  end

  return out
end

def clean_breaks(text)
  # return text.strip.gsub(/[ ]+/, " ").gsub(/[\n]+/, "<br><br>")
  return text.gsub(/(?<![|])\n\n\n/, "\n<br><br>\n")
end

## Condense unnecessary spaces in LaTeX (to save a little on space!)
def clean_spaces(text)
  return (
    text.strip
      .gsub(/[ ]+/, " ")
      .gsub(/(?<=[\(\[\{]) /, "")
      .gsub(/ (?<=[\)\]\}])/, "")
  )
end
