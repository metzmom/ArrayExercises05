let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];
let arrStr =[];
//a) Use the split method on the string to identify the purpose of the parameter inside the ().
//str.split() vs. str.split('e') vs. str.split(' ') vs. str.split(''). What is the purpose of the parameter inside the ()?
console.log("split():");
arrStr=str.split();
console.log("str:");
console.log(str);
console.log("arrStr:");
console.log(arrStr);
console.log();

console.log("split(e):");
arrStr=str.split('e');
// 'In spac', ', no on', ' can h', 'ar you cod', '.'
console.log("str:");
console.log(str);
console.log("arrStr:");
console.log(arrStr);
console.log();

console.log("split(''):");
arrStr=str.split('');
console.log("str:");
console.log(str);
console.log("arrStr:");
console.log(arrStr);
console.log();
//'I', 'n', ' ', 's', 'p', 'a', 'c',
 // 'e', ',', ' ', 'n', 'o', ' ', 'o',
//'n', 'e', ' ', 'c', 'a', 'n', ' ',
  //'h', 'e', 'a', 'r', ' ', 'y', 'o',
  //'u', ' ', 'c', 'o', 'd', 'e', '.
//console.log(str);
// the purposeof the split() will indicate where the split will occur for each instance.  the value in the () will be eliminated

//b) Use the join method on the array to identify the purpose of the parameter inside the ().
//Given the array arr = ['B', 'n', 'n', 5], see what happens when you print arr.join() vs. arr.join('a') vs. arr.join(' ') vs. arr.join(''). What is the purpose of the parameter inside the ()?

console.log("arr:");
console.log(arr);
console.log();

console.log("arr.join():");
console.log(arr.join());
console.log();

console.log("arr.join('a'):");
console.log(arr.join('a'));
console.log();

console.log("arr.join(' '):");
console.log(arr.join(' '));
console.log();

console.log("arr.join(''):");
console.log(arr.join(''));
console.log();

console.log("arr:");
console.log(arr);
console.log();

//c) Do split or join change the original string/array?

//no split or join to not change the original array/string.  whatever is inside the () will show up between each object in the string



//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";


console.log(cargoHold);
//THIS IS A STRING

console.log(cargoHold.split(','));
//[ 'water', 'space suits', 'food', 'plasma sword', 'batteries' ]
//THIS PUTS IN TO ARRAY VERUS STRING

console.log(cargoHold.split(',').sort());
//THIS WILL SORT THE ARRAY ALPHABETICALLY
// ['batteries', 'food', 'plasma sword', 'space suits', 'water' ]

console.log(cargoHold.split(',').sort().join(','));
//THIS WILL CONVERT THE ARRAY BACK INTO A STRING, BUT ALPHABETICALLY
//batteries,food,plasma sword,space suits,water


//so what this does is takes a string, puts it into an array.
//now I can split the array by splitting at the commas.


