// Selecting Elements
    console.log(document.querySelector("#title"));
    console.log(document.querySelectorAll("h2"))
    console.log(document.querySelectorAll("h2")[0])
    console.log(document.getElementById("title"));
// Changing Content
document.querySelector("#title").innerHTML = "<h2 id='title'>Checking if I did innerHTML well</h2>"
document.querySelector("p").innerText = "This is a paragraph"
document.getElementById("messageBox").innerHTML = "<h3><strong>Success!</strong></h3>"
// Changing Style
document.querySelector("#title").style.color = "red";
document.querySelector("#title").style.backgroundColor = "gray";

document.querySelector("button").classList.add("changeStyle")
// Handling Events

document.getElementById("changeText").addEventListener("click", changeText)

function changeText(){
    document.querySelector("#title").innerHTML = "<h1><strong>You have changed this!</strong></h1>";
    document.querySelector("#title").classList.add("newTitle");
}   