const h1 = document.querySelector('#heading');
h1.textContent = "This is new text."
h1.style.color = "red";
h1.style.backgroundColor = "black"
h1.style.textAlign = "center"
h1.classList.add('main-heading')

window.onload = function () {
    document.getElementById("message").textContent = "Welcome to JavaScript DOM Manipulation"
}