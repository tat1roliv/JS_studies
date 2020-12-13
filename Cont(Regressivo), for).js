//contador regressivo (-1), estrutura *for*
var num = parseInt(prompt("digite um numero: "))
var cont = num
for (num; cont>0; cont=cont-1){
  if (cont%2!=0){
    alert(cont)
  }
}
