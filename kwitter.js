function loginOne(){
    window.location="login.html";
}

function addUser() {
    username = document.getElementById("username").value;
    localStorage.setItem("username",username);
    window.location = "kwitter_room.html";
}