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
        input.addEventListener('change', quantityChanged);

    }
    //Add to Cart
    var addCart = document.getElementsByClassName('add-cart');
    for (let i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener('click', addCartClicked)

    }

    //Button Buy
    document
        .getElementsByClassName('btn-buy')[0]
        .addEventListener('click', buyButtonClicked);
}

function buyButtonClicked(){
    alert("Your order is placed");
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while (cartContent.hasChildNodes()) {
        cartContent.removeChild(cartContent.firstChild);
    }
}
function addFavorite() {
    /**
     * Function to add a product to favorite. i.e like
     * get a love icon from box icons
     * set it with the class of add-cart
     * set onclick
     * Or use ...?
     */
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
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updatetotal();
}
//Add to Cart
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    console.log

    addProductToCart(title, price, productImg);
    updatetotal();

}

function addProductToCart(title, price, productImg) {
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add('cart-box');
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var cartItemsNames = cartItems.getElementsByClassName('cart-product-title');
    for (var i = 0; i < cartItemsNames.length; i++) {
        if (cartItemsNames[i].innerText == title) {
            alert("Item already in the bag!");
            return;
        }
    }


    var cartBoxContent = `
                        <img src= "${productImg}" alt="" class="cart-img">
                        <div class="detail-box">
                             <div class="cart-product-title">${title}</div>
                             <div class="cart-price">${price}</div>
                             <input type="number" value="1" class="cart-quantity">
                        </div>
                        <!-- REMOVE CART -->
                        <i class="bx bxs-trash-alt cart-remove" ></i>`;
    cartShopBox.innerHTML = cartBoxContent;
    cartItems.append(cartShopBox);
    cartShopBox
        .getElementsByClassName('cart-remove')[0]
        .addEventListener('click', removeCartItem);
    cartShopBox
        .getElementsByClassName('cart-quantity')[0]
        .addEventListener('change', quantityChanged);


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
        total = Math.round(total * 100) / 100;


        document.getElementsByClassName('total-price')[0].innerText = "$" + total;

    }
}