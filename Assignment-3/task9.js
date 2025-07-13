// 3.9- Count number of words in a paragraph
let str = "Technology has become an essential part of our daily lives."

function countWords(paragraph) {
  let words = paragraph.trim().split(" ").filter(word => word !== "");
  return words.length;
}

 let count = countWords(str);

 console.log("Total words count is : ", count);
   
 
