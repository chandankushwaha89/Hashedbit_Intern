// 3.1 Create an array of states in india. Remove all the names starting with vowels from the list. Use array.filter.
let states = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Odisha","Uttar Pradesh","Bihar", 
  "Goa", "Gujarat", "Haryana", 
];

//  remove states starting with vowels
let filteredStates = states.filter(state => {
  let first = state[0].toLowerCase();
  return !(first === 'a' || first === 'e' || first === 'i' || first === 'o' || first === 'u');
});

console.log(filteredStates);


 
 