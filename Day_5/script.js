//Arrow Function
const arrowmul = (a, b) => {
    return a * b;
};

//Function fot Counting Vowels
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char == "u") { count++; }
    }
    console.log(count);
}

console.log("No. of Vowels are: ");
countVowels("aaryan"); //Calling Counting Vowels function

arrowmul(5, 7) //Calling Arrow Function

//Finding Square for Numbers using forEach
console.log("Squares of the numbers 1,2,3,4,5 are: ");
let arr = [1, 2, 3, 4, 5]
arr.forEach(function printVal(val) {
    console.log(val * val);
})

//Map Method
let nums = [12, 21, 13, 31];
let newArr = nums.map((val) => { return val; });
console.log(newArr);

//Filter Method
let brr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let evenArr = brr.filter((val) => { return val % 2 === 0; });
console.log(evenArr);

//Reduce Method
const output = brr.reduce((res, curr) => { return res + curr; })
console.log(output);

//Filter for marks (90+)
let marks = [21, 43, 6, 46, 89, 96, 95, 46, 90, 35, 75, 86, 89]
const result = marks.filter((std) => { return std >= 90; })
console.log(result)

//Enter a number for printing array till that n
let n = prompt("Enter your No.: ");
let crr = [];
for (let i = 1; i <= n; i++) {
    crr[i - 1] = i;
}
console.log(crr)
