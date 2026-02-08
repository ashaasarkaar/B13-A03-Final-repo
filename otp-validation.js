// Problem-02: OTP Validation for Zapshift 

function validOtp(otp){
    if(typeof otp !== "string"){
        return "Invalid";
    }
    const otpLength = otp.length;
    const otpCheck = otp.startsWith("ph-", 0);
    if(otpLength === 8 && otpCheck){
        return true;
    }
    else{
        return false;
    }
}

const otp =  validOtp("bb-10985")
console.log(otp)