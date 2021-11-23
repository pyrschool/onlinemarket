
function validateCC(theCreditCard) {

    console.log(theCreditCard)

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



