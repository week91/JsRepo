


function short(arr){

  let str=arr[0];
 for(let i=1;i<arr.length;i++)

if (arr[i]!==arr[i+1]-1 && arr[i]==arr[i-2]+2)
{
  str+='-'+arr[i]+','

} else if (arr[i]!==arr[i-1]+1 && arr[i]!==arr[i+1]-1 &&arr[i]!==arr[i+2]-2)
{
  str+=arr[i]+',';
}else if (arr[i]==arr[i-1]+1 && arr[i]!==arr[i+1]-1)
{
  str+=arr[i];
}else if (arr[i]!==arr[i-1]+1 && arr[i]==arr[i+2]-2 )
{
str+=arr[i]
}

return str;
}