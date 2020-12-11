//operações de soma e subtração entre duas matrizes de 3a ordem

//matrizes
var mA  = [[],[],[]]
var mB = [[],[],[]]
var mSom = [[],[],[]]
var mSub = [[],[],[]]

//alimentar valores matrizes A e B
for (var i=0; i<3;i++){
  for (var j=0;j<3;j++){
    //preenchendo colunas + random
    mA[i][j] = parseInt(Math.random()*100)
    mB[i][j] = parseInt(Math.random()*100)
  }
}
//impressao matriz
alert('Matriz A')
for (var i=0;i<3;i++){
  alert(mA[i])
}
alert('Matriz B')
for (var i=0;i<3;i++){
  alert(mB[i])
}
//alimentar valores matriz Som e uUb
for (var i=o;i<3;i++) {
  for (var j=0;j<3;j++) {
    //preenchendo colunas + random
    mSom[i][j] = mA[i][j] + mB[i][j] 
    mSub[i][j] = mA[i][j] - mB[i][j] 
   }
}
//impressao matriz
alert('Matriz A+B')
for (var i=0;i<3;i++){
  alert(mSom[i])
alert('Matriz A-B')
for (var i=0;i<3;i++){
  alert(mSub[i])