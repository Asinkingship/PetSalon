function saveItem(item){
    let items = readItems();
    items.push(item);//push the new item intp the items array
    let val= JSON.stringify(item);//parse the obj into JSON string
    console.log(val);//displays the string
    localStorage.setItem("services",val);//send the val to the local storage
}


function readItems(){
    let data = localStorage.getItem("services");//get the data from the local storage


    if(!data){//not data
        return []; //create the array
    }else{
        let list = JSON.parse(data);//parse back into the array
        return list;
    }
}



