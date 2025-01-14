document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'productListing.html';
});

document.getElementById('profile-icon').addEventListener('click', () => {
    window.location.href = 'Account.html';
});

document.getElementById('cart-icon').addEventListener('click', () => {
    window.location.href = 'cartPage.html';
});

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
document.getElementById('cart-count').innerText = cartCount;

document.getElementById('add-to-cart').addEventListener('click', () => {
    const quantity = parseInt(document.getElementById('product-quantity').value, 10);
    if (!products[productId]) return;
    const product = products[productId];

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);

    if (existingItemIndex > -1) {
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        cartItems.push({
            id: productId,
            name: product.name,
            price: product.price,
            variation: `${product.color}, ${product.size}`,
            image: product.image,
            quantity: quantity
        });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    const updatedCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    localStorage.setItem('cartCount', updatedCount);
    document.getElementById('cart-count').innerText = updatedCount;
});

const products = {
    "1": {
        name: "Baju Kurung Kedah",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM79.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Baby Pink",
        size: "Free Size",
        image: ".baju kurung.jpg"
    },
    "2": {
        name: "Baju Kurung Sulam",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM79.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Baby Blue",
        size: "Free Size",
        image: ".baju kurung1.jpg"
    },
    "3": {
        name: "Jubah Layer Malikha",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM99.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Light Grey, Soft Yellow",
        size: "Free Size",
        image: ".jubah.jpg"
    },
    "4": {
        name: "Muslimah Suit Sophie",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM79.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Dark Purple",
        size: "Free Size",
        image: ".suit muslimah.jpg"
    },
    "5": {
        name: "Baju Melayu Fit",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM69.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Black",
        size: "Free Size",
        image: ".baju melayu.jpg"
    },
    "6": {
        name: "Baju Melayu Cekak Musang",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM69.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Brick Red",
        size: "Free Size",
        image: ".baju melayu cm.jpg"
    },
    "7": {
        name: "Baju Melayu Teluk Belanga",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM69.00",
        shipping: "Ships from Selangor",
        material: "Cotton",
        color: "Black",
        size: "Free Size",
        image: ".baju melayu tb.jpg"
    },
    "8": {
        name: "Como Crepe Kurta",
        ratings: "⭐⭐⭐⭐⭐ (5.0)",
        price: "RM69.00",
        shipping: "Ships from Selangor",
        material: "Como Crepe",
        color: "Maroon",
        size: "Free Size",
        image: ".kurta.jpeg"
    }
};

let urlParams = new URLSearchParams(window.location.search);
let productId = urlParams.get('id');

if (!productId) {
    productId = localStorage.getItem('lastViewedProduct');
} else {
    localStorage.setItem('lastViewedProduct', productId);
}

if (products[productId]) {
    document.getElementById('product-name').innerText = products[productId].name;
    document.getElementById('product-ratings').innerText = products[productId].ratings;
    document.getElementById('product-price').innerText = products[productId].price;
    document.getElementById('product-shipping').innerText = products[productId].shipping;
    document.getElementById('product-material').innerText = products[productId].material;
    document.getElementById('product-color').innerText = products[productId].color;
    document.getElementById('product-size').innerText = products[productId].size;
    document.getElementById('product-image').src = products[productId].image;
} else {
    document.getElementById('product-details').innerHTML = "<p>Product not found.</p>";
}
