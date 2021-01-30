var ans =[]
var output =[]

var flag =[0,0,0,0,0,0,0,0];
var store =[0,0,0,0,0,0,0,0];

function help_func(){

    var res = document.getElementById("array").value;
    var ans =res.split(',');
    console.log(ans);


for(i=0;i<ans.length;i++){

    output.push(parseFloat(ans[i]));
}
}

function up(nums)
{
   flag[0]= 1;
   console.log(nums.sort((a,b)=>a-b));


}

function down(nums)
{
    
    flag[1] =1;
    console.log(nums.sort((a,b)=>b-a));
}

function max(nums)
{
    if(!flag[2]){

    flag[2] = 1;
    var temp = nums[0];
    for(var i=0;i<nums.length;i++)
    {
        temp = Math.max(nums[i],temp);
    }
    return store[2]=temp;
   }

   return store[2];
}

function min(nums)
{
   if(!flag[3]){
       
    flag[3] = 1;
    var temp = nums[0];
    for(var i=0;i<nums.length;i++)
    {
        temp = Math.min(nums[i],temp);
    }
    return store[3]=temp;
}

   return store[3];
}

function sum(nums)
{
    if(!flag[4]){
        
    flag[4] = 1;
    var temp = 0;
    for(var i=0;i<output.length;i++)
    {
        temp = temp + nums[i];
    }
    return store[4]=temp;
   }

   return store[4];
 
}

function median(nums)
{
    if(!flag[0] && !flag[1])
        nums.sort();

    if(nums.length%2 != 0)
        return nums[Math.floor(nums.length/2)];
    return nums[Math.floor(nums.length/2)] + nums[Math.floor((nums.length-1)/2)];
}

function std_dev(nums)
{
    if(!flag[6]){
        
    flag[6]=1;
    var temp = 0;
    var t = mean(nums);
    for(var i=0;i<nums.length;i++)
    {
        temp = temp + (nums[i]-t)*(nums[i]-t);
    }
    return store[6]=Math.sqrt(temp/nums.length);
   }

   return store[6];
}


function mean(nums)
{
    if(!flag[7]){
        flag[7] = 1;

    return store[7] = (flag[4]?store[4]:sum(nums))/nums.length;
    }

    return store[7];
}

function max_help(){
console.log(max(output));
}

function min_help(){
console.log(min(output));
}
function up_help(){
    up(output);
}

function sum_help(){
  console.log(sum(output));
}

function median_help(){
console.log(median(output));
}

function mean_help(){
console.log(mean(output));
}

function std_help(){
console.log(std_dev(output));
}

function down_help(){
  down(output);
}