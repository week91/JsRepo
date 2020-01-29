
function longest(inpString) {
    
    let chars = inpString.split('');
    let Char;
    let string = "";
    let longestStr = "";
    let hash = {};
    for (let i = 0; i < chars.length; i++) {
        Char = chars[i];

        if (!hash[chars[i]]) { 

            string += Char; 

        hash[chars[i]] = {index:i};

    } 
    else {
 if(longestStr.length <= string.length) 
 {
     longestStr = string;
 }
       
 let prevIndex = hash[Char].index;
      
 let strPrev = inpString.substring(prevIndex + 1, i);
        
 string = strPrev + Char;
       
 hash = {};

 for (let j = prevIndex + 1; j <= i; j++) {

      hash[inpString.charAt(j)] = {index:j};
        
        }
    }
  } 
  let result=longestStr.length > string.length ? longestStr : string;
  
 return result;
}

