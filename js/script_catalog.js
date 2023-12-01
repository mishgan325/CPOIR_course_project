let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

function addToCart(name, model, quantity, price, imageSrc) {
    const item = { name, model, quantity, price, imageSrc };


    const indexOfElement = cartItems.findIndex(cartItem =>
        cartItem.name === item.name && cartItem.model === item.model
    );

    if (indexOfElement !== -1) {
        // Заменяем элемент новым значением
        cartItems[indexOfElement].quantity = parseInt(cartItems[indexOfElement].quantity) + 1;
    } else {
        cartItems.push(item);
    }

    updateLocalStorage();
}

function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}


let cartCount = cartItems.length;
document.getElementById("total-quantity").textContent = cartCount;

function findElementByName(name, list) {
    // Используем метод find() для поиска элемента в массиве
    return list.find(item => item.name === name);
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function(e) {
        console.log("add-to-cart");
        e.preventDefault();
        // cart.read();
        cartCount++;
        document.getElementById("total-quantity").textContent = cartCount;
        const productName = button.closest('.product').querySelector('.pc-name h2 a').textContent;
        const price = button.closest('.product').querySelector('.price').textContent;
        const imageSrc = button.closest('.product').querySelector('.content-image').src;

        addToCart(productName, 'пк', 1, price, imageSrc.substring(imageSrc.indexOf('images')));
    });
});


/* корзина*/

function removeCartItem(index) {
    // Удаляем элемент с указанным индексом
    cartItems.splice(index, 1);

    // Обновляем отображение корзины
    displayCart();
}

function clearCart() {
    // Очищаем массив
    cartItems = [];

    // Обновляем отображение корзины
    displayCart();
}

function updateQuantity(index, newQuantity) {

    if (newQuantity > 9) {
        newQuantity = 9;
    } else if (newQuantity < 0)
    {
        newQuantity = 0;
    }

    cartItems[index].quantity = newQuantity;
    displayCart();
}

// function displayCart() {
//     const cartContainer = document.getElementById('cart');
//     cartContainer.innerHTML = '<h2>\n' +
//         '                Корзина\n' +
//         '                <button class="clear-btn" onclick="clearCart()">\n' +
//         '                    <img src="images/clear_cart.png" alt="Очистить корзину" width="20px">\n' +
//         '                </button>\n' +
//         '            </h2>';
//     // Выводим каждый элемент корзины
//     cartItems.forEach((item, index) => {
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('item');
//
//         const buttons = document.createElement('div');
//         buttons.className = "buttons";
//         const deleteButton = document.createElement('button');
//         deleteButton.classList.add('delete-btn');
//         deleteButton.innerHTML = '<img src="images/delete.svg" alt="Удалить" />';
//         deleteButton.onclick = () => removeCartItem(index);
//         buttons.appendChild(deleteButton);
//         itemElement.appendChild(buttons);
//
//
//         const imageElement = document.createElement('div');
//         imageElement.classList.add('image');
//         imageElement.innerHTML = `<img src="${item.imageSrc}" alt="${item.name}" />`;
//         itemElement.appendChild(imageElement);
//
//         const descriptionElement = document.createElement('div');
//         descriptionElement.classList.add('description');
//         descriptionElement.innerHTML = `
//           <span>${item.name}</span>
//           <span>${item.model}</span>
//           <span>${item.price}</span>
//         `;
//         itemElement.appendChild(descriptionElement);
//
//         const quantityElement = document.createElement('div');
//         quantityElement.classList.add('quantity');
//
//         const plusButton = document.createElement('button');
//         plusButton.classList.add('plus-btn');
//         plusButton.innerHTML = '<img src="images/plus.svg" alt="+" />';
//         plusButton.onclick = () => updateQuantity(index, item.quantity + 1);
//         quantityElement.appendChild(plusButton);
//
//         const quantityInput = document.createElement('input');
//         quantityInput.type = 'text';
//         quantityInput.name = 'name';
//         quantityInput.value = item.quantity;
//         quantityElement.appendChild(quantityInput);
//
//         const minusButton = document.createElement('button');
//         minusButton.classList.add('minus-btn');
//         minusButton.innerHTML = '<img src="images/minus.svg" alt="-" />';
//         minusButton.onclick = () => updateQuantity(index, item.quantity - 1);
//         quantityElement.appendChild(minusButton);
//
//         itemElement.appendChild(quantityElement);
//
//         const totalPriceElement = document.createElement('div');
//         totalPriceElement.classList.add('total-price');
//         totalPriceElement.textContent = `$${item.quantity * item.price.substring(1)}`;
//         itemElement.appendChild(totalPriceElement);
//
//         cartContainer.appendChild(itemElement);
//     });
//
//     updateLocalStorage();
// }

// document.getElementById("cart-icon").addEventListener('mouseover', function () {
//     displayCart();
// });

// displayCart();