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
  if (
    objeto.nombre == "" ||
    objeto.apellido == "" ||
    objeto.anioNac == "" ||
    objeto.profesion == ""
  ) {
    alerta("Ingresa todos los campos obligatorios.", "error");
  } else if (!Number.isInteger(objeto.anioNac)) {
    alerta("Ingresa un año entre 1900 y 2025 para el año de nacimiento.");
  } else if (objeto.anioNac < 1900 || objeto.anioNac > 2025) {
    alerta("Ingresa un año de nacimiento válido.", "error");
  } else if (edadUsuario(objeto) < 18) {
    alerta(
      "No puedes generar la tarjeta, ya que eres menor de edad.",
      "error"
    );
  } else {
    limpiarCampos();
    limpiarCarta();
    reflejarDatos(objeto, edadUsuario(objeto));
  }
};

var limpiarCampos = () => {
  document.getElementById("nombre").value = "";
  document.getElementById("nombreDos").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("apellidoDos").value = "";
  document.getElementById("anioNac").value = "";
  document.getElementById("profesion").value = "";
};

var limpiarCarta = (objeto) => {
  document.getElementById("cardNombre").innerHTML = "";
  document.getElementById("cardApellido").innerHTML = "";
  document.getElementById("cardTexto").innerHTML = "";
};

var edadUsuario = (objeto) => {
  var fecha = new Date();
  var anioActual = fecha.getFullYear();
  var edadActual = anioActual - objeto.anioNac;
  return edadActual;
};

var reflejarDatos = (objeto, edadActual) => {
  var texto = `Hola, soy ${objeto.profesion} y tengo ${edadActual} años. Esta es mi carta
                 de presentación.`;
  const arrayIny = ["cardNombre", "cardApellido", "cardTexto"];

  document.getElementById("cardNombre").innerHTML += `${objeto.nombre} ${objeto.nombreDos}`;
  document.getElementById("cardApellido").innerHTML += `${objeto.apellido} ${objeto.apellidoDos}`;
  document.getElementById("cardTexto").innerHTML += texto;

  encendido();
  alerta("Tarjeta generada", "success");
};

var encendido = () => {
  var claseTarjeta = document.getElementById("tarjeta");
  claseTarjeta.classList.remove("ocultar");
  claseTarjeta.classList.add("ver");
};

var ocultar = () => {
  var claseTarjeta = document.getElementById("tarjeta");
  claseTarjeta.classList.remove("ver");
  claseTarjeta.classList.add("ocultar");
};

var alerta = (mensaje, icono) => {
  Swal.fire({
    title: mensaje,
    icon: icono,
    draggable: true,
  });
};