export class theString{

    remove(arr){
        if(typeof arr === 'undefined')
           return "please send input";

        if(typeof arr != 'object') //mistake-- typeof returns a string and also it returns object in case of an array
           return "send input as array of strings";

        let out = [];

        for(let itr =0;itr<arr.length;itr++){
            if(typeof  arr[itr] != 'string')
                   return "send input as array of strings";

            if(arr[itr][0] !== 's' && arr[itr][0] !== 'S')
                     out.push(arr[itr]);
        }
       
        return out;
     }
}