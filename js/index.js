

document.getElementById('blog').addEventListener('click', function(){
    location.href = 'blog.html'

})



// donate and history button 
document.getElementById('donate-btn').addEventListener('click', function () {
    getRemoveClassList('history-btn','bg-btnBg')
    getRemoveClassList('donate-container', 'hidden')
    getAddedClassList('history-container','hidden')
    this.classList.add('bg-btnBg')
})
document.getElementById('history-btn').addEventListener('click', function () {
    getRemoveClassList('donate-btn', 'bg-btnBg')
    getAddedClassList('donate-container', 'hidden')
    getRemoveClassList('history-container', 'hidden')

    this.classList.add('bg-btnBg')
})

// Donate for Flood at Noakhali, Bangladesh start 

document.getElementById('donate-btn-one').addEventListener('click', function (e) {

    const donateInputAmount = getInputAmount('donate-amount-one')
    const donateAmount = getInnerTextValue('donate-total-amount')
    const grandTotal = getInnerTextValue('grand-total-amount')

    e.preventDefault()
    const form = document.querySelectorAll("form")[0];
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return
    }
    const validateInputAmount = getInputValidations(donateInputAmount)

    if (validateInputAmount) {

        if (grandTotal >= validateInputAmount) {
            updateGrandTotalAmount('grand-total-amount', grandTotal, validateInputAmount)

        } else {
            alert('Your amount very low, places add amount and try it')
            return
        }

        // document.getElementById().innerText = validateInputAmount + donateAmount;
        getTotalDonateAmount('donate-total-amount', validateInputAmount, donateAmount)

        const donateTitle = getDonateTitle('donate-title')
        console.log(donateTitle)

        appendDonateHistory('history-container', (validateInputAmount), donateTitle)
        my_modal_5.showModal()
    }


})

// Donate for Flood at Noakhali, Bangladesh end 

// Donate for Flood at Noakhali, Bangladesh start 

document.getElementById('donate-btn-two').addEventListener('click', function (e) {

    const donateInputAmount = getInputAmount('donate-amount-two')
    const donateAmount = getInnerTextValue('donate-total-amount-two')
    const grandTotal = getInnerTextValue('grand-total-amount')

    e.stopPropagation()
    e.preventDefault()
    const form = document.querySelectorAll("form")[1];
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return
    }
    const validateInputAmount = getInputValidations(donateInputAmount)

    if (validateInputAmount) {

        if (grandTotal >= validateInputAmount) {
            updateGrandTotalAmount('grand-total-amount', grandTotal, validateInputAmount)

        } else {
            alert('Your amount very low, places add amount and try it')
            return
        }

        // document.getElementById().innerText = validateInputAmount + donateAmount;
        getTotalDonateAmount('donate-total-amount-two', validateInputAmount, donateAmount)

        const donateTitle = getDonateTitle('donate-title-two')
        console.log(donateTitle)

        appendDonateHistory('history-container', (validateInputAmount), donateTitle)
        my_modal_5.showModal()
    }

})

// Donate for Flood at Noakhali, Bangladesh end 
// Donate for Flood at Noakhali, Bangladesh start 

document.getElementById('donate-btn-three').addEventListener('click', function (e) {

    const donateInputAmount = getInputAmount('donate-amount-three')
    const donateAmount = getInnerTextValue('donate-total-amount-three')
    const grandTotal = getInnerTextValue('grand-total-amount')

    e.stopPropagation()
    e.preventDefault()
    const form = document.querySelectorAll("form")[2];
    if (!form.checkValidity()) {
        e.preventDefault();
        form.reportValidity();
        return
    }
    const validateInputAmount = getInputValidations(donateInputAmount)

    if (validateInputAmount) {

        if (grandTotal >= validateInputAmount) {
            updateGrandTotalAmount('grand-total-amount', grandTotal, validateInputAmount)

        } else {
            alert('Your amount very low, places add amount and try it')
            return
        }

        // document.getElementById().innerText = validateInputAmount + donateAmount;
        getTotalDonateAmount('donate-total-amount-three', validateInputAmount, donateAmount)

        const donateTitle = getDonateTitle('donate-title-three')


        appendDonateHistory('history-container', (validateInputAmount), donateTitle)
        my_modal_5.showModal()
    }

})

// Donate for Flood at Noakhali, Bangladesh end 

