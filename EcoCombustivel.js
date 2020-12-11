// Algoritmo para calcular qual o combustível mais vantajoso


//declaracao das variaveis 
var precoalc, precogas, coef, resposta
//inicio 
//chamada do programa e texto inicial
console.log('\n* * * * * P R O G R A M A  E C O N O M I Z A N D O * * * * *')
console.log('\nPara descobrir o combustível mais vantajoso para abastecer, informe os valores a seguir.')
//solicita ao usuario o preenchimento de valores dos diferentes combustiveis + realiza calculo enquanto o usuario responde 's'||'S' + substitui ',' para '.'
do {
var precoalc = parseFloat(prompt('\nDigite o valor do álcool (R$): ').replace(',', '.'))
var precogas = parseFloat(prompt('\nDigite o valor da gasolina (R$): ').replace(',', '.'))
//calculo do coeficiente entre combustiveis + ajuste casas decimais
var coef = precoalc/precogas
coef = parseFloat(coef.toFixed(2))
//parametros para calculo do abastecimento
  if (coef > 0.7){
    console.log('\nÉ mais vantajoso abastecer com gasolina, relação de ' + coef)
  }
    else if (coef < 0.7){
      console.log('\nÉ mais vantajoso abastecer com álcool relação de ' + coef)
    }
    else if (coef == 0.7) {
      console.log('\nOs dois combustíveis terão o mesmo rendimento, relação de ', coef)
    }
//pergunta se deseja realizar novo calculo
var resposta = (prompt("\nDeseja efetuar um novo cálculo? (s/n)"))
}while (resposta == 's'|| resposta == 'S')
alert('\n* * * FIM DA EXECUÇÃO * * *')
//fim