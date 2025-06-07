var obtenerDatos = () => {
  var datos = {
    nombre: document.getElementById("nombre").value,
    nombreDos: document.getElementById("nombreDos").value,
    apellido: document.getElementById("apellido").value,
    apellidoDos: document.getElementById("apellidoDos").value,
    anioNac: parseInt(document.getElementById("anioNac").value),
    profesion: document.getElementById("profesion").value,
  };


    if(datos.nombre == "" || datos.apellido == "" || datos.anioNac == "" || datos.profesion == ""){
        alert("Ingresa todos los espacios requeridos.");
    } else if(!Number.isInteger(datos.anioNac)){
        alert("Ingresa un número entero para el año de nacimiento.");
    } else {
        encendido();
        reflejarDatos(datos,edadUsuario(datos));
    }
};

var edadUsuario = (objeto) => {
    var fecha = new Date();
    var anioActual = fecha.getFullYear();
    var edadActual = anioActual - objeto.anioNac;
    return edadActual;
}

var reflejarDatos = (objeto,edadActual) => {
  
  if (edadActual < 18) {
    alert("No puedes generar la carta, debido a que eres menor de edad");
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
          document.getElementById(
            "cardTexto"
        ).innerHTML += texto;
          break;
      }
    }
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
