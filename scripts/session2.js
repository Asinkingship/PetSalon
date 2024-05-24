let petSalon = {
    name: "The Fashion pet",
    phone: "666-666-6666",
    hours:{
        open:"9:00 am",
        closes:"9:00 pm"
    },
    pets:[]
}

//constructor
function Pet(name,age,gender,service){
    //properties = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
}

function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputService)
    petSalon.pets.push(newPet);
    console.table(petSalon.pets);
}

function init(){
    let pet1 = new Pet("Scooby",7,"male","grooming"); //declaring a object
    let pet2 = new Pet("Scrappy",3,"male","grooming");
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    console.table(petSalon.pets);
    
}

window.onload=init;//waiting to render the html