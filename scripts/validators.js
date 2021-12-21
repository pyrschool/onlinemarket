
getCCDataFromDOM = () => {
    const theCC = {
        number1: '',
        number2: '',
        number3: '',
        number4: '',
        ccv: '',
        holderName: '',
        expYear: '',
        expMonth: ''
    }

    theCC.number1 = document.getElementById("ccpart1").value
    theCC.number2 = document.getElementById("ccpart2").value
    theCC.number3 = document.getElementById("ccpart3").value
    theCC.number4 = document.getElementById("ccpart4").value
    theCC.ccv = document.getElementById("ccv").value
    theCC.holderName = document.getElementById("holder").value
    theCC.expYear = document.getElementById("exp_year").value
    theCC.expMonth = document.getElementById("exp_month").value

    console.log(theCC)

    return theCC;
}


function validateCC(theCreditCard) {

    console.log(theCreditCard)

    const errorDiv = document.getElementById("error")
    errorDiv.style.visibility = "hidden"
    errorDiv.innerHTML = ""

    if (!validateCCNumber(theCreditCard.number1) ||
        !validateCCNumber(theCreditCard.number2) ||
        !validateCCNumber(theCreditCard.number3) ||
        !validateCCNumber(theCreditCard.number4)) {
        console.log("Bad credit card number")
        return false
    }

    return true
}

function validateCCNumber(ccn) {
    if (ccn.length !== 4) {
        console.log(`[${ccn}] is not 4 characters long`)
        return false
    }

    let isNum1 = /^\d+$/.test(ccn)
    if (!isNum1) {
        return false
    }
    return true;

}


function calcTotal(amount, discount) {
    if (discount === 0) {
        return amount;
    } else {
        return amount - (amount * (discount / 100))
    }

    return discount === 0 ? amount : amount - (amount * (discount / 100))



}


function passCCDataToTheBank(cc, amount, shopId) {
    console.log(`CC charger Received: ${amount}-${shopId}`)
    alert("Passing credit card data to the bank")
}


handleCCError = (message) => {
    const errorDiv = document.getElementById("error")
    errorDiv.style.visibility = "visible"
    errorDiv.innerHTML = "Cannot process credit card: " + message
}


