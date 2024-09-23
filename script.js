$(document).ready(function() {
    // Search button click event
    $('#searchBtn').click(function() {
        let searchTerm = $('#searchInput').val();

        if (searchTerm === "") {
            alert("Please enter an item name or ID to search.");
            return;
        }

        // Call the API to search for inventory items
        searchInventory(searchTerm);
    });

    // Function to call API and fetch results
    function searchInventory(searchTerm) {
        const apiUrl = 'https://api.example.com/search'; // Replace with actual API URL

        $.ajax({
            url: apiUrl,
            type: 'GET',
            data: { query: searchTerm },
            success: function(response) {
                // Process and display the search results
                displayResults(response.items);
            },
            error: function() {
                alert('Error occurred while fetching inventory data.');
            }
        });
    }

    // Function to display results
    function displayResults(items) {
        let resultContainer = $('#searchResults');
        resultContainer.empty(); // Clear previous results

        if (items.length === 0) {
            resultContainer.append('<p>No items found.</p>');
            return;
        }

        items.forEach(item => {
            resultContainer.append(`
                <div class="result-item">
                    <h5>${item.name}</h5>
                    <p>Item ID: ${item.id}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <p>Price: ${item.price}</p>
                </div>
            `);
        });
    }
});


// {
//     "items": [
//       { "id": "123", "name": "Item 1", "quantity": 10, "price": "$50" },
//       { "id": "124", "name": "Item 2", "quantity": 5, "price": "$30" }
//     ]
//   }
  