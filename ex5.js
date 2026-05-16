function multiplicação(Mt) {
  let soma = 15
  for(let num = 0; num < Mt.length; num += 1) {
    soma = soma + Mt[num]
  }
  return soma;
}

console.log(multiplicação([2, 3, 4]))