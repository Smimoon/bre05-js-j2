let grades = [[20, 10], [15, 20], [13, 18]];
let sum = 0;
let average = 0;

for(let i=0; i<grades.length; i++) {
   for(let j=0; j<grades[i].length; j++) {
       sum = sum + grades[i][j];
   }
}
console.log(sum)
average = sum / 6
console.log(average)