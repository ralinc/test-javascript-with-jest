export default formatList

function formatList(listName, items, key) {
  return `List ${listName}:${
    items.reduce((formatted, item) => {
      return `${formatted}\n  - ${key ? item[key] : item}`
    }, '')
  }`
}
