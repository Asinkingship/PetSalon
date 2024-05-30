function displayCards(){
    //declare
    let card="";
    const petDiv=document.getElementById("petDiv");
    //travel array
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        
        //create html template
        card += `
        <div class="petCard card bg-light mb-3">
            <div class="card-body">
                <h5 class="card-title">${pet.name}</h5>
                <p class="card-text">Age: ${pet.age}</p>
                <p class="card-text">Gender: ${pet.gender}</p>
                <p class="card-text">Service: ${pet.service}</p>
                <p class="card-text">Type: ${pet.type}</p>
                <p class="card-text">Breed: ${pet.breed}</p>
            </div>
        </div>
    `;     
        // card+=`
        //     <div class="petCard">
        //         <p>${pet.name}</p>
        //         <p>${pet.age}</p>
        //         <p>${pet.gender}</p>
        //         <p>${pet.service}</p>
        //         <p>${pet.type}</p>
        //         <p>${pet.breed}</p>
        //     </div>           
        // `;
    }
    petDiv.innerHTML=card;
    //insert the tmp into the html
}

function displayRows(){
    const petTable=document.getElementById("petTable");
    petTable.innerHTML="";
    for(let i=0; i<petSalon.pets.length;i++){
        let pet=petSalon.pets[i];
        let row = `
        <tr>

            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.service}</td>
            <td>${pet.breed}</td>
            <td>${pet.type}</td>
            <td><button class="btn btn-danger" onclick = "deletePet(${i})">Delete</button></td>

        </tr>
        `;
        petTable.innerHTML += row;
    }
}
//make that this function executes when the page loads.



function displayTotalPets(){
    document.getElementById("total").innerHTML=petSalon.pets.length;
}

function displayServiceCount(){
    let grooming=0;
    let vaccine=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service=="Grooming"){
            grooming++;
        }
        else if(pet.service=="Vaccine"){
            vaccine++;
        }
    }
    document.getElementById("totalGroomings").innerHTML=grooming;
    document.getElementById("totalVaccines").innerHTML=vaccine;
}

function displayTypeCount(){
    let cat=0;
    let dog=0;
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.type=="Cat"){
            cat++;
        }
        else if(pet.type=="Dog"){
            dog++;
        }
    }
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