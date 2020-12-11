//matriz base

//decl var
var matriz = [[],[],[]]

//alimentar valores da matriz
for (var linha=0;linha<3;linha++){
  for (var coluna=0;coluna<3;coluna++){
    //preenchendo cada coluna da matriz
    //random
    matriz[linha][coluna] = (linha+1)*(coluna+1)
  }
}
//impressao matriz
for (var linha=0; linha<3;linha++){
    alert(matriz[linha])
}