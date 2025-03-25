import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//Declaration the 2 arrays that will make the value of the card
let suits = ['♦','♥','♠','♣'];
let values = [2,3,4,5,6,7,8,9,10,'J','Q','K','ACE']

//Setting links to our html elements
let topValue = document.querySelector('#topValue');
let topSuit = document.querySelector('#topSuit');
let bottomValue = document.querySelector('#bottomValue');
let bottomSuit = document.querySelector('#bottomSuit');
let contentValues = document.querySelector('.contentValues');

//This function will generate a random suit from an inserted array and will return a random value between all the suits
function generateSuit(array) {

  //Generating a random number between 3 and 0. Its because the array of the values have 4 in total, but arrays start at 0 and end with 1 less
  let chosenSuit = array[Math.floor(Math.random() * (3 - 0 + 1) + 0)];

  return chosenSuit;

}

//This function will generate a random number or character from an inserted array and will return a random value between that will set the value of the card
function generateValue(array) {

  //Generating a random number between 12 and 0. Its because the array of the values have 13 in total, but arrays start at 0 and end with 1 less
  let chosenValue = array[Math.floor(Math.random() * (12 - 0 + 1) + 0)];

  return chosenValue;

}

//This is the main function. This one saves the values generated previously in 2 variables. Those variables are the key to all of the conditions in the function. First of all,
//identifies if the suit must be red or black by switching his class. After that, he has to recognice if the value is "ACE". If the value is "ACE" the center of the card will be
//a suit, but if the value is not "ACE", it will just print the value selected previously by the random functions
function updateCard(value1, value2) {

  //This will be the suit of the card
  let suit = generateSuit(value2);

  //This will be the value of the card
  let value = generateValue(value1);

  //Here we identify if the value of "suit" is hearts or rhombuses so we can add the class from bootstrap that allow us to switch the text to red color 
  //or black (depends on the suit: red for hearts or rhombuses, black for spades and clubs)
  if(suit==="♥" || suit==="♦"){

    bottomValue.classList.add("text-danger");
    bottomSuit.classList.add("text-danger");
    topValue.classList.add("text-danger");
    topSuit.classList.add("text-danger");
    contentValues.classList.add("text-danger");
    bottomValue.classList.remove("text-dark");
    bottomSuit.classList.remove("text-dark");
    topValue.classList.remove("text-dark");
    topSuit.classList.remove("text-dark");
    contentValues.classList.remove("text-dark");

  }

  else{    

    bottomValue.classList.remove("text-danger");
    bottomSuit.classList.remove("text-danger");
    topValue.classList.remove("text-danger");
    topSuit.classList.remove("text-danger");
    contentValues.classList.remove("text-danger");
    bottomValue.classList.add("text-dark");
    bottomSuit.classList.add("text-dark");
    topValue.classList.add("text-dark");
    topSuit.classList.add("text-dark");
    contentValues.classList.add("text-dark");
  }

  //Here we are looking if the value is "ACE" or not. Its because in the array the value is defined as "ACE" and not as "A". Also
  //because if the card value is "ACE" we want to print a suit in the center instead of a value ("A" in this case)
  //We are also changing the text of the content of the card, filling it with the values generated randomly
  if(value=="ACE"){

    bottomValue.innerText = "A";
    topValue.innerText = "A";
    topSuit.innerText = suit;
    bottomSuit.innerText = suit;
    contentValues.innerText = suit;
  }

  else{ 

    topValue.innerText = value;
    topSuit.innerText = suit;
    bottomValue.innerText = value;
    bottomSuit.innerText = suit;
    contentValues.innerText = value;
  }

}

//Here we execute a function that updates the website every 3 seconds and will use the function "updateCard" with values generated randomly by the previous functions
let executeInterval = setInterval(() => updateCard(values,suits), 3000);

window.onload = function() {

//Here we call the function again to make sure that the first image of the website will be completely random and not the html default
  updateCard(values,suits)

};
