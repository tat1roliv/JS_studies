//procedimentos (função)
function boasvindas(){
    alert('Vamos iniciar nosso programa!')
  }
  
  function saudacao(tempo,nome){
  
    if(tempo == 'dia'){
      alert('Bom dia ' + nome)
    }
    else if(tempo == 'tarde'){
      alert('Boa tarde ' + nome)
    }
    else if(tempo == 'noite'){
      alert('Boa noite ' + nome)
    }
    else{
      alert('Olá ' + nome)
    }
  
  }
  
  //exeução do bloco de instrução
  var nomePessoa = prompt('Escreva seu nome: ')
  
  //invocando os procedimentos
  boasvindas()
  saudacao('noite',nomePessoa)