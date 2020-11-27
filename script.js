let menu = document.querySelector(".menu");
let dropdown = document.querySelector(".dropdown-content");

menu.addEventListener('click', function(e) {
    dropdown.classList.toggle("show");
    document.querySelector(".menu").style.transition = "all 2s";
})

let bodyColor = document.querySelector(".body-color");

// red
let red = document.querySelector("#red-btn");

red.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-yellow");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-red");
    document.getElementById("body-text").innerHTML = "Red background";
})

//orange
let orange = document.querySelector("#orange-btn");

orange.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-red");
    bodyColor.classList.remove("background-yellow");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-orange");
    document.getElementById("body-text").innerHTML = "Orange background";
})

//yellow
let yellow = document.querySelector("#yellow-btn");

yellow.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-red");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-yellow");
    document.getElementById("body-text").innerHTML = "Yellow background";
})

//green
let green = document.querySelector("#green-btn");

green.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-yellow");
    bodyColor.classList.remove("background-red");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-green");
    document.getElementById("body-text").innerHTML = "Green background";
})

//blue
let blue = document.querySelector("#blue-btn");

blue.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-yellow");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-red");
    bodyColor.classList.remove("background-purple");
    bodyColor.classList.add("background-blue");
    document.getElementById("body-text").innerHTML = "Blue background";
})

//purple
let purple = document.querySelector("#purple-btn");

purple.addEventListener('click', function(e) {
    bodyColor.classList.remove("background-orange");
    bodyColor.classList.remove("background-yellow");
    bodyColor.classList.remove("background-green");
    bodyColor.classList.remove("background-blue");
    bodyColor.classList.remove("background-red");
    bodyColor.classList.add("background-purple");
    document.getElementById("body-text").innerHTML = "Purple background";
})

//keypress 1 - 6

//red
document.addEventListener('keypress', function(e) {
    if (e.key == '1') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-yellow");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-red");
        document.getElementById("body-text").innerHTML = "Red background";
    }
})

//orange 
document.addEventListener('keypress', function(e) {
    if (e.key == '2') {
        bodyColor.classList.remove("background-red");
        bodyColor.classList.remove("background-yellow");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-orange");
        document.getElementById("body-text").innerHTML = "Orange background";
    }
})

//yellow
document.addEventListener('keypress', function(e) {
    if (e.key == '3') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-red");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-yellow");
        document.getElementById("body-text").innerHTML = "Yellow background";
    }
})

//green
document.addEventListener('keypress', function(e) {
    if (e.key == '4') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-yellow");
        bodyColor.classList.remove("background-red");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-green");
        document.getElementById("body-text").innerHTML = "Green background";
    }
})

//blue
document.addEventListener('keypress', function(e) {
    if (e.key == '5') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-yellow");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-red");
        bodyColor.classList.remove("background-purple");
        bodyColor.classList.add("background-blue");
        document.getElementById("body-text").innerHTML = "Blue background";
    }
})

//purple
document.addEventListener('keypress', function(e) {
    if (e.key == '6') {
        bodyColor.classList.remove("background-orange");
        bodyColor.classList.remove("background-yellow");
        bodyColor.classList.remove("background-green");
        bodyColor.classList.remove("background-blue");
        bodyColor.classList.remove("background-red");
        bodyColor.classList.add("background-purple");
        document.getElementById("body-text").innerHTML = "Purple background";
    }
})