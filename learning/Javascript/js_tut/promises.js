

function func(){
    return new Promise(function(resolve,reject){
        const error = true;
        setTimeout(() =>{
            if(!error){
            console.log('processing promise');
            resolve();
        }else{
            console.log('error while processing promise');
            reject();
        }

    },3000);
});
}



func().then(function(){
    console.log('promise has been fulfilled');

}).catch(function(){
    console.log('promise has not been fulfilled');

});


const family = [
    {name : 'Reechika', age : 22},
    {name : 'Anita' , age : 50}
]

function addMember(member){
    return new Promise(function(resolve,reject){
        const error = false;
        setTimeout(() => {

            if(!error){
                console.log('adding a new family member');
                family.push(member);
                resolve();
            }else{
                console.log('some problem while addinga family member');
                reject();
            }
            
        },1000);

    });
}

const newMember = {name : 'santosh', age : 55};
addMember(newMember).then(function(){
    let familyInfo = '';
    for(let idx = 0;idx < family.length; idx ++){
        familyInfo += `<ul><li>name of the family member : ${family[idx].name} </li>
                            <li>age of the family member : ${family[idx].age}</li></ul>`;
    }
    document.getElementById('heading').innerHTML += familyInfo;

}).catch(function(){
    console.log('unable to add a family member');
});