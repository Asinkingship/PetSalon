//use jQuery.

//create a constructor
// function Service(description,price){
//     this.description=description;
//     this.price=price;
// }
let petService = {
    name: "The Fashion pet",
    phone: "666-666-6666",
    hours:{
        open:"9:00 am",
        closes:"9:00 pm"
    },
    services:[]
}

//constructor
function Service(description,date,service,payment,referral){
    //properties = parameters
    this.description=description;
    this.date=date;
    this.service=service;
    this.payment=payment;
    this.referral=referral;
}




function isValid(service){
    let validation=true;

    if(service.description==""){
        validation=false;
        $("#txtDescription").addClass("alert-error");
    }
    if(service.price==""){
        validation=false;
        $("#txtPrice").addClass("alert-error");
    }
    return validation;

}
function registerService(){
    let inputDescription = document.getElementById("txtDescription").value;
    let inputDate = document.getElementById("txtDate").value;
    let inputService = document.getElementById("txtService").value;
    let inputPayment = document.getElementById("txtPayment").value;
    let inputReferral = document.getElementById("txtReferral").value;

    let newService = new Service(inputDescription,inputDate,inputService,inputPayment,inputReferral);
    if(isValid(newService)){
        petService.services.push(newService);
        displayRows();
    }
}

function displayRows(){
    const serviceTable=document.getElementById("serviceTable");
    serviceTable.innerHTML="";
    for(let i=0; i<petService.services.length;i++){
        let service=petService.services[i];
        let row = `
        <tr>

            <td>${service.description}</td>
            <td>${service.date}</td>
            <td>${service.service}</td>
            <td>${service.payment}</td>
            <td>${service.referral}</td>
            <td><button class="btn btn-danger" onclick = "deleteService(${i})">Delete</button></td>

        </tr>
        `;
        serviceTable.innerHTML += row;
    }
}


function deleteService(index){
    petService.services.splice(index,1);
    //also update the rest of the logic.
    displayRows();


}


window.onload=init;//waiting to render the html









// function register(){
//     console.log("Adding a service");
//     //getting the values 
//     let inputDescription = $("#txtDescription").val();
//     let inputPrice = $("#txtPrice").val();
//     //create the object
//     let newService = new Service(inputDescription,inputPrice);
//     //display it on the console
//     if(isValid(newService)){
//         saveItem(newService);
//         $("input").val("");
//     }
// }





