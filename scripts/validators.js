function validateCC(number1, number2, number3, number4, ccv, holder, expYear, expMonth) {
    console.log(`Received: ${number1}-${number2}-${number3}-${number4}`)
    console.log(`Received: ${ccv}-${holder}-${expYear}-${expMonth}`)

    if (!validateCCNumber(number1) ||
        !validateCCNumber(number2) ||
        !validateCCNumber(number3) ||
        !validateCCNumber(number4)) {
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
        console.log(`[${ccn}] is not digits only`)
        return false
    }
    return true;
}