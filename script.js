
function entregarValores()
{
  var total = 0;
  var n = 1;
  var numeroCiclos = 0;
  while (total <=100)
  {

    total = total + n;
    texto = texto + " + " + n;
    resultado2.insertAdjacentHTML("beforeend",texto + " = "+ total+"<br>" );
    numeroCiclos ++;
    n++;
  }
}
var texto = "La suma de: ";
var numeros = [];
var resultado2 = document.getElementById("resultado");
var b = document.getElementById("play");
b.addEventListener("click", entregarValores);
