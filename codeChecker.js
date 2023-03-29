const codeChecker = (input) => {
  const noOfTranslations = input[1];
  // create array of letters in letter pairs
  const letterPairs = input[2].split("");
  // create array of letters in translation pairs
  const translations = input[3].replaceAll(" ", "").split("");
  // check if there any letters in translation pairs that are not in letter pairs
  if (areThereExtraLetters(translations, letterPairs)) {
    return new Array(noOfTranslations).fill("no");
  } else if (areLettersUnchanged(translations)) {
    return new Array(noOfTranslations).fill("no");
  } else {
    return new Array(noOfTranslations).fill("yes");
  }
}


// checks whether there are letters in the translations that are not in the letter pairs
const areThereExtraLetters = (translations,letterPairs) => {
  const lettersLeftOver = translations.filter((letter) => !letterPairs.includes(letter) );
  return lettersLeftOver.length == 0 ? false : true
}

// methods checks whether the letters in the translation have not been changed
const areLettersUnchanged = (translations) => {
  if (translations[0] == translations[2]) { 
    return true
  } else if (translations[1] == translations[3]) {
    return true
  } else {
    return false 
  }
}

module.exports = codeChecker;