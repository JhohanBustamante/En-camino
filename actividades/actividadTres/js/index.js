let obtenerDatos = () => {
  let datos = {
    nombre: document.getElementById("nombre").value.trim(),
    nombreDos: document.getElementById("nombreDos").value.trim(),
    apellido: document.getElementById("apellido").value.trim(),
    apellidoDos: document.getElementById("apellidoDos").value.trim(),
    anioNac: parseInt(document.getElementById("anioNac").value),
    profesion: document.getElementById("profesion").value.trim(),
  };
  validacionDatos(datos);
};

let validacionDatos = (objeto) => {
  if (
    objeto.nombre == "" ||
    objeto.apellido == "" ||
    objeto.anioNac == "" ||
    objeto.profesion == ""
  ) {
    alerta("Ingresa todos los campos obligatorios.", "error");
  } else if (!Number.isInteger(objeto.anioNac)) {
    alerta("Ingresa un año entre 1900 y 2025 para el año de nacimiento (inclusive ambos).","error");
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

let alerta = (mensaje, icono) => {
  Swal.fire({
    title: mensaje,
    icon: icono,
    draggable: true,
  });
};

let limpiarCampos = () => {
  document.getElementById("nombre").value = localStorage.getItem("nombre");
  document.getElementById("nombreDos").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("apellidoDos").value = "";
  document.getElementById("anioNac").value = localStorage.getItem("nacimiento");
  document.getElementById("profesion").value = "";
};

let limpiarCarta = () => {
  document.getElementById("cardNombre").innerHTML = "";
  document.getElementById("cardApellido").innerHTML = "";
  document.getElementById("cardTexto").innerHTML = "";
};

let edadUsuario = (objeto) => {
  let anioActual = new Date().getFullYear();
  let edadActual = anioActual - objeto.anioNac;
  return edadActual;
};

let reflejarDatos = (objeto, edadActual) => {
  let texto = `Hola, soy ${objeto.profesion} y tengo ${edadActual} años. Esta es mi carta
                 de presentación.`;

  document.getElementById("cardNombre").innerHTML = `${objeto.nombre} ${objeto.nombreDos}`;
  document.getElementById("cardApellido").innerHTML = `${objeto.apellido} ${objeto.apellidoDos}`;
  document.getElementById("cardTexto").innerHTML = texto;

  encender();
  alerta("Tarjeta generada", "success");
};

let encender = () => {
  let claseTarjeta = document.getElementById("tarjeta");
  claseTarjeta.classList.remove("ocultar");
  claseTarjeta.classList.add("ver");
};

let ocultar = () => {
  let claseTarjeta = document.getElementById("tarjeta");
  claseTarjeta.classList.remove("ver");
  claseTarjeta.classList.add("ocultar");
};

limpiarCampos()
//localStorage.setItem("nombre","Jhohan")
//localStorage.setItem("nacimiento","2000")