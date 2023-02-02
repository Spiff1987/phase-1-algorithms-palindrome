

    function isPalindrome(word) {

  // Write your algorithm here  

    const letters = word.split('');

    const reverseLetters = letters.reverse();

    const joinedString = reverseLetters.join('');

    return word == joinedString;
  }


/* 
  Add your pseudocode here

  function isPalindrome(word)

  split the word into an array of letters

  reverse the array of letters

  join the reversed array of letters into a string

  if the word is equal to the joined string

    return true

  else

    return false

*/

/*
  Add written explanation of your solution here

  Function isPalindrome has to take a string as a parameter. 

  If the string is palindrome, the function should return true. 
  
  If not then the function should return false.
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {

  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
