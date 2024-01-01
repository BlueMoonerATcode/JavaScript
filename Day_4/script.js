let heroes = ["ironman", 21, "spidey"]; //Array Declaration
alert(heroes); // Pop-Up for Array

let marks = [21, 20, 19, 25, 22, 23, 26];
console.log(marks);
console.log("Marks at 1: ", marks[1]);// Printing Value at particular Index


// For Loop iteration reading Array:
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum = marks[i] + sum;
}
let avg = sum / marks.length;
console.log("Sum of all the numbers: ", sum);
console.log("Number of Students: ", marks.length);
console.log("Average of Class is: ", avg);


//For-Of Loop:
for (let mark of marks) {
    console.log(mark);
}

//Practice Question:
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
companies.shift();//Delete first Company
console.log(companies);
companies.splice(2,1,"Ola");//Replace Ola with Uber
console.log(companies);
companies.push("Amazon"); //Add Amazon at last of Array
console.log(companies);
