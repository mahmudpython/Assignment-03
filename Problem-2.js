function validOtp(otp) {

    if (typeof otp === "string"){
        if(otp.startsWith("ph-") && otp.length == 8){
            return true;
        } else{
            return false;
        }
       
    }else{
        return "Invalid"
    }
    
}

const output = validOtp("ph-4546");
console.log("Your OTP: "+output);

