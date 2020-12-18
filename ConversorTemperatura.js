//conversor de temperaturas
//converte o valor informado em F para C
//var
var tempF = parseFloat(prompt('Informe a temperatura em F°: '))
var tempC = (tempF-32)/1.8
//inicio
if (isNaN(tempF)){
  alert('\nO valor informado não é um número')
}else{
  alert('\nProcessando a operação...')
tempC = tempC.toFixed(2)
alert('\nA temperatura informada em Fahrenheit (' + tempF + '), em C° é de: ' + tempC )
}
//fim