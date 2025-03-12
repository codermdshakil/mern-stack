
document.getElementById('item-2').addEventListener('click', (event) => {
    console.log('item - 2 Clicked!');
    event.stopImmediatePropagation(); 
});

document.getElementById('item-2').addEventListener('click', (event) => {
    console.log('item - 2 second Clicked!');
});
document.getElementById('item-2').addEventListener('click', (event) => {
    console.log('item - 2 third Clicked!');
});

document.getElementById('ul-lists').addEventListener('click', () => {
    console.log('Ul list Clicked');
});

document.getElementById('container-section').addEventListener('click', () => {
    console.log('Container section clicked');
});

document.getElementById('body').addEventListener('click', () => {
    console.log('body clicked');
})



