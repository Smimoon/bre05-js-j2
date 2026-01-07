let students = [
	{
		name : "Steven",
		age : 18,
		average : 10
	},
	{
		name : "Jessica",
		age : 20,
		average : 13
	},
	{
		name : "Charlie",
		age : 17,
		average : 12
	},
];

for(let i=0; i<students.length; i++) {
    console.log(`My name is ${students[i].name}, I'm ${students[i].age} years old, my average is ${students[i].average}.`);
}