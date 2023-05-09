 


function validateForm() {

    // Get the value of the input field with id="Uname"
    const userName = document.getElementById("Uname").value;

    // Get the value of the input field with id="password"
    const password = document.getElementById("Pass").value;
     

    if(userName == "user" && password == "qwerty")
    {
   window.location.replace("home.html");
    }
    else if(userName != "user" || password != "qwerty"){
           alert("Please enter valid credentials!")
        }
      

    document.querySelector("#Uname").value  =  "";
    document.querySelector("#Pass").value  =  "";

}

function giveCredentils(){

   document.querySelector("#Uname").value  =  "user";
   document.querySelector("#Pass").value = "qwerty";

}


