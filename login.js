
function Add_User()
  {
      name_user = document.getElementById("user").value ;
      localStorage.setItem("Name",name_user)
      window.location = "room.html"
  }


