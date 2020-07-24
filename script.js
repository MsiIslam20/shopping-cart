// // //Item Increase for Each Click
// // function eachItemIncrease(id, input, finalPrice, getPrice){
// //     const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
// //     const itemIncrease = document.getElementById(id);
// //     itemIncrease.addEventListener("click" , function(){
// //         let inputNumber = document.getElementById(input).value;
// //         inputNumber++
// //         document.getElementById(input).value = inputNumber; 
    
// //         const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
// //         const doubleNumber = priceNumber + getPricePhone;
// //         document.getElementById(finalPrice).innerText = doubleNumber; 
        
          
// //     })
// // }

// // eachItemIncrease("itemIncrease", "inputNumber" , "pricePhone", "pricePhone" )
// // eachItemIncrease("caseIncrease" , "caseNumber" , "priceCase", "priceCase")

// // //Item Decrease for Each Click
// // function eachItemDecrease(id, input , finalPrice , getPrice){
// //     const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
// //     const itemDecrease = document.getElementById(id)
// //     itemDecrease.addEventListener("click" , function(){
// //         let inputNumber = document.getElementById(input).value;
// //         inputNumber--
// //         document.getElementById(input).value = inputNumber ;
    
    
// //         const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
// //         const doubleNumber = priceNumber - getPricePhone;
// //         document.getElementById(finalPrice).innerText = doubleNumber; 
         
// //     })
    
// // }

// // eachItemDecrease("itemDecrease", "inputNumber" , "pricePhone", "pricePhone" )
// // eachItemDecrease("caseDecrease" , "caseNumber" , "priceCase", "priceCase")


// // var finalOutput = parseFloat(document.getElementById("finalOutput").innerText);
// // document.getElementById("finalOutput").innerText = 0;







// // //Item Increase for Each Click
// // function eachItemIncrease(id, input, finalPrice, getPrice){
// //     const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
// //     const itemIncrease = document.getElementById(id);
// //     itemIncrease.addEventListener("click" , function(){
// //         let inputNumber = document.getElementById(input).value;
// //         inputNumber++
// //         document.getElementById(input).value = inputNumber; 
    
// //         const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
// //         const doubleNumber = priceNumber + getPricePhone;
// //         document.getElementById(finalPrice).innerText = doubleNumber; 
        
          
// //     })
// // }

// // eachItemIncrease("itemIncrease", "inputNumber" , "pricePhone", "pricePhone" )
// // eachItemIncrease("caseIncrease" , "caseNumber" , "priceCase", "priceCase")




// // const itemIncrease = document.getElementById("itemIncrease");
// // itemIncrease.addEventListener("click" , function sum(){
// //     let inputNumber = document.getElementById("inputNumber").value;
// //     inputNumber++
// //     document.getElementById("inputNumber").value = inputNumber; 
// //     return inputNumber;
// // })


// // const getPricePhone = parseFloat(document.getElementById("pricePhone").innerText);

// // const doubleNumber = getPricePhone + getPricePhone;

// // const getPricePhoneCase = parseFloat(document.getElementById("priceCase").innerText);
// // const tax = parseFloat(document.getElementById("tax").innerText)
// // const sumOfItem = document.getElementById("finalOutput").innerText = getPricePhone + getPricePhoneCase;

// // document.getElementById("totalSum").innerText = tax + sumOfItem;

// let inputNumber = document.getElementById("inputNumber").value;

// let priceOne = parseFloat(document.getElementById("pricePhone").innerText);
// let priceTwo = parseFloat(document.getElementById("priceCase").innerText);
// let subTotal = parseFloat(document.getElementById("subTotal").innerText);
// let tax = parseFloat(document.getElementById("tax").innerText);

// function sumFunction(price1, price2) {

//     subTotal =  price1 + price2
//     document.getElementById("subTotal").innerText = subTotal;
//     subTotalWithTax = subTotal + tax
//     document.getElementById("totalSum").innerText = subTotalWithTax; 

// }

// // sumFunction(priceOne, priceTwo)


// function calculate(arr, count){

//     var result = arr * count
//     document.getElementById("pricePhone").innerText = result
    
// }


// function inputValue(){
//     inputNumber++
//     document.getElementById("inputNumber").value = inputNumber
//     calculate(priceOne, inputNumber )
// }




// clickFunction All
let priceItem = parseFloat(document.getElementById("pricePhone").innerHTML);
let priceItemCase = parseFloat(document.getElementById("priceCase").innerHTML);


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





