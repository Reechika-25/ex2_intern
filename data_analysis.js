var ans =[]
var output =[]

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
   console.log(nums.sort((a,b)=>a-b));


}

function down(nums)
{
    
    console.log(nums.sort((a,b)=>b-a));
}

function max(nums)
{
    var temp = nums[0];
    for(var i=0;i<nums.length;i++)
    {
        temp = Math.max(nums[i],temp);
    }
    return temp;
}

function min(nums)
{
    var temp = nums[0];
    for(var i=0;i<nums.length;i++)
    {
        temp = Math.min(nums[i],temp);
    }
    return temp;
}

function sum(nums)
{
    var temp = 0;
    for(var i=0;i<output.length;i++)
    {
        temp = temp + nums[i];
    }
    return temp;
}

function median(nums)
{
    if(nums.length%2 != 0)
        return nums[Math.floor(nums.length/2)];
    return nums[Math.floor(nums.length/2)] + nums[Math.floor((nums.length-1)/2)];
}

function std_dev(nums)
{
    var temp = 0;
    var t = mean(nums);
    for(var i=0;i<nums.length;i++)
    {
        temp = temp + (nums[i]-t)*(nums[i]-t);
    }
    return Math.sqrt(temp/nums.length);
}


function mean(nums)
{
    return sum(nums)/nums.length;
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