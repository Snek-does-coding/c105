// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCVVuV1DHvjnHuMmHkn0-iYqV1lz1XaDWQ",
    authDomain: "c100-e9e32.firebaseapp.com",
    databaseURL: "https://c100-e9e32-default-rtdb.firebaseio.com",
    projectId: "c100-e9e32",
    storageBucket: "c100-e9e32.appspot.com",
    messagingSenderId: "827566015447",
    appId: "1:827566015447:web:b7a876e9f7eeb4aaacc192",
    measurementId: "G-75DJ1L9W20"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
    
}



