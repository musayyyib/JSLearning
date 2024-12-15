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