// 3.4- Count vowels and consonants in a string
let sentence = "JavaScript is a powerful scripting language.";
let res = sentence.toLowerCase().split(""); 
let vowelCount = 0;
let consonantCount = 0;

res.forEach(function(ch) {
    if (ch >= 'a' && ch <= 'z') {  // Only check alphabet characters
        if (ch === 'a' || ch === 'ch' || ch === 'i' || ch === 'o' || ch === 'u') {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }
});

console.log("Vowels:", vowelCount);       
console.log("Consonants:", consonantCount);  


