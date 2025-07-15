//First Session

//Challenge. Function that accepts an array as a parameter. printGroceries(["Eggs", "Milk"]) for example


function printGroceries(items){
    for (let i = 0; i < items.length; i++){
        console.log((i+1) + ". " + items[i])
    }
};

printGroceries(["Eggs", "Milk", "Cheese"]);