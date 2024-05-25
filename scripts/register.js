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
function Pet(name,age,gender,service,breed,type){
    //properties = parameters
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.service=service;
    this.breed=breed;
    this.type=type;
}
function isValid(aPet){
    let validation =true;

    if(aPet.name==""){//is empty?
        validation=false;
        document.getElementById("txtName").classList.add("alert-error");

    }
    if(aPet.service==""){//is empty?
        validation=false;
        document.getElementById("txtService").classList.add("alert-error");
    }

    //validate the service

    return validation;
}
function register(){
    let inputName = document.getElementById("txtName").value;
    let inputAge = document.getElementById("txtAge").value;
    let inputGender = document.getElementById("txtGender").value;
    let inputService = document.getElementById("txtService").value;
    let inputBreed = document.getElementById("txtBreed").value;
    let inputType = document.getElementById("txtType").value;

    let newPet = new Pet(inputName,inputAge,inputGender,inputService,inputBreed,inputType);
    if(isValid(newPet)){
        petSalon.pets.push(newPet);
        displayCards();
        displayTotalPets();
        displayServiceCount();
    }
}

function init(){
    let pet1 = new Pet("Scooby",7,"male","grooming","bully","dog"); //declaring a object
    let pet2 = new Pet("Scrappy",3,"male","grooming","terrier","dog");
    petSalon.pets.push(pet1);
    petSalon.pets.push(pet2);
    displayCards();
    displayTotalPets();
    displayServiceCount();
    
}

window.onload=init;//waiting to render the html