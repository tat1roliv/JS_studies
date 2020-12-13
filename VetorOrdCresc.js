//solicita 5 entradas de ordena valores

var idade = [], aux;
for (i=0; i<5;i++){
  idade[i] = parseInt(prompt("digite uma idade: "))
}
for (var fixa = 0; fixa < 4; fixa++){
  for (var resto = (fixa+1); resto < 5; resto++){
    if (idade[fixa]>idade[resto]){
      aux = idade[fixa];
      idade[fixa] = idade[resto];
      idade[resto] = aux;
    }
  }
}
console.log("Números informados na ordem crescente: ")
for (i=0;i<5;i++){
    alert((idade[i]))
}