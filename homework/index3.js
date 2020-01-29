 function longestPalindrome(string) {

  let length = string.length;
  let result = "";

  let centerPalindrome = function(left, right) {
    while (left >= 0 && right < length && string[left] === string[right]) {
     
      left--;
      right++;
    }

    return string.slice(left + 1, right);
  };

  for (let i = 0; i < length - 1; i++) {
    let oddPal = centerPalindrome(i, i + 1); 

    let evenPal = centerPalindrome(i, i);
   
    if (oddPal.length > result.length)

      result = oddPal;

    if (evenPal.length > result.length)

      result = evenPal;

  }
  return  result ;
}

