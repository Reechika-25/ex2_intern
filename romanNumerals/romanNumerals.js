export class Roman{

    constructor(){
        this.romanMap = new Map();
        this.romanMap.set('I',1);
        this.romanMap.set('V',5);
        this.romanMap.set('X',10);
        this.romanMap.set('L',50);
        this.romanMap.set('C',100);
        this.romanMap.set('D',500);
        this.romanMap.set('M',1000);
    }

    convertRomanToInteger(roman){

        if(typeof roman === 'string'){

            let numeral=0;
            for(let itr = 0;itr < roman.length;itr ++){
               
               let curRomanVal=this.romanMap.get(roman[itr]);
               if(itr + 1 < roman.length){
                  
                    let nextRomanVal = this.romanMap.get(roman[itr+1]);
                    if(nextRomanVal <= curRomanVal){

                       numeral += curRomanVal;

                    }else{

                       numeral += nextRomanVal - curRomanVal;
                       itr ++;
                    }
                }else{
            
                      numeral += curRomanVal;
                    }
            }
            return numeral;
         }

        return 'null';
   }
}