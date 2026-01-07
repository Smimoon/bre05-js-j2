let animals_even = ["Dog", "Cat", "Spider"];
let animals_odd = ["Bat", "Snake", "Bear"];

for(let i=0; i<animals_even.length; i++) {
    if(i%2===0) {
        console.log(animals_even[i]);
    }
}

for(let j=0; j<animals_odd.length; j++) {
    if(j%2!==0) {
        console.log(animals_odd[j]);
    }
}