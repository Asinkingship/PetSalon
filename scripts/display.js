function displayCards(){
    //declare
    let card="";
    const petDiv=document.getElementById("petDiv");
    //travel array
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        
        //create html template
        card+=`
            <div class="petCard">
                <p>${pet.name}</p>
                <p>${pet.age}</p>
                <p>${pet.gender}</p>
                <p>${pet.service}</p>
                <p>${pet.type}</p>
                <p>${pet.breed}</p>
            </div>           
        `;
    }
    petDiv.innerHTML=card;
    //insert the tmp into the html
}

function displayRows(){

}

function displayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    let grooming=0;
    let vaccine=0;
    let cat=0;
    let dog=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service=="Grooming"){
            grooming++;
        }
        else if(pet.service=="Vaccine"){
            vaccine++;
        }
        if(pet.type=="Cat"){
            cat++;
        }
        else if(pet.type=="Dog"){
            dog++;
        }
    }
    document.getElementById("totalGroomings").innerHTML=grooming;
    document.getElementById("totalVaccines").innerHTML=vaccine;
    document.getElementById("totalCats").innerHTML=cat;
    document.getElementById("totalDogs").innerHTML=dog;
}
// function displayTypeCount(){
//     let cat=0;
//     let dog=0;
//     for(let i=0;i<petSalon.pets.length;i++){
//         let pet = petSalon.pets[i];
//         if(pet.type=="Cat"){
//             cat++;
//         }
//         else if(pet.type=="Dog"){
//             dog++;
//         }
//     }
//     document.getElementById("totalCats").innerHTML=cat;
//     document.getElementById("totalDogs").innerHTML=dog;
// }