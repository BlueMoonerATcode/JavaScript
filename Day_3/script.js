console.log("Normal Loop... ");
for (let i = 1; i <= 5; i++) {
    console.log("Aaryan Tiwari");
}



console.log("For-of Loop...");

let str = "Aaryan";
let size = 0;

for (let i of str) {
    console.log("i = ", i);
    size++;
}

console.log("Size = ", size);



console.log("For-in Loop...");

let student = {
    name: "Aaru",
    age: 21,
    cgpa: 8,
    isPass: true,
};

for (let i in student) {
    console.log("Key = ", i, "& Value = ", student[i]);
}



console.log("Even Numbers...");
let n = 0;
while (n <= 21) {
    if (n % 2 == 0) {
        console.log(n);
    }
    n++;
}

let gameNum = 21;
let userNum = prompt("Guess the Correct Number: ");

while (userNum != gameNum) {
    userNum = prompt("You guessed the wrong Number!! Dont Worry...Guess Again: ");
}

console.log("Congratulations!! You guessed the Correct Answer!")

//////////////////////////////////////////////////

let personName = prompt("Enter Your Name: ");
userName = "@" + personName + personName.length;
console.log(userName);  