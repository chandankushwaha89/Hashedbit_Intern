// 3.5- Replace wrong word with correct word using string.replace
function correctFn(sentence, wrong, correct) {
  return sentence.replace(wrong, correct);
}
let sentence = "I loke programming.";
let correctSentence = correctFn(sentence, "loke", "love");

console.log(correctSentence);  // Output: "I love programming."
