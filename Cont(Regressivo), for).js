//contador regressivo (-1), estrutura *for*
//solicita um valor ate o qual sera feita a contagem
var num = parseInt(prompt("digite um número limite para contagem: "))
var cont = num
for (num; cont>0; cont=cont-1){
  if (cont%2!=0){
    alert(cont)
  }
}
