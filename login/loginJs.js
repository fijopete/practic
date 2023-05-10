 
 
 
 const names = [];
 const passwords =[];
 
 function signinForm() {

    
    var name = document.getElementById("Usname").value;
    var password = document.getElementById("sPass").value;
    if(name != "")
    {
     names.push(name);
     let i = names.length;
     alert(`Welcome ${names[i-1]}`);
    }
    else{
        alert("Enter user name")
    }
    

    if(password != "")
    {
     passwords.push(password);
    }
    else{
        alert("Enter Password");
    }




    console.log(names);

    document.querySelector("#Usname").value  =  "";
    document.querySelector("#sPass").value  =  "";
   }

 


function validateForm() {


    // Get the value of the input field with id="Uname"
    const userName = document.getElementById("Uname").value;

    // Get the value of the input field with id="password"
    const userPassword = document.getElementById("Pass").value;
     


    
    let j = names.indexOf(userName);
    console.log(j);
    let k = passwords.indexOf(userPassword)
    console.log(k);

    if(userName == "user" && userPassword == "qwerty")
    {
        window.location.replace("home.html");
    }
    else if (j == -1 && k == -1) {

       alert("please sign in first to continue");

    }
    else if( j==k )
    {
        window.location.replace("home.html");
        
       
    }
    else if(userName != "user" || userPassword != "qwerty"){
           alert("Please enter valid credentials!")
        }
 
   
      

    

    document.querySelector("#Uname").value  =  "";
    document.querySelector("#Pass").value  =  "";

}

function giveCredentils(){

   document.querySelector("#Uname").value  =  "user";
   document.querySelector("#Pass").value = "qwerty";

}


