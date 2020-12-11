//funcao testa se valores informados configuram um retangulo ou quadrado
function areaRetang (la,lb){
    return la*lb
  }
  function quadrado (la,lb){
    return la==lb
  }
  
  var ladoA = parseInt(prompt("lado A: "))
  var ladoB = parseInt(prompt("lado B: "))
  
  alert ("Area: " + areaRetang(ladoA, ladoB))
  alert ("Quadrado?" + quadrado(ladoA,ladoB))