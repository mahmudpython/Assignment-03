function gonoVote(array) {
     
    if (Array.isArray(array)){

       let ha = 0;
       let na = 0;

       for (let i =0; i<=array.length; i++){

            if (array[i]==="ha"){
                ha = ha+1;
            } else if(array[i]=== "na"){
                na = na+1;
            }
       }

       if (ha==na){
        return "equal";
       } else if (ha>na){
        return true;
       } else if (na>ha){
        return false;
       }


    } else {
        return "Invalid";
    }
}

const result = gonoVote(["nha", "ha", "hna", "ha"]);
console.log("Result: "+result);

