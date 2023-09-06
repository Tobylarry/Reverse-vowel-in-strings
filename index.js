//using Two pointer approach
/**


Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"

*/

/**
 * @param {string} s
 * @return {string}
 */

 //two pointer approach
 
var reverseVowels = function(s) {
    s = s.split('')
    let l = 0;
    let r = s.length - 1;
    let v = ['a','e','i','o','u','A','E','I','O','U'];
    while(l < r){
        if(v.indexOf(s[l]) !== -1 && v.indexOf(s[r]) !== -1){
            [s[l],s[r]] = [s[r],s[l]];
            r--;
            l++;
        }
       else if(v.indexOf(s[l]) == -1){
            l++;
        }
        else if(v.indexOf(s[r] == -1)){
            r--;
        }
    }

    return s.join('');
};
