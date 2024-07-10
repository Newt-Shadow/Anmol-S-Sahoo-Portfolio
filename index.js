
var today = new Date();
var hour = today.getHours();


var greeting;
if (hour < 12) {
  greeting = "Good Morning!";
} else if (hour < 18) {
  greeting = "Good Afternoon!";
} else   {
  greeting = "Good Evening!";
} 

document.getElementById("greeting").textContent = greeting;
