let student = {
	name : "Steven",
	age : 19,
	grades : [12, 14, 8],
	average : 0
};
let sum= 0;
let div= 0;

for(let i=0; i<student.grades.length; i++) {
    sum = sum + student.grades[i];
    div++;
}
student.average = sum/div;
console.log(student.average);
