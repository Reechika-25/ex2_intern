export class theString{
    remove(arr : string[]) : string[]{
         return this.removedNamesStartingWithSArray(arr);
    }
    removedNamesStartingWithSArray(arr : string[]): string[]{
         let out : string[] = [];
         for(let itr =0;itr<arr.length;itr++){
              let str = arr[itr].toLowerCase();
              if(str[0] !== 's')
                 out.push(arr[itr]);
        }
        return out;
     }
}