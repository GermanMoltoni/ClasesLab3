function ValidateEmail(mail)   
{  
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.val()))  
        return true;
    else{
        alert("You have entered an invalid email address!");
        return false;
    }
      
}  

function allnumeric(txtNum)  
   {  
      var numbers = /^[0-9]+$/;  
      if(txtNum.val().match(numbers))  
      {  
        alert('Your Registration number has accepted....');  
        return true;  
      }  
      else{  
        alert('Please input numeric characters only');
        return false;  
      }  
   }


function allLetter(txtText)  
{  
   var letters = /^[A-Za-z]+$/;  
   if(txtText.val().match(letters))  
      return true;
   else{  
     alert("Ingresar solo letras");  
     return false;  
    }  
} 