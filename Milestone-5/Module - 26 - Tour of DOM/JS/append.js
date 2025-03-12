// where to add
const placesList = document.getElementById('places-list');
// what do add
const li = document.createElement('li');
li.innerText = "Ranigonj Rivers Ghat";
// added child
placesList.appendChild(li);


// main 
const mainContainer = document.getElementById('main-container');

const newSection = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "Unhealy Food";
newSection.appendChild(h1);
mainContainer.appendChild(newSection);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = "Mori";
const li2 = document.createElement('li');
li2.innerText = "Pizza";
const li3 = document.createElement('li');
li3.innerText = "Burger"
const li4 = document.createElement('li');
li4.innerText = "Bot";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
ul.appendChild(li4);

newSection.appendChild(ul);

const last_container = document.getElementById('last-container');
last_container.innerHTML = `
<h1> Book List  </h1>
<ul>
    <li>Atomic Habit</li>
    <li>Programming Books</li>
    <li>Think and grow Rich</li>
    <li>Root to Success</li>
</ul>
`;

const ul2 = document.createElement('ul');

last_container.appendChild(ul2);





