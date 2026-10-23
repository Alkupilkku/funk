function isPalindrome(word) {
  if (word.split('').reverse().join('').toLowerCase() == word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
function findPalindromeBreaks(words) {
  let notPalindrome = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (isPalindrome(word) !== true) {
      notPalindrome.push(i)
    }
  } return notPalindrome
}
function findRepeatedPhrases(words, phraseLength) {
  let indices = {};
  for (let i = 0; i <= words.length - phraseLength; i++) {
    let phrase = words.slice(i, i + phraseLength).join(" ");
    if (!indices[phrase]) {
      indices[phrase] = [];
    }
    indices[phrase].push(i);
  }
  let results = [];
  for (let phrase in indices) {
    if (indices[phrase].length > 1) {
      results.push(...indices[phrase])
    }
  }
  return results;
}
function analyzeTexts(texts, phraseLength) {
  let text = [];
  for (const words of texts) {
    let resultObj = {
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    }; 
    text.push(resultObj);
  }
  return text;
}
