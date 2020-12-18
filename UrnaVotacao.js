//urna de votacao
//verifica criterios de aptidao a acessar pagina seguinte
//var
var anonasc = parseInt(prompt('Digite o ano de nascimento (AAAA): '))
var anoatual = parseInt(prompt('Digite o ano aual (AAAA): '))

var idade = anoatual - anonasc

//inicio

if (idade <16){
  alert('Voce tem '+ idade + ' anos de idade e esta INAPTO a  votar')

} else if (idade >=16 && idade<18) {
  alert('Voce tem '+ idade + ' anos de idade e esta APTO a  votar, mas não é obrigatório')
} else if (idade>=18 && idade<65){
  alert('Voce tem '+ idade + ' anos de idade e esta APTO a  votar')
} else {
  alert('Voce tem '+ idade + ' anos de idade e esta APTO a  votar, mas não é obrigatório')
}
//fim