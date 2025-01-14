document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search')?.toLowerCase();

    const products = document.querySelectorAll('.product-card');

    if (searchQuery) {
        products.forEach(product => {
            const productName = product.querySelector('h3').innerText.toLowerCase();
            if (productName.includes(searchQuery)) {
                product.style.display = 'block';
            } else {
                product.style.display = 'none';
            }
        });
    } else {
        products.forEach(product => product.style.display = 'block');
    }
});

document.getElementById('back-button').addEventListener('click', () => {
    window.location.href = 'index.html';
});

document.getElementById('filter-icon').addEventListener('click', () => {
    const filterSection = document.getElementById('filter-section');
    filterSection.classList.toggle('hidden');
    filterSection.style.display = filterSection.classList.contains('hidden') ? 'none' : 'block';
});

document.getElementById('apply-filter').addEventListener('click', () => {
    const selectedCategory = document.querySelector('input[name="category"]:checked');
    const products = document.querySelectorAll('.product-card');

    if (!selectedCategory) {
        alert("Please select a category to filter.");
        return;
    }

    const category = selectedCategory.value.toLowerCase();

    products.forEach(product => {
        if (product.dataset.category.toLowerCase() === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });

    document.getElementById('filter-section').classList.add('hidden');
    document.getElementById('filter-section').style.display = 'none';
});

document.getElementById('search-button').addEventListener('click', () => {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');

    products.forEach(product => {
        const productName = product.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productId = card.dataset.id;
        window.location.href = `productDetails.html?id=${productId}`;
    });
});
