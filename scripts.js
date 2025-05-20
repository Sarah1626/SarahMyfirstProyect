const pi = 3.141592
let radius = Number(prompt("Typethe radius: "));
let volume = ( 4 / 3 ) * pi * Math.pow(radius, 3);
alert("The volume of the shere is:" + volume);

let number = Number(prompt("Type the number:"));
if (number < 0) {
    alert("This number is negative");
} else if (number > 0){
    alert("This number is positivo");
} else {
    alert("This number is zero");
}

let limit = Number(prompt("Enter a limit for the multiplication table of 3:"));

console.log("Using for loops:");
for (let i = 0; i <= limit; i++) {
    console.log("3 x " + i + " = " + (2 * i));
}

console.log("Using while loop:");
let i = 0;
while (i <= limit){
    console.log("3 x " + i + " = " + (3 * i));
    i++;
}