function validate() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    alert("login sucesss");
    return false;
  } else {
    alert("login failed");
  }
}
