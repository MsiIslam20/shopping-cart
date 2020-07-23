function eachItemIncrease(id, input, finalPrice, getPrice){
    const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
    const itemIncrease = document.getElementById(id);
    itemIncrease.addEventListener("click" , function(){
        let inputNumber = document.getElementById(input).value;
        inputNumber++
        document.getElementById(input).value = inputNumber; 
    
        const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
        const doubleNumber = priceNumber + getPricePhone;
        document.getElementById(finalPrice).innerText = doubleNumber;   
    
    })
}
eachItemIncrease("itemIncrease", "inputNumber" , "pricePhone", "pricePhone" )
eachItemIncrease("caseIncrease" , "caseNumber" , "priceCase", "priceCase")


function eachItemDecrease(id, input , finalPrice , getPrice){
    const getPricePhone = parseFloat(document.getElementById(getPrice).innerText);
    const itemDecrease = document.getElementById(id)
    itemDecrease.addEventListener("click" , function(){
        let inputNumber = document.getElementById(input).value;
        inputNumber--
        document.getElementById(input).value = inputNumber ;
    
    
        const priceNumber = parseFloat(document.getElementById(finalPrice).innerText);
        const doubleNumber = priceNumber - getPricePhone;
        document.getElementById(finalPrice).innerText = doubleNumber; 
         
    })
    
}

eachItemDecrease("itemDecrease", "inputNumber" , "pricePhone", "pricePhone" )
eachItemDecrease("caseDecrease" , "caseNumber" , "priceCase", "priceCase")
