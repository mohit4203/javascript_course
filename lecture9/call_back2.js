function getdata(dataid,getNextdata){
    setTimeout(()=>{
        console.log("data",dataid);
        if(getNextdata){
            getNextdata();
        }
    },2000);
}

//callback hell
getdata(234,()=>{
    getdata(456,()=>{
        getdata(789);
    });
});