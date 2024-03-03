let id=document.querySelector("div");
console.dir(id);
// console.dir(id.getAttribute("class"));
console.dir(id.setAttribute("class","newclass"));


//color changing properties

let div=document.querySelector("div");
console.dir(div);
div.style.backgroundColor="red";

//creation

let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.dir(newbtn);

//addition

// id.append(newbtn);// at end inside the node
// id.prepend(newbtn); // at starting inside the node
id.before(newbtn)// before outside the node
// id.after(newbtn); // after outside the node

//deletion

// newbtn.remove();  // for the removeal of an element
