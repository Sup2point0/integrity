import { visit } from "unist-util-visit";


export function preprocess_desmos()
{
  return tree => visit(tree, "code", node => {
    if (node.lang !== "desmos") return;

    /* NOTE: Need extra escaping since otherwise MDsveX removes them :skull: */
    node.value = node.value.replaceAll("\\", "\\\\");
  });
}
