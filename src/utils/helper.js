export const deleteRecursive = (item, rowRef) => {
  let node = item

  if (node.data === rowRef) {
    return null
  }

  if (node.children) {
    for (const key in node.children) {
      if (node.children[key]?.records) {
        node.children[key].records = node.children[key].records
          .map(childNode => deleteRecursive(childNode, rowRef))
          .filter(Boolean)
        if (!node.children[key].records.length) {
          node.children = {}
        }
      }
    }
  }

  return node
}
