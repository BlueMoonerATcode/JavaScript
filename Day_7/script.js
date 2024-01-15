let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id"); //get Attribute
console.log(id);

let name = div.getAttribute("name");
console.log(name);

console.log(div.setAttribute("name", "newName")); //set Attribute

let newbtn = document.createElement("button");
newbtn.innerText = "Click Me!";
console.log(newbtn);


div = document.querySelector("div");
div.append(newbtn);   //Inside
div.prepend(newbtn); //Inside
div.before(newbtn); //Outside
div.after(newbtn); //Outside

newbtn.remove(); //Removes the Element

// Know about Append Child & Remove Child

//Solving 

let newButton = document.createElement("button"); //New Element created in JS
newButton.innerText= "Hey User!"; //Given a text in JS
console.log(newButton); //Printed on Screen
newButton.style.color = "white"; //Gave color using style in JS
newButton.style.backgroundColor = "green";
div.append(newButton); //Gave position inside div in starting using append 


let para = document.querySelector("p");
para.getAttribute("class");

para.classList.add("newClass");
