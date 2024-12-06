require "front_matter_parser"

require "pathname"


def process(filepath:)
  load = FrontMatterParser::Parser.parse_file(filepath)
  data = load.front_matter
  text = load.content

  sections = text.split "## "

  ## FIXME
  sections.each do |section|
    title, _, load = section.partition("\n")
    data[title] = extract_groups(section)
  end

  return data
end


def extract_groups(text)
  out = []
  lines = text.split "\n\n"

  lines.each do |line|
    if line.start_with?("```math")
      out.append({
        "kind" => "latex",
        "ctx" => "block",
        "text": line,
      })
    end
  end

  return out
end
