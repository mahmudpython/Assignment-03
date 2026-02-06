function finalScore (omr) {

    if (typeof omr === "object"){

        if (Array.isArray(omr)) {
            return "Invalid";
        }

        let rightNumber = omr.right;
        let wrongNumber = omr.wrong;
        let skipNumber = omr.skip;

        let totalQuestion = rightNumber + wrongNumber + skipNumber;

        if (totalQuestion < 0 || totalQuestion > 100 || totalQuestion !=100){
              return "Invalid";
        }else{
            
            let rightAnsNumber = rightNumber*1;
            let wrongAnsNumber = wrongNumber*0.5;


            let studentFoundNumber = rightAnsNumber - wrongAnsNumber;

            let roundAns = Math.round(studentFoundNumber);
            
            return roundAns;

        }
    
    } else if (typeof omr !== "object") {
        return "Invalid";
    }
    else{
        return "Invalid";
    }
}

let result = finalScore 
console.log("Final Score: "+ result);
