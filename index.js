document.addEventListener("DOMContentLoaded", function () {
  var preloader = document.getElementById('preloader');
  preloader.style.display = 'flex';

  setTimeout(function () {
    preloader.style.display = 'none';
    document.body.style.visibility = 'visible';


    var today = new Date();
    var hour = today.getHours();

    var greeting;
    if (hour < 6) {
      greeting = "Hi!";
    } else if (hour < 12) {
      greeting = "Good Morning!";
    } else if (hour < 18) {
      greeting = "Good Afternoon!";
    } else {
      greeting = "Good Evening!";
    }

    setTimeout(function () {
      document.querySelector("#greeting").classList.add("pre-greet");
      document.getElementById("greeting").textContent = greeting;
    }, 700);

    document.getElementById("body").classList.remove("hidden");

  }, 3800);
});



/* offcanvas fixed */
document.addEventListener("DOMContentLoaded", function () {
  var myOffcanvas = document.getElementById('offcanvasNavbarLabel');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("OpenMenu").addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

/* offcanvas fixed  */













