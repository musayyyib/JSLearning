//toStrings method
//toString() method -- converts array into string
let array = [1, 2, 3,4,5]
let b = array.toString()
console.log(b)

//joint method
//join connect all the elements of array together
let c = array.join("_")
console.log(c)  //Output: 1_2_3_4_5

//pop method
//pop the last element of the array from the orignal array
let num = [1, 2, 3, 4]
let poppedElement = num.pop()   //.pop is returning the popped element
console.log(num, poppedElement) // printing both the updated orignal array and the popped element

//push method
//push the new element and increase the length of the array
console.log("Length before pushing: ", num.length)
num.push(5)
console.log(num, "Length after pushing: ", num.length)

//shift method
//remove the first element of the array and return the removed element value
let num2 = [1, 3, 3.4]
let shiftVariable = num2.shift()
console.log(num2, "\nThe value of the element after shifting: ", shiftVariable)

//unshift method
//add new value in the start of the array, returns the orignal array
let num3 = [1, 2, 3, 4]
num3.unshift(0)
console.log(num3)

//delete operator -- it's not a method
//delete operator delete the element but don't change the length of array, the length should be same after deletion as well
let deleteNum = [1,2,3,4,5]
console.log("Before deletion length of array: ", deleteNum.length)
delete deleteNum[0]
console.log("the output of the deleted element will be: ", deleteNum)
console.log("after deletion length of array: ", deleteNum.length)

//concat method
//to connect multiple array
//don't change the length of the existing array
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 10]
let arr3 = [6,7,11,12]

let newArr = arr1.concat(arr2)
console.log("new arr will be: ", newArr)

let newArr2 = arr2.concat(arr3)
console.log("new arr 2 will be: ", newArr2)
console.log("length of the new arr2 is: ", newArr2.length)
console.log("the value of 8th element is: ", newArr2[8])

//sort method
//it modifies the orignal array
//it will sort alphabatecally not numericaly
let sortArr = [22, 555, 66, 1, 5, 2]
// let sortedArr = sortArr.sort()
// console.log("sorted array will be: ", sortedArr)

let compare =(a, b)=>{
    return a-b
}
sortArr.sort(compare)
console.log("Modified Arr will be: ", sortArr)

//reverse method
sortArr.reverse()
console.log("this is the output from the reverse method: ", sortArr)

//splice and slice method -- most imp
//modify the orignal array
//return the deleted elements from the orignal array

let spliceNum = [1,2,3,4,5,6,7,8,9]
spliceNum.splice(2,3,101,102,103)  //here first 2 jo mention hai wo index hai, 3 jo hai wo no of element jo add krne hain wo hai or iske bad jo num hain wo num add krne hain
console.log(spliceNum)

//slice method
//don't modified the orignal array
//in output it only give new array with the elements which we slice from the orignal array
let slicedArr = spliceNum.slice(3)
console.log("response after slicing element: ", slicedArr)  //print only left over values of the arr and delete 