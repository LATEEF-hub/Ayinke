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


if(document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
}else{
    ready();
}

// making function

function ready(){
    //remove item from cart
    var removeCartButton = document.getElementsByClassName('cart-remove');
    console.log(removeCartButton)
    for (var i = 0; i < removeCartButton.length; i++) {
        const buttons = removeCartButton[i];
        buttons.addEventListener('click', removeCartItem);
        
    }
}

function removeCartItem(event) {
    /**
     * function to remove product from Cart
     */
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();

}