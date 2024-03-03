let  nami="rahul kumar";
for(let i of nami){
    console.log("val",i);
}
//for of use for both string and array but not for object 



//for in for  object


const student={
    name:"rahul k",
    age:20,
    cgpa :8.6,
    Ispass: true
}

for(let i in student){
    //key print
    console.log(i);
    //value print
    console.log(student[i]);
}