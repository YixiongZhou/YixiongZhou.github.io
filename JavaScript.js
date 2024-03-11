function promptName() {
    var name = prompt("Please enter your name：");
    if (name != null && name != "") {
        document.getElementById("welcomeMessage").innerHTML = "Welcome to my website," + name + ".";
    } else {
        document.getElementById("welcomeMessage").innerHTML = "Hello, anonymous.";
    }
}

function enlargeImage() {
    var img = document.getElementById("myImage");
    var currentWidth = img.offsetWidth;
    var maxWidth = 400;
    if (currentWidth < maxWidth) {
        img.style.width = (currentWidth * 2) + "px";
    } else {
        img.style.width = "200px"; 
    }
}


var navItems = document.querySelectorAll(".navbar li a");
navItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
        this.style.backgroundColor = "#555";
    });
    item.addEventListener("mouseout", function() {
        this.style.backgroundColor = ""; 
    });
});

function zoomIn() {
    var img = document.getElementById("myImage");
    if (img.style.width === "200px") {
        img.style.width = "400px";
    } else {
        img.style.width = "200px";
    }
}

function mouseOver(element) {
    element.classList.add('hovered');
}

function mouseOut(element) {
    element.classList.remove('hovered');
}

var dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener("mouseover", function() {
        this.querySelector('.dropdown-content').style.display = "block";
    });
    dropdown.addEventListener("mouseout", function() {
        this.querySelector('.dropdown-content').style.display = "none";
    });
});