document.getElementById("case-minus").addEventListener("click", function () {
    const newProductNumber = productNumberDecrease("numberOfCase", false);
    productPrice(newProductNumber, "59", "casePrice");
    calculateSubTotal();
});
document.getElementById("case-plus").addEventListener("click", function () {
    const newProductNumber = productNumberDecrease("numberOfCase", true);
    productPrice(newProductNumber, "59", "casePrice");
    calculateSubTotal();
});
