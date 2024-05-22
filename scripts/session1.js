var globalVariable = "i'm in scope";

function myFunction(){
    //This function can access globalVariable
    var localVariable = "I'm in local scope";
    console.log(localVariable);
    console.log(globalVariable);

    if(true){
        console.log(localVariable);
        let blockVariable="I am block variable";
        console.log(globalVariable);
        console.log(blockVariable);
    }
}


//object literal {}

let student1 = {
    name:"Kevin",
    email:"kevin@gmail.com",
    grade101:3.5,
    grade102:3.9
}
let student2 = {
    name:"Jen",
    email:"jen@gmail.com",
    grade101:3.7,
    grade102:4.0
}
let student3 = {
    name:"Bill",
    email:"bill@gmail.com",
    grade101:3.1,
    grade102:3.3
}

console.log(student1);
console.log(student3);
console.log(student4);

// Arrays []

let myArray=[10,false,"richard",student2];
console.log(myArray[2]);//richard