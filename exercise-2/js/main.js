// Main JavaScript File

// Array to work with
var arr1 = [1,2,3,4,5];

// Write a function to subtract one from a value
var subtractOne = function(value) {
	return value - 1;
}
// Pass each value to the subtractOne function by using the map functionality
console.log("arr1 before: " + arr1);
arr2 = arr1.map(subtractOne);
console.log("arr1 subtractOne: " + arr2);


// Create a array equal to arr1 times two by using the inline "map" funcitonality
arr3 = arr1.map(function(value){
	return value * 2;
});
console.log("arr1 times2: " + arr3);


// Write an introduction function that takes an argument and returns "hello, I'm " + argument
var intro = function(arg) {
	return "Hello, I'm " + arg;
}
console.log(intro("Daniel"));

// Array of objects
var people = [
	{name:'Tim', age:22},
	{name:'Jan', age:12},
	{name:'Isabel', age:43}
];

// Create an array of introductions for each name
intro_names = new Array();
for (i = 0; i < people.length; i++){
	intro_names.push(intro(people[i]['name']));
}

// Use the `.forEach` method to create a new property `intro` for each object in your people array
// The property should say "My name is NAME and I'm AGE years old"
people.forEach(function(x){
	x.intro = "My name is " +  x.name + "and I'm " + x.age + " years old";
});
console.log(people);
