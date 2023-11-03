//this is how you import functions from other files
import { exampleFunction4 } from "./example.js";
//if theres more than one function you want to import do this:
//import { exampleFunction4, otherFunctionHere } from "./example.js";
// go to bottom of this file









//--------------------------START HERE FROM INDEX.HTML------------------------------
// here is where you put your javascript code
//run your website and right click the page and click inspect
//go to console

console.log("Hello, this is the console where you can see your javascript executed")
console.log(1 + 2);


//How to manipulate elements
//https://www.w3schools.com/js/js_htmldom_elements.asp
//so here im going to change the p element with the id 'example' to go from "Hello World" to "emily"

const txt = "emily";
document.getElementById("example").innerHTML = txt;

//but if you notice its already "emily", thats because it this code is running as soon as the page loads, if you press refresh you 
//can see it says Hello World for a split second and then changes to emily 
//so youd need some sort of trigger on the page like a button 

const txt2 = "alysa";
$("#button").on("click", function(){ //this is jquery syntax, anything you see with $ is jquery
    document.getElementById("example").innerHTML = txt2;
})

//if you refresh it goes back to emily. Any changes made will go away during refresh. Youd need to hold data and states in database, look into localstorage as a start if you want to do that



//so thats a super basic start on how to manipulate elements.



//this is a jquery function that runs when the page loads.
//the code above also runs when the page loads but usually all your code would be contained in functions
//you wouldnt have loose code like up there ^^^
$( document ).ready(function() {
    //these functions are defined below
    exampleFunction2();
    exampleFunction3("abruzzese")
    exampleFunction4(4, 7) //this function is being called from an external file
});


function exampleFunction(){ //so this wont run on page load unless its called, just to show not all code will automatically run of page load
    console.log("This won't run unless its called")
}

const txt3 = "game of thrones" // im watching rn and trying to come up with random shit lol
function exampleFunction2(){
    $("#appendHere").append(`<p>${txt3}</p>`) //so this is appending a p element to the div with "appendHere" id that holds the variable txt3
}                                         //${} is how you can insert variables, just make sure you are using `` (next to the 1 key) to enclose , not '' or ""

function exampleFunction3(txt){
    $("#appendHere"). append(`<p>${txt}</p><button>emily</button>`) //this is doing the same as above but taking in an argument, also you can put as much
                                                                //html in here as you want, doesnt only have to be one element
}


//you can also call functions directly on the elemnts with attributes on the index.html but i dont think 
//its best practice but an example would be:

//directly on the index.html
//<button onclick="exampleFunction()">click here</button>


//GO TO example.js











//FINISH HERE 
//i feel like this is a good start, i didnt go into the idea of 'rendering' like i was talking about the last because i feel like a foundation is super important to start.
//honestly before even going into javascript stuff i just recommend building a site with html and css because its super important to understand
//how elements work. I feel like just coming up with a project and doing it and learning on the way will get you way further than watching courses so deff get on that
//the end <3