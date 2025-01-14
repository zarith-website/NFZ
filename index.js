document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', function (event) {
        const searchQuery = document.getElementById('search-bar').value.trim();
        if (searchQuery) {
            window.location.href = `productListing.html?search=${encodeURIComponent(searchQuery)}`;
        }
        event.preventDefault();
    });
});
