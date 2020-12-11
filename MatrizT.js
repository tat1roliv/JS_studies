//matriz transposta

//definição da matriz, definindo um número de linhas
var matriz = [[],[],[]]
var matrizT = [[],[],[]]
//alimentar valores da matriz
for(var linha=0;linha<3;linha++){
  for(var coluna=0;coluna<3;coluna++){
    //preencheendo cada coluna da matriz
    //uso de função randômica
    matriz[linha][coluna] = parseInt(Math.random()*100)
  }
}
//impressao da matriz
for(var linha=0;linha<3;linha++){
  alert(matriz[linha])
}
//tranposta da matriz
//alimentar valores da matriz
for(var linha=0;linha<3;linha++){
  for(var coluna=0;coluna<3;coluna++){
    //preencheendo cada coluna da matriz
    //uso de função randômica
    matrizT[linha][coluna] = matriz[coluna][linha]
  }
}
//espaço
alert()
//impressao da matriz transposta
for(var linha=0;linha<3;linha++){
  alert(matrizT[linha])
}
