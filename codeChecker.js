const codeChecker = (input) => {
  const answer = []
  // check number of translation pairs
  // const noOfTranslations = input[1];
  // create array of letters in letter pairs
  const letterPairs = input[2].split("");
  // create array of letters in each translation pair
  const translation1 = input[3].replaceAll(" ", "").split("");
  const ans1 = checkValidity(translation1, letterPairs)
  answer.push(ans1)
  if (input[4]) {
    const translation2 = input[4].replaceAll(" ", "").split("");
    const ans2 = checkValidity(translation2, letterPairs)
    answer.push(ans2)
  }
  return answer
  // check if there any letters in translation pairs that are not in letter pairs
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

const checkValidity = (translation, letterPairs) => {
  if (areThereExtraLetters(translation, letterPairs)) {
    return "no";
  } else if (areLettersUnchanged(translation)) {
    return "no";
  } else {
    return "yes";
  }
}

module.exports = codeChecker;