export class FundInfo{

    constructor(){
        this.fundData = require('./startup-funding.json');
    }

    matchInputs(companyName,city,state,round,itr){

        return ((companyName === "" || this.fundData[itr].company_name === companyName) &&
                (city === "" || this.fundData[itr].city === city)  &&
                (state === "" || this.fundData[itr].state === state) &&
                (round === "" || this.fundData[itr].round === round));
    }

    noParameter(companyName,city,state,round){

        return (companyName === "" && city === "" && state === "" && round === "");
    }

    findBy(companyName = "", city="", state="" , round=""){
        if(this.noParameter(companyName,city,state,round))   
            return {};

        if(typeof companyName === 'string' && typeof city === 'string' && 
           typeof state === 'string' && typeof round === 'string'){
            for(let itr = 0;itr < this.fundData.length;itr ++){
               if(this.matchInputs(companyName,city,state,round,itr))
                   return this.fundData[itr];
            }
        }

        return {};
    }

    where(companyName = "",city = "",state = "",round = ""){
        if(this.noParameter(companyName,city,state,round))
           return [];

        let out = [];
        if(typeof companyName === 'string' && typeof city === 'string' &&
           typeof state === 'string' &&  typeof round === 'string'){
           for(let itr = 0;itr < this.fundData.length;itr ++){
              if(this.matchInputs(companyName,city,state,round,itr))
                 out.push(this.fundData[itr]);
            }

            return out;
        }

        return [];
    }
}