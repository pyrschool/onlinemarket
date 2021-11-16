function validateCC(number1, number2, number3, number4, ccv, holder, expYear, expMonth) {
    console.log(`Received: ${number1}-${number2}-${number3}-${number4}`)
    console.log(`Received: ${ccv}-${holder}-${expYear}-${expMonth}`)

    if (number1.length !== 4) {
        return false
    }

    let isNum = /^\d+$/.test(number1)
    if (!isNum) {
        return false
    }

    return true
}
