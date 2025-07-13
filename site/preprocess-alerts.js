/* Very scuffed workflow for implementing GitHub Alert blockquotes, but what can you do when MDsveX drops support for Unified ;-; */

import { visit } from "unist-util-visit";


export function remark_alerts() {
  return (tree) => {
    visit(tree, "blockquote", (node) => {
      let line = node.children?.[0]?.children?.[0];
      let content = line?.children?.[0];
      let kind = content?.value?.match(/!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)/i)?.[1];
      console.log(">> KIND =", kind)
      // console.log(">> CONTENT =", content)
      // console.log(">> LINE =", line)
      // console.log(">> TYPE =", line.type)
      // console.log(">> CHILDREN =", line.children)
      if (line?.type === "linkReference" && kind) {
        line.type = "text";
        line.value = "";
        content.value = "";
        
        node.data = {
          hName: "blockquote",
          hProperties: {
            class: `gfm-alert ${kind.toLowerCase()}`
          }
        }
      }
    });
  };
}
