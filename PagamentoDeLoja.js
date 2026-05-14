let PreçoRoupa = 60
let Desconto = 10
let emtresvezes = 3
let total = 0;

total = PreçoRoupa + ((Desconto / 100) * 60);
total = emtresvezes + (PreçoRoupa / emtresvezes);

console.log(`preço da roupa é de: R$${PreçoRoupa}`)
console.log(`preço da roupa em 3x é: R$${PreçoRoupa / emtresvezes}`);
console.log(`preço da roupa a vista é: R$${(PreçoRoupa) - (Desconto / 100) * 60}`)

