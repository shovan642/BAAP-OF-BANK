document.getElementById('withdraw-button').addEventListener('click',function(){
    const getWithdrawInput = document.getElementById('withdraw-input');
    const getWithdrawString = getWithdrawInput.value
    const getWithdraw = parseFloat(getWithdrawString)

    const totalWithdrawPrevious = document.getElementById('total-withdraw');
    const totalWithdrawPreviousString = totalWithdrawPrevious.innerHTML;
    const totalWithdraw = parseFloat(totalWithdrawPreviousString)


   
    
        const totalBalancePrevious= document.getElementById('total-balance')
        const totalBalancePreviousString = totalBalancePrevious.innerHTML
        const totalBalance = parseFloat(totalBalancePreviousString);

        if(totalBalance<getWithdraw){
            alert("you don't have enough money for withdraw.")
            getWithdrawInput.value="";
            return;
        }

        const totalWithdrawNew = totalWithdraw + getWithdraw;

        totalWithdrawPrevious.innerHTML=totalWithdrawNew;
    
        const totalBalanceNew = totalBalance - getWithdraw
        totalBalancePrevious.innerHTML = totalBalanceNew;
        
        getWithdrawInput.value="";

})