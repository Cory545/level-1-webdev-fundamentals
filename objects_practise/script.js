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
//Challenge 5. Create an array of grocery item objects, loop through name, price and quantities
//Challenge 6. Calculate object total costs. Quantities * price
//Challenge 7. Create an object with nested objects inside. Grocery store with sections like dairy, bakery etc.
//Challenge 8. Create a method inside an object (a function as a property)
//Challenege 9. Rebuild my grocery list from functions_and_arrays_practise, using array of objects instead of parralel arrays. Logic for discount if total > 5, in stock or out of stock.
//Challenge 10. Understand what this refers to inside and object method.