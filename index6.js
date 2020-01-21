
function missed(arr){
let res;
 arr.sort((a, b) =>a - b);
    
 for (let i = 0; i < arr.length-1; i++) {
            
    if (arr[i+1]-arr[i]!=1) {
          res= arr[i]+1;
  }
}
return res;
 }
    