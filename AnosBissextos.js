//anos bissextos
//informa a sequencia de anos bissextos ate o ano informado
console.log('\nLISTA DE ANOS BISSEXTOS' )
console.log('--------------------------------------' )
//variaveis
var ano = parseInt(prompt('\nDigite o ano desejado: '))

var condicao1
var condicao2

//inicio

console.log('\nLISTA DE ANOS BISSEXTOS ATÉ O ANO ' + ano + ' INFORMADO' )
console.log('--------------------------------------' )
if(ano > 0){

  //laço para controlar sequencia de numeros
  for(var sequencia=1;sequencia<=ano;sequencia++){

      condicao1 = (sequencia%400 == 0)
      condicao2 = ((sequencia%4 == 0) && (sequencia%100 != 0))

      if(condicao1 || condicao2){
        alert(sequencia)
      }
  }
}
//fim