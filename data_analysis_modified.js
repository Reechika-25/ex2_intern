var ans=[];
var values=[];
let min_val = null;
let max_val = null;
let mean_val = null;
let median_val = null;
let std_dev_val = null;
let sum_val = null;
let is_up_sorted = null;
let is_down_sorted = null;
//main function that resets the old values and takes input from input box from html 
function call_function()
    {
        nullest_allvalues();
        values = [];
        ans = [];
        var res = document.getElementById("input_box").value;
        var ans = res.split(',');
        console.log(ans);
  
 
     for(i = 0  ; i < ans.length ; i++)
    {
        values.push(parseFloat(ans[i]));
    }
}

//function that nullify all previous values when fresh input is provided
function nullest_allvalues()
{
    min_val = null;
    max_val = null;
    mean_val = null;
    median_val = null;
    std_dev_val = null;
    sum_val = null;
    is_up_sorted = null;
    is_down_sorted = null; 
}

//up function that sorts array in ascending order
function up(nums)
{
    if(is_down_sorted !== null)                             //if array is downsrted then just reverse it
    {
        nums.reverse();
    }
    else if(is_up_sorted === null)
    {
        nums.sort((a,b)=>a-b);
    }
    is_up_sorted = 1;                     //set the flag
    is_down_sorted = null;
    return nums;
}


//down function that sorts array in descending order
function down(nums)
{
    if(is_up_sorted !== null)
    {
        nums.reverse();
    }
    else
    if(is_down_sorted === null)
    {
     nums.sort((a,b)=>b-a);
    }
    is_down_sorted = 1;                               //set the flag
    is_up_sorted = null;
    return (nums);
}

//function that returns max element of the array
function max(nums)
{
    if(max_val === null)                            //if result not precomputed
    {
    if(is_up_sorted !== null)                       //if array is upsorted then last el is max
    {
        max_val = nums[nums.length - 1];
    }
    else
    if(is_down_sorted !== null)                      //if array is downsorted then first el is max
    {
        max_val = nums[0];
    }
    else 
    {
    var temp = nums[0];
    for(var i=1;i<nums.length;i++)                   //find max if array isn't sorted and result isn't precomputed
    {
        temp = Math.max(nums[i],temp);
    }
    max_val = temp;
    }
    }
    return max_val;
}

//function that return min element from the array
function min(nums)
{
    if(min_val === null)                                   //if result isn't precomputed
    {
        if(is_up_sorted !== null)                            //if array is up sorted
        {
            min_val = nums[0];
        }
        else
        if(is_down_sorted !== null)                            //if array is down sorted
        {
            min_val = nums[nums.length - 1];
        }
        else                                                   //if array isn't sorted and result is also not precomputed
        {
        var temp = nums[0];
        for(var i=0;i<nums.length;i++)
        {
            temp = Math.min(nums[i],temp);
        }
        min_val = temp;
    }
    }
    return min_val;
}

//function that calculates sum of all elements 
function sum(nums)
{
    if(sum_val === null)                                   //if sum already precomputed then reuse it
    {
    sum_val = nums[0];
    for(var i=1 ; i < nums.length ; i++)
    {
        sum_val += nums[i];
    }
    
    }
    return (sum_val);
}

//function to get median of the array
function median(nums)
{
    if(median_val === null)                             //if result isn't precomputed
    {
    if(is_up_sorted === null && is_down_sorted === null)            //if array isn't sorted then sort it
    {
        nums.sort();
        is_up_sorted = 1;
    }
    else
    if(is_down_sorted !== null)                             //if array is downsorted then just reverse elements
    {
        nums.reverse();
        is_up_sorted  = 1;
        is_down_sorted = null;
    }
    if(nums.length%2 != 0)                                      //store the result
        median_val =  nums[Math.floor(nums.length/2)].toFixed(2);
    else
        median_val = ((nums[Math.floor(nums.length/2)] + nums[Math.floor((nums.length-1)/2)])/2).toFixed(2);
    }
    
    return (median_val);
}

//standard deviation function
function std_dev(nums)
{
    if(std_dev_val === null)
    {
    var temp = 0;
    var t = 0;
    if(mean_val === null)
    t = mean(nums);
    else
    t = mean_val;

    for(var i=0;i<nums.length;i++)
    {
        temp = temp + (nums[i]-t)*(nums[i]-t);
    }

    std_dev_val =  Math.sqrt(temp/nums.length).toFixed(2);
    }
    return std_dev_val ;
}

//mean function

function mean(nums)
{
    if(mean_val === null)
    {
        if(sum_val === null)
        mean_val =  (sum(nums)/nums.length).toFixed(2);
        else
        mean_val = (sum_val/nums.length).toFixed(2) ;
    }
    return mean_val;
}

function find_max()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + max(values);
    
}
function find_min()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + min(values);

}
function up_fun()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + up(values);

    
}
function find_sum()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + sum(values);

}
function median_fun()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + median(values);

}
function mean_fun()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + mean(values);

}
function std_dev_fun(){
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + std_dev(values);

}
function down_fun()
{
    var opt = document.getElementById("writeme");
    opt.innerHTML = "Result is : " + down(values);

};


function perform_operation(){

    var x = document.getElementById("final_option").value;

    switch(x){

        case "up" :
            up_fun();
            break;

        case "down" :
            down_fun();
            break;

        case "mean":
            mean_fun();
            break;

        case "median":
            median_fun();
            break;

        case "std_dev":
            std_dev_fun();
            break;

        case "max":
            find_max();
            break;

        case "min":
            find_min();
            break;

        case "sum" :
            find_sum();
            break;
    }
        

}