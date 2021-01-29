export class Multiple{

    print(number){

        if(typeof number === 'number'){
            if(number % 3 === 0 && number % 5 === 0){
                  return "FizzBuzz";
            }else if(number % 3 === 0){
                  return "Fizz";
            }else if(number % 5 === 0){
                  return "Buzz";
            }else {
               return number;
            }
        }

        return 'null';
    }

    isBuzz(number){

        for(let no = 1; no <= 100 ; no++){
              console.log(print(number));
        }
    }
}