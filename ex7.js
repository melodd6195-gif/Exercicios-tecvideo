function divisao(Dv) {
  let dividir = 100
  for(let num = 1; num < Dv.length; num += 1) {
    dividir = dividir / Dv[num]
  }
  return dividir
  }

  console.log(divisao([100, 2, 5]))