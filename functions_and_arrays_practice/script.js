//First Session

//Challenge. Function that accepts an array as a parameter. printGroceries(["Eggs", "Milk"]) for example

/*
function printGroceries(items){
    for (let i = 0; i < items.length; i++){
        console.log((i+1) + ". " + items[i])
    }
};

printGroceries(["Eggs", "Milk", "Cheese"]);

//Challenge 2. Two arrays, one for items and one for prices. Loop through both, print out each item with its corresponding price. At the end, print out the total cost.
/*
function bothGroceries(order, items, prices) {
    for (let i = 0; i < order.length; i++) {
        console.log(order[i] + ". " + items[i] + " - £" + prices[i]);
        sum += prices[i];
    }
    console.log("Your total is = £" + sum.toFixed(2));
}

bothGroceries(groceryOrder, groceries, groceryCost);
*/

//Challenge 3. If the total exceeds £5, apply a discount.
/*
function bothGroceries(order, items, prices) {
    for (let i = 0; i < order.length; i++) {
        console.log(order[i] + ". " + items[i] + " - £" + prices[i]);
        sum += prices[i];
    }
    if(sum >= 5){
        let discountedSum = sum - (sum * 0.10)
        console.log("Your total is = £" + discountedSum.toFixed(2));
    } else {
        console.log("Your total is = £" + sum.toFixed(2));

}};
bothGroceries(groceryOrder, groceries, groceryCost);
*/

//Challenge 4. Quantity logic. Each item now needs a quantity, and the price needs to reflect this.
let groceries = ["Eggs", "Milk", "Cheese", "Bread"];
let groceryOrder = [1, 2, 3, 4];
let groceryCost = [1.50, 1.00, 2.00, 0.50];
let quantity = [2, 3, 4, 6]
let sum = 0;

function bothGroceries(order, items, prices) {
    for (let i = 0; i < order.length; i++) {
        let updatedCost = quantity[i] * groceryCost[i];
        console.log(order[i] + ". " + items[i] + " - £" + prices[i]);
        sum += updatedCost;
    }
    if(sum >= 5){
        let discountedSum = sum - (sum * 0.10)
        console.log("Your total is = £" + discountedSum.toFixed(2));
    } else {
        console.log("Your total is = £" + sum.toFixed(2));

}};
bothGroceries(groceryOrder, groceries, groceryCost);
