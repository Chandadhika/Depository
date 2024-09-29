document.getElementById('linkSelect').addEventListener('change', function() {
    const selectedValue = this.value;
    if (selectedValue) {
        window.location.href = selectedValue; // Redirect to the selected link
    }
});

function navigateToPage(selectElement) {
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}