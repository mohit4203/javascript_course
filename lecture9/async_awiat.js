function getweather(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data");
            resolve("success");
        },2000);
    });
}

async function weather(){
    const result = await getweather();
    console.log("Weather result:", result);
    // Do something with the result here
    return result; // Return the result if needed
}

// Call the weather function
// weather().then((result) => {
//     console.log("Weather function executed with result:", result);
// }).catch((error) => {
//     console.error("An error occurred:", error);
// });
