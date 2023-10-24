// In script.js
const addToBagButton = document.getElementById('addToBag');
const addToWhishListButton = document.getElementById('addToWhishList');

let cartQuantity = 0;
document.querySelector('#cartQuantity').innerText = `You have added ${cartQuantity} items to your cart`;

addToBagButton.addEventListener('click', (event) => {
    cartQuantity++; //ish ise quantatiy 1 add karega
    document.querySelector('#cartQuantity').innerText = `You have added ${cartQuantity} items to your cart`; // inner text jo hai wo use karte hai taaki wo cart me kitne items add hue wo show kare 
}); 

addToWhishListButton.addEventListener('click', (event) => {
    alert('Added to wishlist!');
});
