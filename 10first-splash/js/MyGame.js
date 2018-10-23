var randomNumber=Math.floor((Math.random()*100))+1;
// console.log(randomNumber);

var guessField=document.querySelector('#guessField');
// console.log(guessField.children);
// console.log(guessField.type);

var guesses=document.querySelector('.guesses');
console.log(guessesField);
var lastResult=document.querySelector('.lastResult');
console.log(guesses);
var lowOrHi=document.querySelector('.lowOrHi');
var guessSubmit=document.querySelector('.guessSubmir');

var guessCoutn=1;
var resetButton;
guessField.focus();

function checkGuess(){
    // document.write('我是结论');
    guesses.innerHTML+=guessField.value+" ";
    guesses.style.backgroundColor="red";
}

// checkGuess();


guessSubmit.addEventListener('click',checkGuess);
