// console.log("start")

// setTimeout(()=>{
//     console.log("this is settimeout")
// },100)

// console.log("end")

// Promise.resolve().then(()=>{
//     console.log("this is promise")
// })

//hoisting
// counter()
// function counter(){
//  let result = "hello"
//  return result
// }

// const counter1 = ()=>"hello"
// counter1()



// a=10;
// var a;
// console.log(a)

const num1 = [2,3,4,5,7,8,9,10,1]
const num2 = [20,31,45,5,7,87,9,10,1]

function maximumProduct(arr){
    const sortedArray =arr.sort((a,b)=>b-a)
    console.log('the max number is'+sortedArray[0])
    return sortedArray[0]*sortedArray[1]
}


const result =maximumProduct(num1)
console.log(result)
const result2 =maximumProduct(num2)
console.log(result2)

const maxNum = (arr)=>Math.max(...arr)
  

console.log(maxNum(num1))
console.log(maxNum(num2))


//clouser
function createCounter() {
  let count = 10; // This is a private variable

  // The returned function is a closure
  return function increment() {
    count++;
    console.log(`Count: ${count}`);
  };
}

const myCounter = createCounter(); // createCounter runs once and returns the inner function

myCounter(); // Output: Count: 1
myCounter(); // Output: Count: 2
myCounter(); // Output: Count: 3

// Trying to access 'count' directly results in an error
// console.log(count); // ReferenceError: count is not defined

