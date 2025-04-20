function changeView() {
  var signInBox = document.getElementById("signIn_Box");
  var singUpBox = document.getElementById("signUp_Box");

  signInBox.classList.toggle("d-none");
  singUpBox.classList.toggle("d-none");
}

function signUp() {
  var fname = document.getElementById("fname");
  var lname = document.getElementById("lname");
  var email = document.getElementById("email");
  var mobile = document.getElementById("mobile");
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  // alert(fname.value);

  var f = new FormData();
  f.append("f", fname.value);
  f.append("l", lname.value);
  f.append("e", email.value);
  f.append("m", mobile.value);
  f.append("u", username.value);
  f.append("p", password.value);

  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if ((request.readyState == 4) & (request.status == 200)) {
      var response = request.responseText;
      // alert(response);
      if (response == "Success") {
        document.getElementById("msg1").innerHTML =
          "Registration Successfully.";
        document.getElementById("msg1").className = "alert alert-success";
        document.getElementById("msgDiv1").className = "d-block";

        fname.value = "";
        lname.value = "";
        email.value = "";
        mobile.value = "";
        username.value = "";
        password.value = "";
      } else {
        document.getElementById("msg1").innerHTML = response;
        document.getElementById("msgDiv1").className = "d-block";
      }
    }
  };

  request.open("POST", "signUpProcess.php", true);
  request.send(f);
}

function SignIn() {
  var un = document.getElementById("un");
  var pw = document.getElementById("pw");
  var rm = document.getElementById("rm");

  // alert("ok");

  var f = new FormData();
  f.append("u", un.value);
  f.append("p", pw.value);
  f.append("r", rm.checked);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if ((request.readyState == 4) & (request.status == 200)) {
      var response = request.responseText;
      // alert(response);
      if (response == "Success") {
        window.location = "game/index.html";
      } else {
        document.getElementById("msg2").innerHTML = response;
        document.getElementById("msgDiv2").className = "d-block";
      }
    }
  };

  request.open("POST", "signInProcess.php", true);
  request.send(f);
}
function forgetPassword() {
  var email = document.getElementById("email");

  if (email.value != "") {
    var f = new FormData();
    f.append("e", email.value);

    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == 200) {
        var responce = request.responseText;
        // alert(responce);

        if (responce == "success") {
          document.getElementById("msg2").innerHTML ="Email sent! Please check your mail box";
          document.getElementById("msgDiv2").className = "alert alert-success";
          document.getElementById("msgDiv2").className = "d-block";
        } else {
          document.getElementById("msg2").innerHTML = responce;
          document.getElementById("msgDiv2").className = "alert alert-danger";
          document.getElementById("msgDiv2").className = "d-block";
        }
      }
    };

    request.open("POST", "forgetPasswordProcess.php", true);
    request.send(f);
  } else {
    alert("Please enter your password");
  }
}
function resetPassword() {
  var vcode = document.getElementById("vcode");
  var np = document.getElementById("np1");
  var np2 = document.getElementById("np2");

  var f = new FormData();
  f.append("vcode", vcode.value);
  f.append("np", np.value);
  f.append("np2", np2.value);

  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
      var responce = request.responseText;
      // alert(responce);
      if (responce == "Success") {
        window.location = "signIn.php";
      } else {
        document.getElementById("msg2").innerHTML = responce;
        document.getElementById("msgDiv2").className = "alert alert-danger";
        document.getElementById("msgDiv2").className = "d-block";
      }
    }
  };

  request.open("POST", "resetPasswordProcess.php", true);
  request.send(f);
}