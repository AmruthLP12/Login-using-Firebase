// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";

import {getAuth, createUserWithEmailAndPassword, signWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.4/firebaseauth.js";
import {getFirestore, setDic, doc} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbyQ1GBO0e6uGnOSgLGiK_rAxbxj3R6lE",
  authDomain: "login-form-170fe.firebaseapp.com",
  projectId: "login-form-170fe",
  storageBucket: "login-form-170fe.appspot.com",
  messagingSenderId: "86155031423",
  appId: "1:86155031423:web:d8b3631056da34e81a604a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showMessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDiv.style.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000)
}
const signUp = document.getElementById('submitSignUp')
signUp.addEventListener('click', (event)=>{
    event.preventDefault();
    const email = document.getElementById('rEmail').value;
    const password = document.getElementById('rPassword').value;
    const firstName = document.getElementById('fName').value;
    const lastName = document.getElementById('lName').value;

    const auth = getAuth();
    const db = getFirestore();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
            email: email,
            firstName: firstName,
            lastName: lastName
        }
    })
})