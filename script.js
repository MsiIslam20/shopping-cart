// Shopping Cart Function All
let priceItem = parseFloat(document.getElementById("pricePhone").innerHTML);
let priceItemCase = parseFloat(document.getElementById("priceCase").innerHTML);


//Final Calculate Options
function FinalCalculator(price, otherPrice) {
    let subTotal = price + otherPrice;
    let tax = 0;
    let totalWithTax = subTotal + tax;
    
    document.getElementById("subTotal").innerText = subTotal;
    document.getElementById("tax").innerText = tax;
    document.getElementById("totalSum").innerText = totalWithTax;
}

//Number Count Function
function numCount(inputId, sign) {
    productCount = parseInt(document.getElementById(inputId).value);
    if (!(productCount == 0 && sign == false)) {
        if (sign == true) productCount++;
        else productCount--;
        document.getElementById(inputId).value = productCount;
    }
}

//Price Count Function
function priceCount(inputId, priceId, unitPrice) {

    let input = parseInt(document.getElementById(inputId).value);
    let price = parseInt(document.getElementById(priceId).innerHTML);

    let totalPrice = parseFloat(document.getElementById("subTotal").innerHTML);
    let otherPrice = totalPrice - price;
    

    if (!(input < 0)) {
        price = unitPrice * input;
        document.getElementById(priceId).innerHTML = price;

        FinalCalculator(price, otherPrice)
    }

}

// product Phone Increase
let clickIncrease = document.getElementById("itemIncrease");
clickIncrease.addEventListener("click" , function(){
    numCount("inputNumber", true);
    priceCount("inputNumber", "pricePhone" , priceItem);
})

// product Phone decrease
let clickDecrease = document.getElementById("itemDecrease");
clickDecrease.addEventListener("click" , function(){
    numCount("inputNumber", false);
    priceCount("inputNumber", "pricePhone" , priceItem);
})

// product Phone Case Increase
let clickTwoIncrease = document.getElementById("caseIncrease");
clickTwoIncrease.addEventListener("click" , function(){
    numCount("caseNumber", true);
    priceCount("caseNumber", "priceCase" , priceItemCase);
})

// product Phone Case Decrease
let clickTwoDecrease = document.getElementById("caseDecrease");
clickTwoDecrease.addEventListener("click" , function(){
    numCount("caseNumber", false);
    priceCount("caseNumber", "priceCase" , priceItemCase);
})





