

// Donate for Flood at Noakhali, Bangladesh start 

document.getElementById('donate-btn-one').addEventListener('click', function(e){
    
    const donateInputAmount = getInputAmount('donate-amount-one')
    const donateAmount = getInnerTextValue('donate-total-amount')
    const grandTotal = getInnerTextValue('grand-total-amount') 

    e.preventDefault()
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
        e.preventDefault(); 
        form.reportValidity(); 
        return
    }

        
    const validateInputAmount = getInputValidations(donateInputAmount)

    if(validateInputAmount){

        if(grandTotal >= validateInputAmount){
            updateGrandTotalAmount('grand-total-amount', grandTotal, validateInputAmount)
            
        }else{
            alert('Your amount very low, places add amount and try it')
            return
        }
     
        // document.getElementById().innerText = validateInputAmount + donateAmount;
        getTotalDonateAmount('donate-total-amount', validateInputAmount , donateAmount )

        const donateTitle = getDonateTitle('donate-title')
        console.log(donateTitle)

        appendDonateHistory('history-container', (validateInputAmount) , donateTitle)
         my_modal_5.showModal()
    }

    
})

// Donate for Flood at Noakhali, Bangladesh end 

