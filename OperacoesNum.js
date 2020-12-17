//realiza diferentes operações matematicas entre dois numeros solicitados

//var
var numA = parseInt(prompt('Digite o valor de A: '))
var numB = parseInt(prompt('Digite o valor de B: '))

var soma = numA + numB
var sub = numA - numB
var mult = numA * numB
var div = numA * numB
var dsoma = soma * 2

//inicio
console.log('Soma de '+ numA + ' e de '+ numB + 'é de ' + soma)
console.log('Subtracão de '+ numA + ' e de '+ numB + 'é de ' + sub)
console.log('Multiplicacao de '+ numA + ' e de '+ numB + 'é de ' + mult)
console.log('Divisão de '+ numA + ' e de '+ numB + ' é de ' + div)
console.log('O dobro da soma de ' + numA + ' e ' + numB + ' é de: '+ dsoma)
console.log('Fim da execução')
//fim