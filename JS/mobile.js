document.getElementById("mobile-minus").addEventListener("click", function () {
    const newProductNumber = productNumberDecrease("numberOfMobile", false);
    productPrice(newProductNumber, "1219", "mobilePrice");
    calculateSubTotal();
});
document.getElementById("mobile-plus").addEventListener("click", function () {
    const newProductNumber = productNumberDecrease("numberOfMobile", true);
    productPrice(newProductNumber, "1219", "mobilePrice");
    calculateSubTotal();
});
