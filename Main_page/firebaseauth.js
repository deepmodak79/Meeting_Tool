// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signINWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestone.js"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuoe8y5AXWpJxUANI6uXsAqgEqQE8svME",
  authDomain: "sign-up-page-8d262.firebaseapp.com",
  projectId: "sign-up-page-8d262",
  storageBucket: "sign-up-page-8d262.appspot.com",
  messagingSenderId: "455309226472",
  appId: "1:455309226472:web:1052d3444c48930c86b45d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function showmessage(message, divId){
    var messageDiv=document.getElementById(divId);
    messageDiv.style.display="block";
    messageDiv.innerHTML=message;
    messageDivstyle.opacity=1;
    setTimeout(function(){
        messageDiv.style.opacity=0;
    },5000);
}

const SignUp = document.getElementsById('SubmitSignup');
 SignUp.addEventListerer('click', (event)=>{
    event.preventDefault();
    const email=document.getElementById('rEmail').value;
    const password=document.getElementById('rPassword').value;
    const firstName=document.getElementById('fNAme').value;
    const lastName=document.getElementById('lNAme').value;

    const auth=getAuth();
    const db=getFirestone();

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user=userCredential.user;
        const userData={
            email: email,
            firstName: firstName,
            lastName: lastName
        };
        showmessage('Account Created Succeessfully', 'signupMessage');
        const docRef=doc(db,"users", user.uid);
        setDoc(docRef,userData)
        .then(()=>{
            window.location.href='index.html';
        })
        .catch((error)=>{
            console.error("error writing document", error);

        });
    })
    .catch((error)=>{
        const errorcode=error.code;
        if(errorcode=='auth/email-already-in-use'){
            showmessage('Email Adddress Exists !!!', 'signUPMEssage');
        }
        else{
            showmessage('unable to create user', 'signUPMessage'); 
        }
    })
})