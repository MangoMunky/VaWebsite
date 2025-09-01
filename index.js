var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow>0){
    greeting='yo'
}
else{
    greeting="maaa"
}

var formattedDate = today.toLocaleString();
document.write('<h3>' + greeting + formattedDate + '</h3>');