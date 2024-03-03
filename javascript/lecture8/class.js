const student={
    name:"Mohit K",
    age:20,
    location:"Kanpur",
    printage: ()=>{
        console.log("printage function is called",this.age);
    }
}
// .__proto__
// if object and proto have same method then object method will call
const employee={
    name: "ram lal",
    age:30,
}
employee.__proto__=student;