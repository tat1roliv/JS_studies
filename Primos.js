//calcular a sequencia de numeros primos ate um valor informado

//variaveis
var numero = parseInt(prompt('Digite o numero desejado: '))
var primo
//inicio
if(numero > 1){

  //laço para controlar sequencia de numeros
  for(var sequencia=2;sequencia<=numero;sequencia++){
      //volta variavel primo para o estado inicial
      primo = true

      //laço para encontrar algum divisivel na sequencia
      for(var i=2; i<sequencia && primo; i++){
        if(sequencia % i == 0){
          primo=false
        }
      }
      //se encontrado nenhum divisivel, é primo
      if(primo){
        alert(sequencia)
      }
  }
}
//fim