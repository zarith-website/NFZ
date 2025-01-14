const cartData = JSON.parse(localStorage.getItem('cartItems')) || [];
const cartContainer = document.querySelector('.cart-container');
const totalElement = document.querySelector('.total');
const selectAllCheckbox = document.getElementById('select-all');
const checkoutButton = document.querySelector('.checkout-button');

function renderCartItems() {
    const cartItemsContainer = cartContainer.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    if (cartData.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        totalElement.textContent = 'Total: RM0.00';
        return;
    }

    cartData.forEach((item, index) => {
        const cartItemHTML = `
            <div class="cart-item">
                <input type="checkbox" class="product-checkbox" data-index="${index}">
                <img src="${item.image}" alt="${item.name}" class="item-image">
                <div class="item-details">
                    <h4 class="item-name">${item.name}</h4>
                    <select>
                        <option>${item.variation}</option>
                    </select>
                    <span class="item-price">${item.price}</span>
                </div>
                <div class="quantity-controls">
                    <button class="decrease" data-index="${index}">-</button>
                    <input type="number" value="${item.quantity}" min="1" class="quantity" data-index="${index}">
                    <button class="increase" data-index="${index}">+</button>
                </div>
                <button class="remove-item" data-index="${index}">Remove</button> <!-- Remove Button -->
            </div>`;
        cartItemsContainer.innerHTML += cartItemHTML;
    });

    updateTotal();
    attachEventListeners();
}

function attachEventListeners() {
    document.querySelectorAll('.decrease').forEach(btn =>
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;
            if (cartData[index].quantity > 1) {
                cartData[index].quantity--;
                localStorage.setItem('cartItems', JSON.stringify(cartData));
                renderCartItems();
            }
        })
    );

    document.querySelectorAll('.increase').forEach(btn =>
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;
            cartData[index].quantity++;
            localStorage.setItem('cartItems', JSON.stringify(cartData));
            renderCartItems();
        })
    );

    document.querySelectorAll('.product-checkbox').forEach(checkbox =>
        checkbox.addEventListener('change', updateTotal)
    );

    selectAllCheckbox.addEventListener('change', () => {
        const isChecked = selectAllCheckbox.checked;
        document.querySelectorAll('.product-checkbox').forEach(checkbox => {
            checkbox.checked = isChecked;
        });
        updateTotal();
    });

    checkoutButton.addEventListener('click', handleCheckout);

    document.querySelectorAll('.remove-item').forEach(btn =>
        btn.addEventListener('click', () => {
            const index = btn.dataset.index;
            cartData.splice(index, 1);
            localStorage.setItem('cartItems', JSON.stringify(cartData));
            renderCartItems(); 
        })
    );
}

function updateTotal() {
    let total = 0;
    document.querySelectorAll('.product-checkbox').forEach(checkbox => {
        if (checkbox.checked) {
            const index = checkbox.dataset.index;
            const item = cartData[index];
            const itemTotal = item.quantity * parseFloat(item.price.replace('RM', ''));
            total += itemTotal;
        }
    });
    totalElement.textContent = `Total: RM${total.toFixed(2)}`;
}

function handleCheckout() {
    const selectedItems = [];
    document.querySelectorAll('.product-checkbox').forEach((checkbox, index) => {
        if (checkbox.checked) {
            const item = cartData[index];
            selectedItems.push(item);
        }
    });

    if (selectedItems.length === 0) {
        alert('Please select at least one item to proceed to checkout.');
        return;
    }

    localStorage.setItem('checkoutItems', JSON.stringify(selectedItems));

    window.location.href = 'checkoutPage.html';
}

renderCartItems();
attachEventListeners();
