function signup(){

    var email = document.getElementById('email').value;
    var name = document.getElementById('name').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value
    var emailError = document.querySelector("#email_error");
    var passwordError = document.querySelector("#password_error");
    var nameError = document.querySelector("#name_error");
    var confirmPasswordError=document.querySelector("#confirmPassword_error");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    
    if(name ==""){
        nameError.innerHTML = "name is required";
        nameError.style.color = "red";
        return false;
    }
    
    if (email == "") {
        emailError.innerHTML = "email is required";
        emailError.style.color = "red";
        return false;
        
      }
    
    if(!emailPattern.test(email)){

        emailError.innerHTML = " email is required";
        emailError.style.color = "red";
        return false;
    }
    
    if (password == "") {
        passwordError.innerHTML = "password is required";
        passwordError.style.color = "red";
        return false;
        
      }
     

   if(!passwordPattern.test(password)){
        passwordError.innerHTML = "password is required";
        passwordError.style.color = "red";
        return false;
    }
    
    if( password.length != 0){
        if(password == confirmPassword){
            
            alert("created");
            location.assign("http://127.0.0.1:5500/login.html");
            confirmPasswordError.style.color = "green";
        }
        else{
            confirmPasswordError.innerHTML = "password don't match";
            confirmPasswordError.style.color = "red";
        }
    } 
    
    var user= {
        email: email,
        name: name,
        password: password,
        confirmPassword: confirmPassword,
    };
    var json = JSON.stringify(user);
    console.log(user,"user:")
    console.log(json,"json")
    localStorage.setItem("email", email);
    // console.log(JSON.parse(localStorage.setItem("user", json)));
    localStorage.setItem("name", name);
    // console.log(JSON.parse(localStorage.setItem("user", json)));
    localStorage.setItem("password", password);
    // console.log(JSON.parse(localStorage.setItem("user", json)));
    localStorage.setItem("confirmPassword", confirmPassword);
    // console.log(JSON.parse(localStorage.setItem("user", json)));
    console.log('user added');
   
}

   
      
    



