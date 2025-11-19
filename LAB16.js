
document.addEventListener("DOMContentLoaded", function () {

  // EJERCICIO 3 Y 4
  const BTN_CAMBIAR = document.getElementById("btn-cambiar");
  const PARRAFO_CAMBIAR = document.getElementById("parrafo-cambiar");
  BTN_CAMBIAR.addEventListener("click", function () {
    
    if (PARRAFO_CAMBIAR.textContent === "TEXTO ORIGINAL") {
      PARRAFO_CAMBIAR.textContent = "TEXTO CAMBIADO";
    } else {
      PARRAFO_CAMBIAR.textContent = "TEXTO ORIGINAL";
    }
  });

  // EJERCICIO 5
  const BTN_TOGGLE_OSCURO = document.getElementById("btn-toggle-oscuro");
  BTN_TOGGLE_OSCURO.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");
  });

  // EJERCICIO 6
  const BTN_INCREMENT = document.getElementById("btn-increment");
  const BTN_DECREMENT = document.getElementById("btn-decrement");
  const SPAN_CONTADOR = document.getElementById("contador-valor");
  const DIV_MENSAJE = document.getElementById("contador-mensaje");
  let contador = 0;
  function actualizarContador() {
    SPAN_CONTADOR.textContent = String(contador);
    DIV_MENSAJE.textContent = "";
  }
  BTN_INCREMENT.addEventListener("click", function () {
    contador++;
    actualizarContador();
  });
  BTN_DECREMENT.addEventListener("click", function () {
    if (contador === 0) {
      DIV_MENSAJE.textContent = "NO SE PUEDE DISMINUIR POR DEBAJO DE CERO";
      return;
    }
    contador--;
    actualizarContador();
  });
  actualizarContador();

  // EJERCICIO 7
  const INPUT_NUEVO = document.getElementById("input-nuevo-item");
  const BTN_AGREGAR = document.getElementById("btn-agregar-item");
  const BTN_BORRAR = document.getElementById("btn-borrar-ultimo");
  const UL_DINAMICA = document.getElementById("lista-dinamica");

  BTN_AGREGAR.addEventListener("click", function () {
    const valor = (INPUT_NUEVO.value || "").trim();
    if (valor === "") return;
    const LI = document.createElement("li");
    LI.textContent = valor;
    UL_DINAMICA.appendChild(LI);
    INPUT_NUEVO.value = "";
    INPUT_NUEVO.focus();
  });

  BTN_BORRAR.addEventListener("click", function () {
    const ult = UL_DINAMICA.lastElementChild;
    if (ult) UL_DINAMICA.removeChild(ult);
  });

  // EJERCICIO 8
  const FORM_VALIDAR = document.getElementById("form-validar");
  const INPUT_NOMBRE = document.getElementById("nombre");
  const INPUT_CORREO = document.getElementById("correo");
  const ERROR_NOMBRE = document.getElementById("error-nombre");
  const ERROR_CORREO = document.getElementById("error-correo");

  function limpiarErrores() {
    ERROR_NOMBRE.innerHTML = "";
    ERROR_CORREO.innerHTML = "";
  }
  FORM_VALIDAR.addEventListener("submit", function (e) {
    e.preventDefault();
    limpiarErrores();
    let hayError = false;
    if ((INPUT_NOMBRE.value || "").trim() === "") {
      const SP = document.createElement("span");
      SP.className = "error-span";
      SP.textContent = "NOMBRE OBLIGATORIO";
      ERROR_NOMBRE.appendChild(SP);
      hayError = true;
    }
    if ((INPUT_CORREO.value || "").trim() === "") {
      const SP = document.createElement("span");
      SP.className = "error-span";
      SP.textContent = "CORREO OBLIGATORIO";
      ERROR_CORREO.appendChild(SP);
      hayError = true;
    }
    if (!hayError) {
  
      FORM_VALIDAR.reset();
      alert("FORMULARIO ENVIADO");
    }
  });

 // EJERCICIO 9
const IMG_PRINCIPAL = document.getElementById("img-principal");
const THUMBS = document.querySelectorAll(".gallery-thumbs .thumb");

THUMBS.forEach(function (thumb) {
  thumb.addEventListener("click", function () {
    const ruta = thumb.getAttribute("data-full");
    IMG_PRINCIPAL.setAttribute("src", ruta);
    IMG_PRINCIPAL.setAttribute("alt", thumb.alt);
  });
});