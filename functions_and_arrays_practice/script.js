//First Session

//Challenge. Function that accepts an array as a parameter. printGroceries(["Eggs", "Milk"]) for example


function printGroceries(items){
    for (let i = 0; i < items.length; i++){
        console.log((i+1) + ". " + items[i])
    }
};

printGroceries(["Eggs", "Milk", "Cheese"]);

//Challenge 2. Two arrays, one for items and one for prices. Loop through both, print out each item with its corresponding price. At the end, print out the total cost.