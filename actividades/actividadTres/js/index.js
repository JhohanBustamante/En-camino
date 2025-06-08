var obtenerDatos = () => {

  var datos = {
    nombre: document.getElementById("nombre").value,
    nombreDos: document.getElementById("nombreDos").value,
    apellido: document.getElementById("apellido").value,
    apellidoDos: document.getElementById("apellidoDos").value,
    anioNac: parseInt(document.getElementById("anioNac").value),
    profesion: document.getElementById("profesion").value,
  };

  validacionDatos(datos);

};

var validacionDatos = (objeto) => {

  var tarjeta = document.getElementById("tarjeta");
  
  if (
    objeto.nombre == "" ||
    objeto.apellido == "" ||
    objeto.anioNac == "" ||
    objeto.profesion == ""
  ) {
    alert("Ingresa todos los espacios requeridos.");
  } else if (!Number.isInteger(objeto.anioNac)) {
    alert("Ingresa un año entre 1920 y 2025 para el año de nacimiento, formato números, sin comas o puntos.");
  } else if (objeto.anioNac <= 1920 || objeto.anioNac > 2025) {
    alert("Ingresa un año de nacimiento válido.");
  } else if(tarjeta.classList.contains("ver")){
    alert("Intenta nuevamente");
    location.reload();
  } else{ reflejarDatos(objeto, edadUsuario(objeto)); 
  };

};

var edadUsuario = (objeto) => {

  var fecha = new Date();
  var anioActual = fecha.getFullYear();
  var edadActual = anioActual - objeto.anioNac;
  return edadActual;

};

var reflejarDatos = (objeto, edadActual) => {

  if (edadActual < 18) {
    alert("No puedes generar la tarjeta ya que eres menor de edad.");
  } else {
    var texto = `Hola, soy ${objeto.profesion} y tengo ${edadActual} años. Esta es mi carta
                 de presentación.`;

    const arrayIny = ["cardNombre", "cardApellido", "cardTexto"];

    for (var i = 0; i < arrayIny.length; i++) {
      switch (arrayIny[i]) {
        case "cardNombre":
          document.getElementById(
            "cardNombre"
          ).innerHTML += `${objeto.nombre} ${objeto.nombreDos}`;
          break;

        case "cardApellido":
          document.getElementById(
            "cardApellido"
          ).innerHTML += `${objeto.apellido} ${objeto.apellidoDos}`;
          break;

        case "cardTexto":
          document.getElementById("cardTexto").innerHTML += texto;
          break;
      }
    }

    encendido();
  }

};

var encendido = () => {

  var claseTarjeta = document.getElementById("tarjeta");
  claseTarjeta.classList.remove("ocultar");
  claseTarjeta.classList.add("ver");

};

var quitar = () => {

  var claseTarjeta = document.getElementById("tarjeta");
  location.reload();

};