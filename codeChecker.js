const codeChecker = (input) => {
  // create array of letters in letter pairs
  const letterPairs = input[2].split("");
  // create array of letters in translation pairs
  const translations = input[3].replaceAll(" ", "").split("");
  // check if there any letters in translation pairs that are not in letter pairs
  const lettersLeftOver = translations.filter((letter) => !letterPairs.includes(letter) );
  return lettersLeftOver.length == 0 ? ["yes"] : ["no"] 
}

module.exports = codeChecker;