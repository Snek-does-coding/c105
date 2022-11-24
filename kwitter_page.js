
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

  user_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
  
  function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value="";
  }

  function logout() 
    {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
          window.location = "index.html";
    }

    
  function getData() 
  { 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val();
       if(childKey != "purpose")
    {
      firebase_message_massage_id = childkey;
      message_data = childData;
      name = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      row = "<h4> "+ name +"<img class='user_tick' src='tick.png'> class='message_h4'>"+ message +"</h4><button class='btn btn-warning' id='"+firebase_message_id+"' value='"+like+"' onclick='updateLike(this.id)'>" 
      "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
      document.getElementById("output").innerHTML +=row;
    }});});}
    
  function updateLike()
  {
    console.log("clicked on like button -" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = number(likes) + 1;

    firebase.database().ref(room_name).child(message_id).update({
      like: updated_likes
    });
  }