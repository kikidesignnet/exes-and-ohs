/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

https://www.codewars.com/kata/exes-and-ohs/train/javascript
*/

/* My solution */

function XO(str) {
  //code here

  let xletter = /x/gi;
  let oletter = /o/gi;
  
  let xlength = str.match(xletter);
  let olength = str.match(oletter);

if (xlength == null) {
    xlength = 0; 
  }
if (olength == null) {
    olength = 0; 
  }

if (xlength.length === olength.length) {
  return true;
} else {
  return false;
}
   
}

console.log(XO("zpzzppp"));

/*Best solution I found after submitting my solution on codewars that's so simple and short!!! */

/*
 let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  
  return (x && x.length) === (o && o.length);
*/