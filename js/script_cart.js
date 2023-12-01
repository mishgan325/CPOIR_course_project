const cartQty = document.getElementById("total-quantity");

function removeCartItem(index) {
    // Удаляем элемент с указанным индексом
    cartItems.splice(index, 1);

    // Обновляем отображение корзины
    displayCart();
}

function clearCart() {
    // Очищаем массив
    cartItems = [];

    showNotification("Корзина очищена");

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

function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];


function displayCart() {
    cartQty.innerText = cartItems.length;

    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '<h2>\n' +
        '                Корзина\n' +
        '                <button class="clear-btn" onclick="clearCart()">\n' +
        '                    <img src="images/clear_cart.png" alt="Очистить корзину" width="20px">\n' +
        '                </button>\n' +
        '            </h2>';
    // Выводим каждый элемент корзины
    cartItems.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('item');

        // const buttons = document.createElement('div');
        // buttons.className = "buttons";
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<img src="images/delete.svg" alt="Удалить" />';
        deleteButton.onclick = () => removeCartItem(index);
        // buttons.appendChild(deleteButton);
        itemElement.appendChild(deleteButton);


        const imageElement = document.createElement('div');
        imageElement.classList.add('image');
        imageElement.innerHTML = `<img src="${item.imageSrc}" alt="${item.name}" />`;
        itemElement.appendChild(imageElement);

        const descriptionElement = document.createElement('div');
        descriptionElement.classList.add('description');
        descriptionElement.innerHTML = `
          <span>${item.name}</span>
          <span>${item.model}</span>
          <span>${item.price}</span>
        `;
        itemElement.appendChild(descriptionElement);

        const quantityElement = document.createElement('div');
        quantityElement.classList.add('quantity');

        const plusButton = document.createElement('button');
        plusButton.classList.add('plus-btn');
        plusButton.innerHTML = '<img src="images/plus.svg" alt="+" />';
        plusButton.onclick = () => updateQuantity(index, item.quantity + 1);
        quantityElement.appendChild(plusButton);

        const quantityInput = document.createElement('input');
        quantityInput.type = 'text';
        quantityInput.name = 'name';
        quantityInput.value = item.quantity;
        quantityElement.appendChild(quantityInput);

        const minusButton = document.createElement('button');
        minusButton.classList.add('minus-btn');
        minusButton.innerHTML = '<img src="images/minus.svg" alt="-" />';
        minusButton.onclick = () => updateQuantity(index, item.quantity - 1);
        quantityElement.appendChild(minusButton);

        itemElement.appendChild(quantityElement);

        const totalPriceElement = document.createElement('div');
        totalPriceElement.classList.add('total-price');
        totalPriceElement.textContent = `$${item.quantity * item.price.substring(1)}`;
        itemElement.appendChild(totalPriceElement);

        cartContainer.appendChild(itemElement);
    });

    updateLocalStorage();
}

displayCart();
function showNotification(text, button) {
    var existingNotification = document.querySelector('.notification-message');

    if (!existingNotification) {
        var notification = document.createElement('div');
        notification.className = 'notification-message active';

        var message = document.createElement('span');
        message.className = 'message';
        message.innerText = text;

        var close = document.createElement('span');
        close.className = 'close';
        close.innerHTML = '&times;';
        close.onclick = function() {
            notification.classList.remove('active');
        };

        notification.appendChild(message);
        notification.appendChild(close);

        document.body.appendChild(notification);

        // Определение позиции уведомления относительно кнопки
        var buttonRect = button.getBoundingClientRect();
        var notificationRect = notification.getBoundingClientRect();

        var top = buttonRect.top - notificationRect.height - 10; // Расстояние сверху
        var left = buttonRect.left; // Центрирование по горизонтали

        // Установка позиции уведомления
        notification.style.top = top + 'px';
        notification.style.left = left + 'px';
    }
}


function showNotification(text) {
    var existingNotification = document.querySelector('.notification-message');

    if (!existingNotification) {
        var notification = document.createElement('div');
        notification.className = 'notification-message active';

        var message = document.createElement('span');
        message.className = 'message';
        message.innerText = text;

        var close = document.createElement('span');
        close.className = 'close';
        close.innerHTML = '&times;';
        close.onclick = function() {
            notification.classList.remove('active');
            clearTimeout()
        };

        notification.appendChild(message);
        notification.appendChild(close);

        document.body.appendChild(notification);

        // Через 5 секунд уведомление исчезнет
        var timerId = setTimeout(function() {
            notification.remove();
        }, 1500);
    }
}
