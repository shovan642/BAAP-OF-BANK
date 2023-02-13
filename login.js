document.getElementById('submit-button').addEventListener('click',function(){
    const getEmailAddressField = document.getElementById('email-address');
    const getEmailAddressValue = getEmailAddressField.value;

    const getPasswordField = document.getElementById('password');
    const getPasswordValue = getPasswordField.value;

    if(getEmailAddressValue==="google@gmail.com" && getPasswordValue==="mygoogle"){
        console.log('valid user')
    }
    else{
        console.log('invalid user')
    }

})