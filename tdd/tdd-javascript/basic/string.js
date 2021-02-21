export class theString{

    remove(arr){
        if(typeof arr === 'undefined')
           return "please send input";

        if(typeof arr !== 'object') 
           return "send input as array of strings";

        return this.removedNamesStartingWithSArray(arr);
    }
    
    removedNamesStartingWithSArray(arr){
         let out = [];
         for(let itr =0;itr<arr.length;itr++){
              if(typeof  arr[itr] !== 'string')
                 return "send input as array of strings";
              
              let str = arr[itr].toLowerCase();
              if(str[0] !== 's')
                 out.push(arr[itr]);
        }
        return out;
     }
}