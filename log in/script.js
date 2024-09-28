
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    // login logic (This is just a placeholder)
    alert(`login: ${username}`);
});

document.getElementById('contentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const content = event.target.content.value;

    // Content submission logic (This is just a placeholder)
    alert(`your abouth: ${content}`);
});