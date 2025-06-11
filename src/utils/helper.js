export const deleteRecursive = (item, rowRef) => {
  if (item.data === rowRef) {
    return null
  }

  const newItem = { ...item }

  if (newItem.children) {
    const newChildren = {}

    for (const key in newItem.children) {
      if (newItem.children[key]?.records) {
        const updatedRecords = newItem.children[key].records
          .map(child => deleteRecursive(child, rowRef))
          .filter(Boolean)

        if (updatedRecords.length) {
          newChildren[key] = {
            ...newItem.children[key],
            records: updatedRecords,
          }
        }
      }
    }

    newItem.children = Object.keys(newChildren).length > 0 ? newChildren : {}
  }

  return newItem
}
