class HashMap{
    static incCount(myMap,key){

        if(myMap.has(key))
           myMap.set(key,myMap.get(key) + 1);

        else
           myMap.set(key,1);
    }
}


exports.HashMap = HashMap;
