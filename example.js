
//so you can divid you code up into different files and call them from eachother
//use the word export if you want the function to be accessible outside the file
//so here you wouldnt be able to access the add function from a different file
//exampleFunction4 is being called in the .ready function in index.js
//GO BACK TO TOP OF index.js

function add(num1,num2){
    return num1 + num2
}


export function exampleFunction4(num1, num2){
    $("#appendHere").append(`<p>${add(num1, num2)}</p>`) 
}