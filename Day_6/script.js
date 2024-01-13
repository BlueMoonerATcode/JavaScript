alert("Hello!")

let allEl = document.querySelectorAll("p");
console.dir(allEl);

//Access h3 element using tag
let h3 = document.querySelector("h3")
console.dir(h3.innerText); //To change: Using inner text property
h3.innerText = h3.innerText + " Lets Learn!"; //Concatenate


//For of Loop for modifying Boxs (Divs)
let divs = document.querySelectorAll(".box")
let idx = 1;
for (div of divs) {
    div.innerText = `Updated Value ${idx}`;
    idx++;
}
