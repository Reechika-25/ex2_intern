class Number{

    constructor(no){
        this.no = no;
    }
    checkFizzBuzzBasedOnDivisibility(){
        let str ='';
        if(this.no % 3 === 0 )
             str += "Fizz";
        if(this.no % 5 === 0)
             str += "Buzz";
        return str;
    }
    checkFizzBuzzBasedOnDigits(){
        let str = '';
        if(String(this.no).includes(3))
           str += "Fizz";
        if(String(this.no).includes(5))
           str += "Buzz";
        return str;
    }
}

export class FizzBuzz{
    checkFizzBuzz(number){
        if(typeof number === 'number'){
            let no = new Number(number);
            let fizzBuzz = no.checkFizzBuzzBasedOnDivisibility();
            if(fizzBuzz !== '')
               return fizzBuzz;
            fizzBuzz = no.checkFizzBuzzBasedOnDigits();
            if(fizzBuzz !== '')
               return fizzBuzz;
            return String(number);
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