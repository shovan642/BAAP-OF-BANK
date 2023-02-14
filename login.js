document.getElementById('submit-button').addEventListener('click',function(){
    const getEmailAddressField = document.getElementById('email-address');
    const getEmailAddressValue = getEmailAddressField.value;

    const getPasswordField = document.getElementById('password');
    const getPasswordValue = getPasswordField.value;

    if(getEmailAddressValue==="google@gmail.com" && getPasswordValue==="mygoogle"){
        window.location.href="myaccount.html";
    }
    else{
        alert('Please input valid mail address & password.')
    }

})