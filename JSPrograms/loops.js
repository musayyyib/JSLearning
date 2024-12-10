const flag = true

//in this if condition matches it only execute only one time
if(!flag)   //reversing the value of flag
{
    console.log("The flag is true")
}
else
{   
    console.log(flag)
    console.log("The flag is not true")
}

//if condition matches it will execute the content inside untill the threshold matches

let i = 0
while(i<10)
{
    console.log(i)
    i++
    // i = i+1
}

console.log("I am out of while loop now")


//in do while loop first block runs and then it check the conditions
i = 0   // reassignment of i
let x = 10
//i = 11
do
{
    console.log(i)
    i++
}while(i<x)
console.log('I am out of do while loop')