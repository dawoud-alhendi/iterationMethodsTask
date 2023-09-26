//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];


/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.
f
Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
function larger (x){
    return x>=25;
}
numbers.filter(larger)
function divid(x){
    return x%5==0;
}
numbers.filter(divid);


/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
function squar (x){
    return x*x ;
}


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.

Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/

function largerThen20 (x){
    return x>=20;
}
function multi3 (x){
    return x*3
}

const array3 = numbers
.filter(largerThen20)
.map(squar);

// const array3 = numbers.filter(divid).map(multi3);
// console.log(array3)
console.log(array3)


function multiplyBy3(r){
   return r*3

}
const array4 = numbers
.filter(divid).map(multiplyBy3);
console.log(array4)