const codeChecker = (input) => {
  // create array of letters in letter pairs
  const letterPairs = input[2].split("");
  // create array of letters in translation pairs
  const translations = input[3].replaceAll(" ", "").split("");
  // check if there any letters in translation pairs that are not in letter pairs
  if (checkForExtraLetters(translations, letterPairs)[0] == "no") {
    return ["no"]
  } else if (translations[0] == translations[2]) { 
    return ["no"] 
  } else if (translations[1] == translations[3]) {
    return ["no"]
  } else {
    return ["yes"]
  }
}

const checkForExtraLetters = (translations,letterPairs) => {
  const lettersLeftOver = translations.filter((letter) => !letterPairs.includes(letter) );
  return lettersLeftOver.length == 0 ? ["yes"] : ["no"] 
}

module.exports = codeChecker;