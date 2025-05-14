export {}
console.log(chrome)
chrome.action.setTitle({
  title: "Test Extension"
})

chrome.action.onClicked.addListener(() => {
  console.log(`action clicked`)
})

chrome.commands.onCommand.addListener((command) => {
  if (command === "test") {
    console.log(`test command`)
  }
})

chrome.bookmarks.getTree((bookmarks) => {
  console.log(bookmarks)
  bookmarks.forEach((bookmark) => {
    console.log(bookmark)
  })
})
