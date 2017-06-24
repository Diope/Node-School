// var messages = [
//   {
//     message: "Hello again"
//   },
//   {
//     message: "friend of a friend"
//   },
//   {
//     message: "Where the wild things roam"
//   },
//   {
//     message: "Show tonight, I hit all the notes that I know you like. You know I'm a pro when I'm on the mic. We're already here so turn off the lights, yeah"
//   }
// ]

function getShortMessages(messages) {
  var returnArr = messages.map(msg => msg.message)
    .filter(msg => msg.length < 50)
    return returnArr
}

module.exports = getShortMessages