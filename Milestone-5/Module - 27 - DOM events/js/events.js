// option : 2 add style
function makeRed() {
  document.body.style.backgroundColor = "red";
}

// Option : 3 add style
const makeBlueButton = document.getElementById("make-blue");

const makeBlue = () => {
    document.body.style.backgroundColor = 'blue';
}

makeBlueButton.onclick = makeBlue;


// option : 3.1 
const makePurpleButton = document.getElementById('make-purple');

// makePurpleButton.onclick = function makePurple(){
//     document.body.style.backgroundColor = 'purple';
// }

// using arrow function
makePurpleButton.onclick = () => {
    document.body.style.backgroundColor = 'purple';
}

// Option 4: // addEventListener('method', 'function')

const pinkButton = document.getElementById('make-pink');

// one way
pinkButton.addEventListener('click', makePink);
function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// // direct way
// pinkButton.addEventListener('click', makePink = () => {
//     document.body.style.backgroundColor = 'pink';
// });

// Option 4 Final 
const makeGreenButton = document.getElementById('make-green').addEventListener('click', () => {
    document.body.style.backgroundColor = 'green';
})






