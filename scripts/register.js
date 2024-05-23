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
        }
    ]
}






function displayNames(){
    for (let i=0; i<petSalon.pets.length; i++);
    document.getElementById("petList");


}

function countPets(){
    console.log(petSalom.pets[1].name);
}