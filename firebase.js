import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

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

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const contactDatabase = ref(getDatabase(app), "contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    var name = getElementValue('name');
    var email = getElementValue('email');
    var message = getElementValue('message');

    if (name === "" || email === "" || message === "") {
        alert("All fields must be filled out");
        return false;
    } else {
        DetailsRealtimeDatabase(name, email, message);
        DetailsFirestore(name, email, message);

        document.querySelector(".alert").style.display = "block";

        setTimeout(() => {
            document.querySelector(".alert").style.display = "none";
        }, 3000);

        document.getElementById("contactForm").reset();
        return true;
    }
}

const DetailsRealtimeDatabase = (name, email, message) => {
    var newContactForm = push(contactDatabase);

    set(newContactForm, {
        name: name,
        email: email,
        message: message
    });
};

const DetailsFirestore = async (name, email, message) => {
    try {
        await addDoc(collection(db, "contactForm"), {
            name: name,
            email: email,
            message: message,
            timestamp: serverTimestamp()
        });
        console.log("Document successfully written!");
    } catch (error) {
        console.error("Error writing document: ", error);
    }
};

const getElementValue = (id) => {
    return document.getElementById(id).value.trim();
};
