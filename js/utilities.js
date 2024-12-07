

function getInputAmount (id){
    const inputValue = document.getElementById(id).value;


    const inputAmount = parseFloat(inputValue)

    return inputAmount

}
function getInnerTextValue (id){
    const innerValue = document.getElementById(id).innerText;
    const innerTotalAmount = parseFloat(innerValue)
    return innerTotalAmount
}

function getDonateTitle (id) {
    const donateTitle = document.getElementById(id).innerText
    return donateTitle
}

function updateGrandTotalAmount (id, inputAmount, grandTotalAmount) {
    document.getElementById(id).innerText =  inputAmount - grandTotalAmount;
    

}
function getTotalDonateAmount (id, inputAmount, donateTotal) {
     document.getElementById(id).innerText =   donateTotal + inputAmount;
    

}


function appendDonateHistory (id, amount, title){
    const addDonateHistory = document.getElementById(id)
    const div = document.createElement('div')
    div.classList = "p-8 border-2 border-[nav-bg] rounded-2xl mt-8"
    const h2 = document.createElement('h2')
    h2.classList = "text-primary-text-color font-bold lg:text-xl md:text-lg"
    h2.innerText = `${amount} Taka is ${title}`
    const p = document.createElement('p')
    p.classList = "text-secondary-text-color mt-4"
    p.innerText = `Date : ${Date()}`
    div.appendChild(h2)
    div.appendChild(p)
    addDonateHistory.appendChild(div)
}





function getInputValidations (input) {
    if(input <= 0){
        alert('Place provide 0 gater then amount')
        return
    }
    if(isNaN(input)){
        alert('Place provide validate amount')
        return
    }else{
        return parseFloat(input)
    }

}