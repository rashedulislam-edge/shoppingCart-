function productNumberDecrease(numberOfProduct, isIncrease) {
    const productNumberField = document.getElementById(numberOfProduct);
    const productNumberString = productNumberField.value;
    let previousProductNumber = parseInt(productNumberString);

    let newProductNumber = 1;
    if (isIncrease) {
        newProductNumber = previousProductNumber + 1;
    } else if (previousProductNumber > 0) {
        newProductNumber = previousProductNumber - 1;
    } else {
        return "0";
    }

    productNumberField.value = newProductNumber;

    return newProductNumber;
}
function productPrice(newProductNumber, price, fieldOfProduct) {
    const productTotalPrice = newProductNumber * price;
    const productTotalField = document.getElementById(fieldOfProduct);
    productTotalField.innerText = productTotalPrice;
}

function getTotalProductPrice(productId) {
    const getProductElementPrice = document.getElementById(productId);
    const getProductPriceString = getProductElementPrice.innerText;
    const getProductTotalPrice = parseInt(getProductPriceString);
    return getProductTotalPrice;
}

function textElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const mobileTotal = getTotalProductPrice("mobilePrice");
    const caseTotal = getTotalProductPrice("casePrice");
    const productSubTotal = mobileTotal + caseTotal;
    textElementValueById("subTotal", productSubTotal);
    const taxTotal = parseFloat((productSubTotal * 0.1).toFixed(2));

    textElementValueById("taxAmount", taxTotal);
    const finalTotal = productSubTotal + taxTotal;
    textElementValueById("finalAmount", finalTotal);
}
