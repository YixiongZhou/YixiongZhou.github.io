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

var form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 

    var fullName = form.elements["fullName"].value;
    var email = form.elements["email"].value;
    var phone = form.elements["phone"].value;
    var gender = form.elements["gender"].value;
    var languages = [];
    form.querySelectorAll("input[name='language']:checked").forEach(function(input) {
        languages.push(input.value);
    });
    var message = form.elements["message"].value;
    var source = form.elements["source"].value;

    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("gender", gender);
    localStorage.setItem("languages", JSON.stringify(languages));
    localStorage.setItem("message", message);
    localStorage.setItem("source", source); 

    alert("Form submitted successfully!");

    form.reset();
});

var clearButton = form.querySelector("button[type='reset']");
clearButton.addEventListener("click", function() {
    localStorage.clear();
});