document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'cartPage.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const itemsContainer = document.getElementById('items-container');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    const totalPaymentElement = document.getElementById('total-payment');
    const confirmPaymentButton = document.getElementById('confirm-payment');
    const paymentMethodDropdown = document.getElementById('payment-method');

    const checkoutItems = JSON.parse(localStorage.getItem('checkoutItems')) || [];

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const userAddress = localStorage.getItem('userAddress') || 'No address available';

    const addressSection = document.querySelector('.address-section');
    if (loggedInUser) {
        addressSection.innerHTML = `
            <h3>${loggedInUser.username} (${loggedInUser.contactNumber || '012-3456789'})</h3>
            <p>${userAddress}</p>
        `;
    } else {
        addressSection.innerHTML = '<p>No user logged in. Please log in to proceed.</p>';
    }

    if (checkoutItems.length === 0) {
        itemsContainer.innerHTML = '<p>No items to checkout.</p>';
        return;
    }

    let subtotal = 0;
    checkoutItems.forEach(item => {
        const itemHTML = `
            <div class="item-details">
                <div class="image-and-details">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="details">
                        <h4>${item.name}</h4>
                        <span>Variation: ${item.variation}</span>
                        <h4 style="color: #45a049;">${item.price}</h4>
                    </div>
                </div>
                <div class="quantity">
                    <span>x${item.quantity}</span>
                </div>
            </div>`;
        itemsContainer.innerHTML += itemHTML;
        subtotal += parseFloat(item.price.replace('RM', '')) * item.quantity;
    });

    subtotalElement.textContent = `RM${subtotal.toFixed(2)}`;
    totalElement.textContent = `RM${subtotal.toFixed(2)}`;
    totalPaymentElement.textContent = `RM${subtotal.toFixed(2)}`;

    confirmPaymentButton.addEventListener('click', () => {
        const selectedPaymentMethod = paymentMethodDropdown.value;
        if (!selectedPaymentMethod) {
            alert('Please select a payment method before confirming payment.');
            return;
        }

        window.location.href = 'thankyou.html';
    });
});
