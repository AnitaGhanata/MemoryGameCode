// // var attempt = 3;
// // function validate(){
// // var email = document.getElementById("email").value;

// // var password = document.getElementById("password").value;
// // if ( email == "anita@gmail.com" && password == "anita@123")
// // {
// //     console.log(email);
// //     alert ("Login successfully");
// //     window.location = "http://127.0.0.1:5500/index.html";
// //     return false;
// // }

// // else
// // {
// //     attempt --;

// //     alert("You have left "+attempt+" attempt;");

// // if( attempt == 0)
// // {
// //     document.getElementById("email").disabled = true;
// //     document.getElementById("password").disabled = true;
// //     document.getElementById("login").disabled = true;
// // return false;
// // }
// // }
// // }

// function store(){
//     var email = document.getElementById('email');
//     var password = document.getElementById('password');
//     var lowerCaseLetters= /[a-z]/g;
//     var upperCaseLetters= /[A-Z]/g;
//     var numbers = /[0-9]/g;

//     if(email.value.length == 0){
//         alert('Please fill in email');
//     }
//     else if(password.value.length == 0){
//         alert('Please fill in password');
//     }
//     else if(email.value.length == 0 && password.value.length == 0){
//         alert('Please fill in email and password');
//     }
//     else if(password.value.length > 8){
//         alert('Max of 8');
//     }
//     else if(!password.value.match(numbers)){
//         alert('please add 1 number')
//     }
//     else if(!password.value.match(upperCaseLetters)){
//         alert('please add 1 uppercase letter');
//     }
//     else if(!password.value.match(lowerCaseLetters)){
//         alert('please add 1 lowercase letter');
//     }
//     else{
//         localStorage.setItem('email', email.value);
//         localStorage.setItem('password', password.value);
//         alert('Your account  open successfully');
//     }
// }
// function check(){
//     var storeEmail = localStorage.getItem('email');
//     var storePassword = localStorage.getItem('password');

//     var userEmail = document.getElementById('email');
//     var userPassword = document.getElementById('password');
//     var userRemember = document.getElementById('remember');

//     if(userEmail.value == storeEmail && userPassword.value == storePassword){
//         alert('you are logged in.');

//     }
//     else{
//         alert('error on login');
//     }
// }

function login(){
        
    
        var storedEmail = localStorage.getItem('email');
        var storedPss= localStorage.getItem('password');
        console.log(storedEmail);
        var userEmail = document.getElementById('email');
        var userPss = document.getElementById('password');
        
    
        if(userEmail.value == storedEmail && userPss.value == storedPss){
            alert('You are logged in.');
        }else{
            alert('Error on login');
        }
    }
    