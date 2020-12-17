//maior x menor valor informado
//solicita n valores (10) numeros e informa qual o maior e o menor valor digitado

//var
var cont = 1
var numG
var numP
//solicita entrada
var num = parseInt(prompt('digite o ' + cont + "  numero : "))
numG = num
numP = num
cont = cont + 1
//teste maior menor
while (cont<=10){
  var num = parseInt(prompt('digite o ' + cont + "  numero : "))
  
  if (num>=numG){
    numG = num
     }
  else if (num<=numP){
      numP = num
    }
    cont = cont + 1
  }
//resultado
alert('o maior número digitado foi: ' + numG)
alert('o menor número digitado foi: ' + numP)
//fim