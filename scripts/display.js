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
    for(let i=0;i<petSalon.pets.length;i++){
        let pet = petSalon.pets[i];
        if(pet.service=="Grooming"){
            grooming++;
        }
    }
    document.getElementById("totalGroomings").innerHTML=grooming;
}