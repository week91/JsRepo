

function max(arr, sum){
 let minsum=0;
 let pos=0;

 arr.sort((a, b) =>a - b);
        
 for (let i = 0; i < arr.length; i++)  {

   minsum += arr[i];

 if (minsum <=sum)  pos=i; ;
       
}
 return (pos+1);

 }