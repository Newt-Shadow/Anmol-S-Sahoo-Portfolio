const firebaseConfig = {
  apiKey: "AIzaSyBBur3RZ65UQ5jx0ivYgFxTk-ODVfMaj8s",
  authDomain: "portfolio-e5a39.firebaseapp.com",
  databaseURL: "https://portfolio-e5a39-default-rtdb.firebaseio.com",
  projectId: "portfolio-e5a39",
  storageBucket: "portfolio-e5a39.appspot.com",
  messagingSenderId: "1002319218320",
  appId: "1:1002319218320:web:e2192a3ea0a8ef9b747a15",
  measurementId: "G-GVHL3EFK0L"
};
firebase.initializeApp(firebaseConfig);



const db = firebase.firestore();
var contactDatabase = firebase.database().ref("contactForm");


document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementValue('name');
    var email = getElementValue('email');
    var message = getElementValue('message');

    details(name, email, message);

    document.querySelector(".alert").style.display = "block";

    setTimeout(() =>{
      document.querySelector(".alert").style.display = "none"; 
    },3000)

    document.getElementById("contactForm").reset();
}


const details = (name, email, message) => {
  var newContactForm = contactDatabase.push();

  newContactForm.set({
    name: name,
    email: email,
    message: message,
  });
};

const getElementValue = (id) => {
     return document.getElementById(id).value;
}
