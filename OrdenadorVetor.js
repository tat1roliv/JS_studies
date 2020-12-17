//ordenador
//solicita a entrada de n valores inteiros (5) e ordena ordem crescente 

var numero = [], aux;
for (i=0; i<5;i++){
  numero[i] = parseInt(prompt("digite uma numero: "))
}
for (var fixa = 0; fixa < 4; fixa++){
  for (var resto = (fixa+1); resto < 5; resto++){
    if (numero[fixa]>numero[resto]){
      aux = numero[fixa];
      numero[fixa] = numero[resto];
      numero[resto] = aux;
    }
  }
}
console.log("Números informados na ordem crescente: ")
for (i=0;i<5;i++){
    alert((numero[i]))
}