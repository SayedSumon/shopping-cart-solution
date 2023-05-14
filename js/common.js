function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const  currentTotalElement = parseInt(currentPhoneTotalString);

    return currentTotalElement;
}

function setElementValueById(elementId, value){
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setElementValueById('sub-total', currentSubTotal);

    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setElementValueById('tax-total', taxAmount);

    const finalAmount = currentSubTotal + taxAmount;
    setElementValueById('final-total', finalAmount);
}