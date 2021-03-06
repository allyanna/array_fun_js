// Comment in js

//create an array
//create an empty array
var myArray = new Array()


//preferred way
var myArr2 =[]

// create an array of a certain size
var myBigArr = new Array(100)

var myBigArr2 = [,,,]
var myBigArr3 = [1,2,3,4]

var array = []
array.length = 8

//gives us the size of the array
array.length

//position of items in the array
// index
//                 0       1        2
var superArr = ['rock', 'paper', 'black']
// 0 base, starts at zero

// get a value with the index
superArr[1]

//insert in the array
var  supArr = []


//adds items to the end of the array
supArr.push('Stan Lee', 'Spiderman', 1)

// it will add the items into the beginning of the array
supArr.unshift(1, 2.3, true)


//remove 

//mutable versus immutable
//mutable are items that can be changed
//immutable are items that cannot be changed

var sArr = [1, 2, 3]


//removes the last element of the array and returns it, mutable
sArr.pop

//removes the first element of the array and returns it, mutable
sArr.shift


//mutable
delete sArr[2] //the 2 is the index


//the number we'd like to start cutting (imutable)
sArr.slice(2)

//iterate, going through an array, loops
var nums = [1, 2, 3, 4, 5]

//forEach
nums.forEach(function(num, index) {
  console.log("index of: " + index + "values: " + num)
})

//map
nums.map(function(num, index){
  console.log(++num)
})

//filter
nums.filter(function(num, index){
console.log(num % 2 == 0)
})

  ['s', 23, 23.2, true, false].filter(boolean)

//for
for (var i = 0; index < nums.length; index++){
  console.log(num[index])
}

//type checking
//checks for what datatype is something?
typeof []
typeof 0
typeof true
 
//miscellaneous functions
var lastArr = ["rock", "green", "blue"]

//returns a string of what the array looks like
lastArr.toString

//bring together two values and put them together
lastArr.join

//reverses the array
lastArr.reverse

//puts items in order, asc, alphabetical for 
//strings, numbers and floats < >
lastArr.sort()

//search the array
lastArr.find()

//tells you the index of the value
lastArr.indexOf()

//boolean on if the array includes a value
lastArr.includes()


//combines two arrays
lastArr.concat()


