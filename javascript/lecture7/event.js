let heading=document.querySelector("h2");
heading.onmouseover=()=>{
    heading.innerText="action applied";
}
heading.onmouseleave=()=>{
    heading.innerText="hell javascript"
}
heading.onclick=()=>{
    heading.style.backgroundColor="red";
    heading.style.color="white";
}

// heading.onclick=(e)=>{
//     console.dir(e);
// }

//eventlistner

heading.addEventListener("click",()=>{
    heading.style.backgroundColor="green";
    heading.style.color="red";
});

// heading.addEventListener("click",()=>{
//     console.log("fucking magic");
// })
// heading.removeEventListener("click",()=>{
//     console.log("fucking magic");
// })