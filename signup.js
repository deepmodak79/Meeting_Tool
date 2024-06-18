import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signINWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestone.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEHevcOHArO7meN_bidxwCO5GgkpaYF8g",
  authDomain: "meeting-tool-signup.firebaseapp.com",
  projectId: "meeting-tool-signup",
  storageBucket: "meeting-tool-signup.appspot.com",
  messagingSenderId: "1061400430983",
  appId: "1:1061400430983:web:ead8990133f50fafcd2b22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// //inputs
//  const SignUp = document.getElementsById('Submit Signup');
//  SignUp.addEventListerer('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('rEmail').value;
//     const password=document.getElementById('rPassword').value;
//     const firstName=document.getElementById('fNAme').value;
//     const lastName=document.getElementById('lNAme').value;


//     const auth=getAuth();
//     const db=getFirestone();

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential)=>{
//         const user=userCredential.user;
//         const userData={
//             email: email,
//             firstName: firstName,
//             lastName: lastName
//         };
//     })
//  })
const Last_Name = document.getElementsById('First Name').value;
const email = document.getElementsById('email').value;
const Password = document.getElementsById('Password').value;
const confirm_password = document.getElementsById('Confirm Password').value;

//submit button

const submit = document.getElementsById('Submit');
Submit.addEventListener("click",function(event){
    event.preventDefault()
    alert(5)
})

