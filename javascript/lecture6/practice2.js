let divs=document.querySelectorAll(".box");
console.dir(divs);
let i=1;
for(let t of divs ){
     t.innerText=`new unique value ${i}`;
    i++;
}
