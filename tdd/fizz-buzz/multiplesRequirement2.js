class Number{

    numberDoesContain(number,digit){

        let temp = parseInt(number);
        if(typeof digit === 'number'){
          for(; temp > 0 ; temp = parseInt(temp /10)){
            if(temp % 10 === digit)
                return true;
           }
        return false;
        }
        return 'null';
    }

    
    constructor(no){
        this.no = no;
        this.isMultipleof3 = ((this.no % 3)?false:true); 
        this.isMultipleof5 = ((this.no % 5)?false:true);
        this.doesContain3 =  this.numberDoesContain(this.no,3);
        this.doesContain5 =  this.numberDoesContain(this.no,5);
    }
}

export class Multiple{

    checkFizzBuzz(number){

        if(typeof number === 'number'){
            let no = new Number(number);
            if(no.isMultipleof3 && no.isMultipleof5){
                return "FizzBuzz";
            }else if(no.isMultipleof3){
                return "Fizz";
            }else if(no.isMultipleof5){
                return "Buzz";
            }else if(no.doesContain3 && no.doesContain5){
                return "FizzBuzz";
            }else if(no.doesContain3){
                return "Fizz";
            }else if(no.doesContain5){
                return "Buzz";
            }else{
                return String(number);
            }
        }
        return 'null';
    }

    isBuzz(){

        let out = [];
        for(let no = 1; no <= 100 ; no++){
              out.push(this.checkFizzBuzz(no));
        }
        return out;
    }
}