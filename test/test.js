const itemList = document.getElementById('itemList');
const searchInput = document.getElementById('searchInput');

// Sample data (replace with your own data)
const items = [
    { name: 'Item 1', description: 'This is item 1' },
    { name: 'Item 2', description: 'This is item 2' },
    // ... more items
];

function searchItems() {
    const searchTerm = searchInput.value.toLowerCase();
    itemList.innerHTML = '';

    items.forEach(item => {
        if (item.name.toLowerCase().includes(searchTerm)) {
            const li = document.createElement('li');
            li.textContent = item.name;
            itemList.appendChild(li);
        }
    });
}