var values = [10,1,9,2,8,3,7,4,6];
function up(nums)
{
    return nums.sort((a,b)=>a-b);
}

function down(nums)
{
    
    return nums.sort((a,b)=>b-a);
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
    for(var i=0;i<9;i++)
    {
        temp = temp + nums[i];
    }
    return temp;
}

function median(nums)
{
    if(nums.length%2 != 0)
        return nums[Math.floor(nums.length/2)];
    return nums[Math.floor(nums.length/2)] + v[Math.floor((nums.length-1)/2)];
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

console.log(max(values));
console.log(min(values));
console.log(up(values));
console.log(sum(values));
console.log(median(values));
console.log(mean(values));
console.log(std_dev(values));
console.log(down(values));