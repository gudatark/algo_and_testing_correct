/**
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
const isValid = (str = '') => {
   const map=new Map();
   map.set('{','}');
   map.set('(',')');
   map.set('[',']');
   const b=[];
   for(let i=0;i<str.length;i++){
      if(map.has(str.charAt(i))){
         b.push(str.charAt(i));
      } else{
         let pop=b.pop();
         if(map.get(pop)!==str.charAt(i)){
            return false;
         }
      };
   };
   return b.length===0;
}};
console.log(isValid(str));
