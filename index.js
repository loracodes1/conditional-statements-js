//if condition
//BLOCK OF CODE
const age = 30;

let isAdult;

if (age >= 18) {
    isAdult = true;
}
// => true

isAdult;
console.log(isAdult)
// => true

//BLOCK OF CODE
const Age = 14;

let isOld;

if (Age >= 18) {
    isOld = true;
}

isOld;
console.log(isOld)

// else clause
//Often we want to run one block of code when the condition returns a truthy value and a different block of code when it returns a falsey value. To do this, we use an else clause:
//BLOCK OF CODE
const theAge=14;
let isGrown;
if(theAge>=18){
    isGrown=true;
}else{
    isGrown=false;
}
console.log(isGrown)