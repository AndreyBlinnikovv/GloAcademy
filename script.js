let num = 266219;

let numStr = num.toString();
let result = 1;

for (let i = 0; i < numStr.length; i++) {
  result *= parseInt(numStr[i]);
  }
  result **= 3;  
  console.log(result);
  console.log(result.toString().substring(0, 2));
  




        



