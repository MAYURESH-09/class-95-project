
  var firebaseConfig = {
      apiKey: "AIzaSyB78Aw0mqC_XBmIyZ2eGjXWNTvgICbUCf8",
      authDomain: "let-s-chat-d4be0.firebaseapp.com",
      databaseURL: "https://let-s-chat-d4be0-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-d4be0",
      storageBucket: "let-s-chat-d4be0.appspot.com",
      messagingSenderId: "204274439096",
      appId: "1:204274439096:web:995ef55b2a8886e9abf54d"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  function Show()
{
      name_user = localStorage.getItem("Name")
      name_of_user =  document.getElementById("User_name").innerHTML = "Welcome , " + name_user 
      console.log(name_of_user)
}


  function AddRoom()
{
      room_name = document.getElementById("Room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose :"adding room name"
      });
      localStorage.setItem("Room Name is",room_name)
      window.location = "room2.html"
}





function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names)
      row = "<div id ="+Room_names+" class= 'room' onclick='redirectTo(this.id)'>#"+ Room_names + "</div> <hr>"
      document.getElementById("output").innerHTML += row

      });});}
getData();

function redirectTo(name)
{
      console.log(name)
      localStorage.setItem("Name is",name)
      window.location = "room2.html"
}

function Reset()
{
      localStorage.removeItem("Name")
      localStorage.removeItem("Room Name is")
      window.location = "login.html"
}