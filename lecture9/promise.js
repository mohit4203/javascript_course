// let promise= new Promise((resolve,reject)=>{
//     console.log("i am in promise");
//     // resolve("success");
//     reject("reject");

// });


// there are three type pending fullfiled reject

// function getdata(dataid,getNextdata){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataid);
//             resolve("success");
//             if(getNextdata){
//                 getNextdata();
//             }
//         },5000);
//     })
// }

const getpromise=()=>{
    return new Promise((resolve,reject)=>{
        console.log("I am in Promise");
        reject("reject");
    });
};
let promise=getpromise();
promise.then((result)=>{
    console.log("promise id fullfiled");
});
promise.catch((err)=>{
    console.log("promise is not fullfiled");
});

//getdata(1).then(()=>{
// return getdata(2);
// }).then(()=>{
// 
// })  so on