function darkMode() {
    var bodyElement = document.body;
    var button = document.getElementById("darkMode");
    var emojiSpan = button.querySelector(".emoji-icon");

    bodyElement.classList.toggle("darkMode");
    emojiSpan.classList.add("hidden");

    setTimeout(function() {
        if (bodyElement.classList.contains("darkMode")) {
            emojiSpan.textContent = "☀️";
        } else {
            emojiSpan.textContent = "🌙";
        }
        emojiSpan.classList.remove("hidden");
    }, 200);
}


/*
var today = new Date();
var hourNow = today.getHours();
var greeting;
var curTi = today.toLocaleString();

if (curTi<=20 && curTi>=6){
    greeting='good morning'
}
else{
    greeting="good night"
    document.body.style.backgroundColor = "#161001";
}



document.write('<h3>' + greeting + curTi + '</h3>');
*/