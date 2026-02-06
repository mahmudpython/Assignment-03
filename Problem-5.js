function  analyzeText(str) {
    if (typeof str != "string" || str.length<=0) return "Invalid";

        const words = str.split(" ")

        let longWord= "";

        for (let i =0; i < words.length; i++){

            if (words[i].length > longWord.length){
                longWord = words[i];
            }
            
        }
       

        let charCount = 0;
        for (let m = 0; m < str.length; m++){
            if (str[m] !== " "){
                charCount = charCount +1;
            }
        }
        
        return {
            longwords: longWord,
            token: charCount
        }
        
}

const result = analyzeText("a mfdsfg asad tfdsfg dgfdg  ufdsfg fd");
console.log(result);

