 function subtração(St) {
 let subtração = 20
 for(let num = 1; num < St.length; num += 1) {
 subtração = subtração - St[num];
 }
 return subtração;
 }



 console.log(subtração([20, 5, 3]))