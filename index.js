var loader = document.getElementById("preloader");

window.addEventListener("load",function(){
  loader.style.display= "none";
})







/* offcanvas fixed */
document.addEventListener("DOMContentLoaded", function(){
  var myOffcanvas = document.getElementById('offcanvasNavbarLabel');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

/* offcanvas fixed  */

var today = new Date();
var hour = today.getHours();


var greeting;
if (hour < 6) {
  greeting = "Hi!";
}else if(hour <12){
  greeting="Good Morning!";
}
 else if (hour < 18) {
  greeting = "Good Afternoon!";
} else   {
  greeting = "Good Evening!";
} 

document.getElementById("greeting").textContent = greeting;











