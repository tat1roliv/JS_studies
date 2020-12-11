//batalha naval
var naval = [[],[],[],[],[],[],[],[],[],[]];
var linha, coluna
//inicio
for (var i=0;i<10;i++){
  for (j=0;j<10;j++){
    naval[i][j] = "agua"
  }
}
for (var pos = 1; pos<11;pos++){
  linha = Math.floor(Math.random()*10);
  coluna = Math.floor(Math.random()*10);
  naval[linha][coluna] = "navio"
}
do{
linha = prompt("insira a linha");
coluna = prompt("insira a coluna");
if (naval[linha][coluna] = "navio"){
  alert("ganhou");
} 
else {
  alert("perdeu");
}
var resp = prompt("Continuar? (s/n)")

console.clear();

}while (resp == 's')
