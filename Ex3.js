function SomasRapidas(Sr) {
let soma = 0;
for (let index = 0; index < Sr.length; index += 1) {
  soma = soma + Sr[index];
  }
return soma;
}

console.log(SomasRapidas([1, 2, 3, 4, 5]));