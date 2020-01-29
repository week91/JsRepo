function cc(subStr ){const matrix = [
  ['F', 'A', 'C', 'E'],
  ['O', 'B', 'O', 'P'],
  ['N', 'A', 'R', 'B'],
  ['E', 'A', 'N', 'D']
]

let arr=[];

for (let index = 0; index < matrix.length; index++) {
 arr.push(matrix[index].join(""));
  
}
    for (let d = matrix.length, a = 0; a < d; a++)
    
            for (let c = a + 1; c < d; c++) {
    
                let e = matrix[a][c];
    
                matrix[a][c] = matrix[c][a];
    
                matrix[c][a] = e
    
            }
            for (let index = 0; index < matrix.length; index++) {
              arr.push(matrix[index].join(""));}
             
let res =arr.join(",").includes(subStr) ;

   return res;
 }