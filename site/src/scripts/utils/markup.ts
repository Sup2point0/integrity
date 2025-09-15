/** Render basic Markdown to HTML. */
export function render_markdown(text: string | undefined): string | undefined
{
  return text && (text
    // bold, italic
    .replaceAll(/(?<=^|[ \n\(])\*{3}(.+?)\*{3}(?=$|[ \n,\.\)])/g, "<strong><em>$1</em></strong>")
    .replaceAll(/(?<=^|[ \n\(])\*{2}(.+?)\*{2}(?=$|[ \n,\.\)])/g, "<strong>$1</strong>")
    .replaceAll(/(?<=^|[ \n\(])\*(.+?)\*(?=$|[ \n,\.\)])/g, "<em>$1</em>")
    // code
    .replaceAll(/(?<=^|[ \n\(])`/g, "<code>")
    .replaceAll(/`(?=$|[ \n,\.\)])/g, "</code>")
  );
}
