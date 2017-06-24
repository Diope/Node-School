function countWords(inputWords) {
  return inputWords.reduce(function(key, value) {
    key[value] = (key[value] + 1) || 1;
    return key
  }, {})
}


module.exports = countWords