//First trial
for (let i = 0; i <= 10; i++){
    console.log(i)
};

//Bottles of milk on the wall, first try.
let bottles = 99;
for (; bottles >= 0;){
    console.log(bottles + " bottle of milk on the wall. Take one down, now you have " + bottles+ " of milk on the wall")
    bottles--
};
//Second attempt at bottles of milk on the wall.
let bottlesTwo = 99;
for (; bottlesTwo >= 0;) {
    if (bottlesTwo === 0) {
        console.log("You've no more milk on the wall");
    } else {
        console.log(bottlesTwo + " bottle of milk on the wall. Take one down, now you have " + (bottlesTwo - 1) + " bottles of milk on the wall.");
    }
    bottlesTwo--;
}
//Now a while loop
let counter = 10;
while(counter > 0){
    console.log("Your counter is at " + counter);
    counter--;
};

