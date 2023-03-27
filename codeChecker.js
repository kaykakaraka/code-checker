const codeChecker = (translations) => {
  return translations[3] == "aa bb" ? ["yes"] : ["no"]
}

module.exports = codeChecker;