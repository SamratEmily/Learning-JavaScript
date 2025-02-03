console.log("hello sunshine");

const newButton = document.getElementsByClassName("button-for-color")[0];

newButton.addEventListener("click", function(){
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "green" ? "white" : "green";
});