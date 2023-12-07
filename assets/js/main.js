// Cart


alert("working!");
let cart = document.querySelector('.cart');
let cartIcon = document.querySelector('#cart-icon');
let closeCart = document.querySelector('#close-cart');

cartIcon.onclick = () => {
    cart.classList.add('active');
}
closeCart.onclick = () => {
    cart.classList.remove('active');
}


if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}

// making function

function ready() {
    //remove item from cart
    var removeCartButton = document.getElementsByClassName('cart-remove');
    console.log(removeCartButton)
    for (var i = 0; i < removeCartButton.length; i++) {
        const buttons = removeCartButton[i];
        buttons.addEventListener('click', removeCartItem);

    }

    //To change Quantity

    var quantityInputs = document.getElementsByClassName('cart-quantity');
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged)
        
    }
}

function removeCartItem(event) {
    /**
     * function to remove product from Cart
     */
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();

}
// Quantity Changes
function quantityChanged(event){
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}


function updatetotal() {
    /**
     * Function to update Total
     */

    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for (var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityEl = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        var quantity = quantityEl.value;
        total = total + price * quantity;
        //    If price consist of cents 
        total = Math.round(total *100)/  100;  
         




        document.getElementsByClassName('total-price')[0].innerText = "$" + total;

    }
}