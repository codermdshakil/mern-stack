
const sections = document.querySelectorAll("section");

for(const section of sections){
    section.style.border = '1px solid green'
    section.style.margin = '10px'
    section.style.padding = '10px'
    section.style.borderRadius = '10px'
    section.style.backgroundColor = 'lightgray'
}


// const placeContainer = document.getElementById('places-container');
// // placeContainer.classList.add("text-center");
// // console.log(placeContainer);

// const li = document.createElement('li');
// li.innerText = "This is a new Li tag";

// placeContainer.appendChild(li);

// console.log(placeContainer.parentNode.parentNode.parentNode);
