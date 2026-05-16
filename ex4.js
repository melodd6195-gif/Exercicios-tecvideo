function SomasRapidas(Sr) {
  let soma = 0
  for(let num = 0; num < Sr.length; num += 1) {
    soma = soma + Sr[num];
  }
  return soma;
};

console.log(SomasRapidas([-1, -2, -3]));