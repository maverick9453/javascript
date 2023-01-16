//trim()
//toUppercase()
//toLowercase()
//slice()
//note : string are immutable : on applying any methods of string it
// gives new string (means after applying all methods of strings we
//  have to again store into  same or new variable )

// 1>> .trim()   removes spaces 


let firstName="    harshit   "
console.log(firstName)
console.log(firstName.length)
 firstName=firstName.trim();
console.log(firstName.length);
console.log(firstName)

//2>>  .toUppercase()  converts all small to capital charcater

firstName=firstName.toUpperCase();
console.log(firstName)


// 3>> .toLowercase() converts all Capital to smaller charcater

let firstName1="AmaN";
firstName1=firstName1.toLowerCase();
console.log(firstName1)

// 4>> .slice() example (0 ,5) 0 index will be included and 5 index char
// will be not included

let firstName2= "maharishi"; //let we want maha so we write (0,4)
firstName2= firstName2.slice(0,4);
console.log(firstName2) 