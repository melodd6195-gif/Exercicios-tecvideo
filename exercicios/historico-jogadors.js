function jogadores(nome, j, d, r) {
  return `${nome} tem somando todos seus numeros de gols, assistencias e jogos: ${j + d + r}`;
}

console.log(jogadores("cristiano ronaldo", 930, 1280, 250));
console.log(jogadores("neymar", 740, 450, 250));
console.log(jogadores("messi", 1150, 900, 410));

function soma(nome, a, b, c) {
  return `o historico dos 3 jogadores da: ${a + b + c}`;
}

console.log(soma("jogadores", 2460, 1440, 2460));

function MediaGeral(total, quantidade) {
  return `a média geral do total desses jogadores é: ${total / quantidade}`;
}

console.log(MediaGeral(6360, 3));