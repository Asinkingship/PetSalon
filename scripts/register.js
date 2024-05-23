let petSalon = {
    name: "The Fashion pet",
    phone: "666-666-6666",
    hours:{
        open:"9:00 am",
        closes:"9:00 pm"
    },
    pets:[
        {
            name:"Wolf",
            age:"6",
            gender:"Male",
            service:"Grooming",
            breed: "German Shepard"
        },
        {
            name:"Dopey",
            age:"3",
            gender:"Female",
            service:"Grooming",
            breed:"Boxer" 
        },
        {
            name:"Smoofy",
            age:"8",
            gender:"Male",
            service:"Grooming",
            breed:"Lab" 
        },
        {
            name:"Jaws",
            age:"2",
            gender:"Male",
            service:"Grooming",
            breed:"Rott" 
        }
    ]
}






function displayNames() {
//connect to the html id petlist where we want to display the results
    let petList = document.getElementById("petList");
//go thru each pet in the array
    for (let i = 0; i < petSalon.pets.length; i++) {
//identify the names
        let petName = petSalon.pets[i].name;
//create the list that will hold the name
        let listItem = document.createElement("li");
//make the text in the list be the name 
        listItem.textContent = petName;
//add the list
        petList.appendChild(listItem);
    }
}

function countPets() {
//connect to the html id peNnumber where we want to display the results
        let petNumber = document.getElementById("petNumber");
//Identify the count with length
        let petCount = petSalon.pets.length;
//set the text to the count in the id slot
        petNumber.textContent = petCount;
}

function averageAge() {
    let average = document.getElementById("averageAge");
    for (let i = 0; i < petSalon.pets.length; i++) {
    let petAge = petSalon.pets.age;
    let petCount = petSalon.pets.length;
    let totalAverage = petAge / petCount
    average.textContent = totalAverage.toFixed(2);
    }
}


