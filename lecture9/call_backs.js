const sum=(a,b)=>{
    console.log(a+b);
}
const calculate=(a,b,sumCallback)=>{
    sumCallback(a,b);
}
calculate(1,2,sum);
// their is no need to pass a callback function with parameter
// a function which is passed inside other function is called callback fumction


// console.log("answer will display in 3 sec");
// setTimeout(calculate(1,3,sum),4000);