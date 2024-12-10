let array = [1, 2, 3]
console.log(array)

let array2 = [1, "string", 2.2022, true]
console.log(array2[0])
console.log(array2[1])
console.log(array2[2])
console.log(array2[3])
console.log("checking non existing index of array: ",array2[4])  //not exist in array2

//checking length of array

console.log("Length or array2: ", array2.length)

//now assigning value in on 4th index of the array 2 same process will be follow for updating the value

array2[4] = "4th index"
console.log(array2[4])
console.log(array2)
console.log("type of array: ", typeof(array2)) //array type is object in JS

//Question: Print values of array one by one by using for loop
//Answer:

console.log("Array for loop")

for(let i=0; i<array2.length; i++)
{
    console.log(array2[i])
}