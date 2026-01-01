import { renderToString } from "katex";


/** Render basic Markdown to HTML. */
export function render_markdown(text: string | undefined): string | undefined
{ 
  /* Safari only gets RegEx lookbehind implemented in 16 :skull: so we need this handling to prevent a crash... */
  try {
    return text && (text
      // bold, italic
      .replaceAll(/(?<=^|[ \n\(\[])\*{3}(.+?)\*{3}(?=$|[ \n,\.\!\?\)\]])/g, "<strong><em>$1</em></strong>")
      .replaceAll(/(?<=^|[ \n\(\[])\*{2}(.+?)\*{2}(?=$|[ \n,\.\!\?\)\]])/g, "<strong>$1</strong>")
      .replaceAll(/(?<=^|[ \n\(\[])\*(.+?)\*(?=$|[ \n,\.\!\?\)\]])/g, "<em>$1</em>")
      // links
      .replaceAll(/\[(.*?)\]\(([^\ ]*)\)/g, (_, text, link) => {
        if (text.includes("↗")) {
          return `<a target="blank" href=${link}>${text}</a>`;
        } else {
          return `<a href=${link}>${text}</a>`;
        }
      })
      // code
      .replaceAll(/(?<=^|[^`])`(.*?)`(?=$|[^`])/g, "<code>$1</code>")
    );
  }
  catch {
    return text;
  }
}


export function split_latex(text: string | undefined): string[] | undefined
{
  if (text === undefined) return undefined;

  try {
    return text.split(/(\$[^$]+\$)/).map(
      /* @ts-ignore */
      chunk => (
        chunk.startsWith("$")
        ? renderToString(chunk.slice(1, -1), {
            displayMode: false,
            throwOnError: false,
          })
        : render_markdown(chunk)!
      )
    )
  }
  catch {
    return [text];
  }
}
