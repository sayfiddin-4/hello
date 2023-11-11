// const KabisYear = (year) => {
//     return year % 4 == 0 ? 'Kabis Yili' : 'Kabisa Yili emas'
// }

// console.log(KabisYear(2024));

// const toUpperCase = (name) => {
//     let res = name.split('')
//     resalt = res.filter((val) => {
//         return val == val.toUpperCase()
//     }).join('')
//     return resalt
// }

// const name = 'WebBraInAcadeMy'
// console.log(toUpperCase(name));

// const solution = (string, ending) => {
//     if (ending == 'bc'){
//         return true
//     }
//     if ((ending == 'd') > (string)){
//         return false 
//     }
//     if(string[(ending == 'bc')] == ending){
//         return true
//     }
//     else{
//         return false 
//     }
// }

// console.log(solution(string));
// console.log(solution(ending));


// let text = "Hello world";
// let result = text.endsWith("world");
// function solution(str, ending){
//     return str.endsWith(ending)
//   }

//   console.log(solution('abcde', 'cde'));

  

function findOdd(A) {
  const countMap = {};
  for (let i = 0; i < A.length; i++) {
    const num = A[i];
    countMap[num] = (countMap[num] || 0) + 1;
  }
  for (const num in countMap) {
    if (countMap[num] % 2 !== 0) {
      return parseInt(num);
    }
  }
  
  return null;
}

console.log(findOdd([7])); 
console.log(findOdd([0]));
console.log(findOdd([1, 1, 2])); 
console.log(findOdd([0, 1, 0, 1, 0]));
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1])); 

