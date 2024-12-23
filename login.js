let regBox=document.getElementById("register");
let loginBox=document.getElementById('login');
let forgetBox=document.getElementById('forget');

let lt=document.getElementById('lt');
let rt=document.getElementById('rt');
//to create empty arrary for storing email and password

let emailArray=[];
let passwordArray=[];


function loginFunTab()
{
// register and forget off
regBox.style.visibility="hidden";
forgetBox.style.visibility="hidden"
loginBox.style.visibility="visible";
rt.style.backgroundColor="blue";

}
function RegTabFun()
{
    //login forget off
    regBox.style.visibility="visible";
forgetBox.style.visibility="hidden"
loginBox.style.visibility="hidden";
lt.style.backgroundColor="orange";
}
function forTabFun()
{
    //login and register
    regBox.style.visibility="hidden";
forgetBox.style.visibility="visible"
loginBox.style.visibility="hidden";
rt.style.backgroundColor="brown";
lt.style.backgroundColor="navy";
}

function register()
{
    event.preventDefault();
    var email = document.getElementById("re").value;
    var password = document.getElementById("rp").value;
    var passwordRetype = document.getElementById("rrp").value;
    if(email=="")
        {
            alert("Email required.");
            return ;
        }
      if (password == ""){
            alert("Password required.");
            return ;
        }
      if (passwordRetype == ""){
            alert("Password required.");
            return ;
        }
      if (password !== passwordRetype)
        {
            alert(`Password does not match`)
        }
      if(emailArray.indexOf(email)==-1)
        {
            emailArray.push(email);
            passwordArray.push(password);

            alert(email + "  Thanks for registration. \n Try to login Now");
            document.getElementById("re").value ="";
            document.getElementById("rp").value="";
            document.getElementById("rrp").value="";
            console.log(emailArray);
            console.log(passwordArray);


        }





}
function login()
{
var email=document.getElementById('se').value;
var password=document.getElementById('sp').value;
var i=emailArray.indexOf(email);

if(email=="")
    {
        alert("Email required.");
        return ;
    }
  if (password == ""){
        alert("Password required.");
        return ;
    }
    if(emailArray.indexOf(email) == -1)
        {
           
            alert(`Email does not exist`);
            return;
        }
         if(passwordArray[i] != password)
            {
                
               alert('Password does not match') ;
            }

        else{
            alert(`login successfull`);
            window.location.assign("index.html");
           
        }
        document.getElementById('se').value="";
        document.getElementById('sp').value="";


}
function forget()
{
    event.preventDefault();
    var email=document.getElementById('fe').value;
    if(emailArray.indexOf(email) == -1)
        {
            if(email == "")
            {
                alert('Email required')
                return;
            }
           
            alert(`Email does not exist`);
            return;
        }
        alert("email is send to your mail check it in 24hr. \n Thanks");
        document.getElementById("fe").value ="";
    
    

}






















// function login(){
//     let useremail = document.getElementById('tookemail').value
//     let userpassword = document.getElementById('tookpassword').value

//     if( useremail == "Entri Elevate" && userpassword == "admin123") { 
//         alert('Login Successfully')
//         alert ('Welcome to My Portfolie Webpage ')  
//         window.location.assign("https://swaminathan-rasu.github.io/My-Portfolie-Website-2/")
//         document.getElementById('tookemail').value = "";
//         document.getElementById('tookpassword').value = "";
//     }
//      else if( useremail == "" && userpassword == "" ) {
//         alert(`please fill out this required data`)
//     } else{
//         alert('Login denied please check your email or password');       
//         document.getElementById('tookemail').value = "";
//         document.getElementById('tookpassword').value = "";
//     }

// }


// function forgotemail()
// {
//     prompt('Enter the email')
//     alert('Verification code sent to your email')
// }























// // let regBox=document.getElementById("register");
// // let loginBox=document.getElementById('login');
// // let forgetBox=document.getElementById('forget');

// // let lt=document.getElementById('lt');
// // let rt=document.getElementById('rt');

// // function loginFunTab()
// // {
// //     loginBox.style.visibility="visible";
// //     regBox.style.visibility="hidden";
// //     forgetBox.style.visibility="hidden";
// //     rt.style.backgroundColor="blue";
// // }
// // function RegTabFun()
// // {
// //     regBox.style.visibility="visible";
// //     forgetBox.style.visibility="hidden";
// //     loginBox.style.visibility="hidden";
// //     lt.style.backgroundColor="blue";
// // }
// // function forTabFun()
// // {
// //     regBox.style.visibility="hidden";
// //     forgetBox.style.visibility="visible";
// //     loginBox.style.visibility="hidden";
// //     rt.style.backgroundColor="gray";
// //     lt.style.backgroundColor="gray";
// // }
// // function login()
// // {
// // var email=document.getElementById('se').value;
// // var password=document.getElementById('sp').value;
// // var i=emailArray.indexOf(email);

// // if(email=="")
// //     {
// //         alert("Email required.");
// //         return ;
// //     }
// //   if (password == ""){
// //         alert("Password required.");
// //         return ;
// //     }
// //     if(emailArray.indexOf(email) == -1)
// //         {
           
// //             alert(`Email does not exist`);
// //             return;
// //         }
// //          if(passwordArray[i] != password)
// //             {
                
// //                alert('Password does not match') ;
// //             }

// //         else{
// //             alert(email+`  login successfull`);
           
// //         }
// //         document.getElementById('se').value="";
// //         document.getElementById('sp').value="";


// // }
// // function register()
// // {
// //     event.preventDefault();
// //     var email = document.getElementById("re").value;
// //     var password = document.getElementById("rp").value;
// //     var passwordRetype = document.getElementById("rrp").value;
// //     if(email=="")
// //         {
// //             alert("Email required.");
// //             return ;
// //         }
// //       if (password == ""){
// //             alert("Password required.");
// //             return ;
// //         }
// //       if (passwordRetype == ""){
// //             alert("Password required.");
// //             return ;
// //         }
// //       if (password !== passwordRetype)
// //         {
// //             alert(`Password does not match`)
// //         }
// //       if(emailArray.indexOf(email)==-1)
// //         {
// //             emailArray.push(email);
// //             passwordArray.push(password);

// //             alert(email + "  Thanks for registration. \n Try to login Now");
// //             document.getElementById("re").value ="";
// //             document.getElementById("rp").value="";
// //             document.getElementById("rrp").value="";
// //             console.log(emailArray);
// //             console.log(passwordArray);


// //         }
// // }
// // function forget(){
// //     event.preventDefault();
// //     var email=document.getElementById('fe').value;
// //     if(emailArray.indexOf(email) == -1)
// //         {
// //             if(email == "")
// //             {
// //                 alert('Email required')
// //                 return;
// //             }
// //             alert("email is send to your mail check it in 24hr. \n Thanks");
// //             document.getElementById("fe").value ="";

           
// //             // alert(`Email does not exist`);
// //             // return;
// //         }
            
    
// // }