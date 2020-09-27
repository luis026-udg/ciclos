
function entregarValores()
{
  resultado2.innerHTML = ("La serie es <br>");
  var n = 1;
  numeroCiclos = 0;
  for (var total = 0; total <= 100; total + n)
  {
    total = total + n;
    if (numeroCiclos == 0)
    {
      texto = texto + n;
    }
    else
    {
      texto = texto + " + " + n;
    }
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
