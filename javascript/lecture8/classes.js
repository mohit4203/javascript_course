class car{
    constructor(brand,speed){
        console.log("constructor is called");
        this.brand=brand;
        this.speed=speed;
    }
   start(){
    console.log("start");
   }

   stop(){
    console.log("stop");
   }
   setbrand(brand){
    this.brand=brand;
   }


}
let honda=new car("fortuner","200km");
let lexus=new car();
console.log(honda);
console.log(lexus);