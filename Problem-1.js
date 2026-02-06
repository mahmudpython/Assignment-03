function newPrice(currentPrice , discount ) {
    if(typeof currentPrice === "number" && typeof discount === "number"){
        
        const totalDiscountPrice = (currentPrice*discount)/100;
        
        if(discount <= 0 || discount >= 100){
            return "Invalid";
        }else{
            const finalPrice = currentPrice-totalDiscountPrice;
            return finalPrice.toFixed(3);
        }
        
    } else if (typeof currentPrice == "undefined" || typeof discount == "undefined"){
        return "Invalid";
    }
    else{
        return "Invalid";
    }
}
 const dis = newPrice(1000,0);
 console.log("New Price: "+dis);

