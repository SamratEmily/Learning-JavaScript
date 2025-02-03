console.log("Hello Sunshine! 🌞");

// Light Toggle Button
const lightButton = document.getElementsByClassName("button-for-light")[0];
lightButton.addEventListener("click", function () {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "pink" ? "antiquewhite" : "pink";
});

// Color Animation Button
const colorButton = document.getElementsByClassName("button-for-color")[0];
colorButton.addEventListener("click", function () {
    let colors = ["red", "green", "blue", "yellow", "purple"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});

// Toggle Text Button
const textButton = document.getElementsByClassName("toggle-text")[0];
const heading = document.querySelector("h1");

textButton.addEventListener("click", function () {
    heading.innerText = heading.innerText === "I am Learning JavaScript" 
        ? "JavaScript is Fun!" 
        : "I am Learning JavaScript";
});

// Show/Hide Message Button
const messageButton = document.getElementsByClassName("show-message")[0];
const message = document.querySelector(".message");

messageButton.addEventListener("click", function () {
    message.classList.toggle("hidden");
});

// Add New List Item Button
const addItemButton = document.getElementsByClassName("add-item")[0];
const list = document.getElementById("dynamic-list");

addItemButton.addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.innerText = "New Item " + (list.children.length + 1);
    list.appendChild(newItem);
});

// Delete Last Item Button
const deleteItemButton = document.getElementsByClassName("delete-item")[0];

deleteItemButton.addEventListener("click", function () {
    if (list.children.length > 0) {
        list.removeChild(list.lastChild);
    } else {
        alert("No more items to delete!");
    }
});

// Update Last Item Button
const updateItemButton = document.getElementsByClassName("update-item")[0];

updateItemButton.addEventListener("click", function () {
    if (list.children.length > 0) {
        let lastItem = list.lastChild;
        lastItem.innerText = "Updated Item " + list.children.length;
    } else {
        alert("No items to update!");
    }
});
