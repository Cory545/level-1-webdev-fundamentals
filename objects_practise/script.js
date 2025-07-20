//Challenge 1. Create basic objects
let car = {type:"Fiat", model:"500", colour:"White"};
//Now a nested object.
let myObj = {
    name:"John",
    age:25,
    myCars:{
        car1:"Ford",
        car2:"BMW",
        car3:"Fiat"
    }
};
//Challenge 2. Access Object properties. such as object.key
console.log("Challenge 1: " + car.type, car.model, car.colour);
console.log("Challenge 2: " + myObj.name, myObj.age, myObj.myCars.car1, myObj.myCars.car2,myObj.myCars.car3, )
//Challenge 3. Update, delete and add keys to exisitng objects.
myObj.nationality = "English";
console.log("Challenge 3 : " + myObj.nationality);
console.log(myObj);
myObj.deleted = "No";
delete myObj.deleted;
console.log("Is deleted, deleted?: "); console.log(myObj);
//Challenge 4. Loop through an object.
console.log("Challenge 4");
console.log(Object.entries(myObj));
for (const property in myObj){
  console.log(`${property}: ${myObj[property]}`);
};

//Challenge 5. Create an array of grocery item objects, loop through name, price and quantities
console.log("Challenge 5");
let groceryList = [
    {
        item: "Orange",
        price: 1,
        quantity: 2
    },
    {
        item: "Banana",
        price: 2,
        quantity: 5
    },
    {
        item: "Peach",
        price: 4,
        quantity: 2
    },
    {
        item: "Grapes",
        price: 1,
        quantity: 20
    }
];
groceryList.forEach((item, index) => {
    console.log(`${index + 1}. ${item.item} - £${item.price} x ${item.quantity}`);
});

//Challenge 6. Calculate object total costs. Quantities * price
console.log("Challenge 6");
groceryList.forEach((item, index) =>{
    console.log(`${index + 1}. ${item.item} - £${item.price * item.quantity}`)
})
//Challenge 7. Create an object with nested objects inside. Grocery store with sections like dairy, bakery etc.
//Already did this challenge
//Challenge 8. Create a method inside an object (a function as a property)
console.log("Challenge 8")
let calculation = {
    price: 10,
    quantity: 20,
    getTotal(){
        return this.price * this.quantity
    }};
//Challenge 8.5, how this works
console.log("Challenge 8.5");
let person ={
    name:"Cory",
    greet(){
        console.log("Hello, my name is " + this.name)
    }
};
person.greet();
//Challenege 9. Rebuild my grocery list from functions_and_arrays_practise, using array of objects instead of parralel arrays. Logic for discount if total > 5, in stock or out of stock.
let finalGroceryList = [
    {
        item:"Orange",
        quantity:5,
        price:0.50
    },
        {
        item:"Peach",
        quantity:2,
        price:0.80
    },
        {
        item:"Grapes",
        quantity:2,
        price:2
    },
        {
        item:"Bananas",
        quantity:1,
        price:1.50
    },
        {
        item:"Tacos",
        quantity:2,
        price:2.50
    }
];

function grabGroceries(){
finalGroceryList.forEach((item, index) =>{
    console.log(`Challenge 9 : ${index + 1}. ${item.item} - £${item.price * item.quantity}`)
})
};
grabGroceries();
//Challenge 10. Understand what this refers to inside and object method.