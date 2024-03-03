class parent{
    constructor(name){
        console.log("parent constructor");
        console.log("parent constructor exit");
        this.name=name;
    }
    hello(){
        console.log("hello my child")
    }
}

class child extends parent{
    constructor(name){
        super(name); //super keyword
        console.log("child constructor");
        console.log("child constructor exit");
    }
    hello2(){
        console.log("hello my father and mother");
    }
}

let obj=new child("mohit");

//method overriding ->when parent and child have same function with same name and same number of arguments
// methid overloading-> when name is same but argument is differents


//super key word use to invole parent class constructor
// before declaring new constructor in child class