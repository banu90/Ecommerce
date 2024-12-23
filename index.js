

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
            alert(email+`  login successfull`);
           
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


//test

//indexof
