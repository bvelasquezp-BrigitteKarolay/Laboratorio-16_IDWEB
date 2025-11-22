// LABORATORIO 16
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


  // EJERCICIO 10
  const BTN_GENERAR_TABLA = document.getElementById("btn-generar-tabla");
  const AREA_TABLA_PRODUCTOS = document.getElementById("tabla-productos-area");
  const PRODUCTOS = [
    { nombre: "Laptop", precio: 3500 },
    { nombre: "Mouse", precio: 80 }
  ];
  BTN_GENERAR_TABLA.addEventListener("click", function () {
    AREA_TABLA_PRODUCTOS.innerHTML = "";
    const TABLE = document.createElement("table");
    TABLE.style.borderCollapse = "collapse";
    TABLE.style.width = "100%";
    const THEAD = document.createElement("thead");
    const TRH = document.createElement("tr");
    ["NOMBRE", "PRECIO"].forEach(function (h) {
      const TH = document.createElement("th");
      TH.textContent = h;
      TH.style.border = "1px solid #ccc";
      TH.style.padding = "6px";
      TRH.appendChild(TH);
    });
    THEAD.appendChild(TRH);
    TABLE.appendChild(THEAD);
    const TBODY = document.createElement("tbody");
    PRODUCTOS.forEach(function (p) {
      const TR = document.createElement("tr");
      const TD1 = document.createElement("td");
      TD1.textContent = p.nombre;
      TD1.style.border = "1px solid #ccc";
      TD1.style.padding = "6px";
      const TD2 = document.createElement("td");
      TD2.textContent = String(p.precio);
      TD2.style.border = "1px solid #ccc";
      TD2.style.padding = "6px";
      TR.appendChild(TD1);
      TR.appendChild(TD2);
      TBODY.appendChild(TR);
    });
    TABLE.appendChild(TBODY);
    AREA_TABLA_PRODUCTOS.appendChild(TABLE);
  });

  // EJERCICIO 11
  const UL_DELEGADA = document.getElementById("lista-delegada");
  UL_DELEGADA.addEventListener("click", function (e) {
    const objetivo = e.target;
    if (objetivo && objetivo.tagName === "LI") {
      objetivo.parentNode.removeChild(objetivo);
    }
  });

  // EJERCICIO 12
  const BTN_MOVER = document.getElementById("btn-mover");
  const BTN_REINICIAR = document.getElementById("btn-reiniciar");
  const CUADRO = document.getElementById("cuadro-anim");
  BTN_MOVER.addEventListener("click", function () {
    CUADRO.classList.add("mover");
  });
  BTN_REINICIAR.addEventListener("click", function () {
    CUADRO.classList.remove("mover");
  });

  // EJERCICIO 13
  const FORM_CRUD = document.getElementById("form-crud");
  const INPUT_CRUD_NOMBRE = document.getElementById("crud-nombre");
  const INPUT_CRUD_EDAD = document.getElementById("crud-edad");
  const TBODY_CRUD = document.querySelector("#tabla-usuarios tbody");
  let usuarios = [];
  let idCounter = 1;

  function renderUsuarios() {
    TBODY_CRUD.innerHTML = "";
    usuarios.forEach(function (u) {
      const TR = document.createElement("tr");
      TR.dataset.id = String(u.id);
      const TDN = document.createElement("td");
      TDN.textContent = u.nombre;
      const TDE = document.createElement("td");
      TDE.textContent = String(u.edad);
      const TDA = document.createElement("td");

      const BTN_EDIT = document.createElement("button");
      BTN_EDIT.textContent = "EDITAR";
      BTN_EDIT.className = "btn btn-edit";
      BTN_EDIT.dataset.action = "editar";
      BTN_EDIT.dataset.id = String(u.id);

      const BTN_DELETE = document.createElement("button");
      BTN_DELETE.textContent = "ELIMINAR";
      BTN_DELETE.className = "btn btn-delete";
      BTN_DELETE.dataset.action = "eliminar";
      BTN_DELETE.dataset.id = String(u.id);

      TDA.appendChild(BTN_EDIT);
      TDA.appendChild(BTN_DELETE);
      TR.appendChild(TDN);
      TR.appendChild(TDE);
      TR.appendChild(TDA);
      TBODY_CRUD.appendChild(TR);
    });
  }

  FORM_CRUD.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = (INPUT_CRUD_NOMBRE.value || "").trim();
    const edad = (INPUT_CRUD_EDAD.value || "").trim();
    if (nombre === "" || edad === "") return;
    usuarios.push({ id: idCounter++, nombre: nombre, edad: edad });
    INPUT_CRUD_NOMBRE.value = "";
    INPUT_CRUD_EDAD.value = "";
    renderUsuarios();
  });


  TBODY_CRUD.addEventListener("click", function (e) {
    const objetivo = e.target;
    if (objetivo.tagName !== "BUTTON") return;
    const accion = objetivo.dataset.action;
    const id = Number(objetivo.dataset.id);
    if (accion === "eliminar") {
      usuarios = usuarios.filter(function (u) { return u.id !== id; });
      renderUsuarios();
    } else if (accion === "editar") {

      const FILA = objetivo.closest("tr");
      const TD_NOMBRE = FILA.children[0];
      const TD_EDAD = FILA.children[1];
      const TD_ACCIONES = FILA.children[2];

      const INPUT_N = document.createElement("input");
      INPUT_N.value = TD_NOMBRE.textContent;
      const INPUT_E = document.createElement("input");
      INPUT_E.value = TD_EDAD.textContent;

      TD_NOMBRE.innerHTML = "";
      TD_EDAD.innerHTML = "";
      TD_NOMBRE.appendChild(INPUT_N);
      TD_EDAD.appendChild(INPUT_E);

      TD_ACCIONES.innerHTML = "";
      const BTN_GUARDAR = document.createElement("button");
      BTN_GUARDAR.textContent = "GUARDAR";
      BTN_GUARDAR.dataset.action = "guardar";
      BTN_GUARDAR.dataset.id = String(id);
      TD_ACCIONES.appendChild(BTN_GUARDAR);

      const BTN_CANCEL = document.createElement("button");
      BTN_CANCEL.textContent = "CANCELAR";
      BTN_CANCEL.dataset.action = "cancelar";
      BTN_CANCEL.dataset.id = String(id);
      TD_ACCIONES.appendChild(BTN_CANCEL);
    } else if (accion === "guardar") {
      const idGuardar = Number(objetivo.dataset.id);
      const FILA = objetivo.closest("tr");
      const NOMBRE_NUEVO = FILA.children[0].querySelector("input").value.trim();
      const EDAD_NUEVA = FILA.children[1].querySelector("input").value.trim();
      if (NOMBRE_NUEVO === "" || EDAD_NUEVA === "") return;
      usuarios = usuarios.map(function (u) {
        if (u.id === idGuardar) return { id: u.id, nombre: NOMBRE_NUEVO, edad: EDAD_NUEVA };
        return u;
      });
      renderUsuarios();
    } else if (accion === "cancelar") {
      renderUsuarios();
    }
  });

  // EJERCICIO 14
  const PERSONA = { nombre: "Brigitte Karolay", edad: 19, ciudad: "Arequipa" };
  console.log("EJERCICIO 14 - PERSONA JSON:", JSON.stringify(PERSONA));

  // EJERCICIO 15
  const CADENA_JSON_15 = '{"nombre":"Ana","edad":30,"ciudad":"Lima"}';
  const OBJ_15 = JSON.parse(CADENA_JSON_15);
  const P_EJ15 = document.getElementById("ej15-mostrar");
  P_EJ15.textContent = "NOMBRE: " + (OBJ_15.nombre || "");

  // EJERCICIO 16
  const BTN_PROCESAR_PRODUCTOS = document.getElementById("btn-procesar-productos");
  const UL_PRODUCTOS = document.getElementById("lista-productos");
  BTN_PROCESAR_PRODUCTOS.addEventListener("click", function () {
    const productos = [
      { nombre: "Teclado", precio: 120 },
      { nombre: "Monitor", precio: 600 },
      { nombre: "Auriculares", precio: 90 }
    ];
    const json = JSON.stringify(productos);
    const objetoDeNuevo = JSON.parse(json);
    UL_PRODUCTOS.innerHTML = "";
    objetoDeNuevo.forEach(function (p) {
      const LI = document.createElement("li");
      LI.textContent = p.nombre;
      UL_PRODUCTOS.appendChild(LI);
    });
  });

  // EJERCICIO 17
  const BTN_GUARDAR_USUARIO = document.getElementById("btn-guardar-usuario");
  const BTN_RECUPERAR_USUARIO = document.getElementById("btn-recuperar-usuario");
  const AREA_USUARIO_LOCAL = document.getElementById("area-usuario-local");
  BTN_GUARDAR_USUARIO.addEventListener("click", function () {
    const usuarioLocal = { nombre: "Usuario", correo: "user@correo.com", rol: "estudiante" };
    localStorage.setItem("usuarioLaboratorio16", JSON.stringify(usuarioLocal));
    AREA_USUARIO_LOCAL.textContent = "USUARIO GUARDADO EN localStorage";
  });
  BTN_RECUPERAR_USUARIO.addEventListener("click", function () {
    const data = localStorage.getItem("usuarioLaboratorio16");
    if (!data) {
      AREA_USUARIO_LOCAL.textContent = "NO HAY USUARIO GUARDADO";
      return;
    }
    const obj = JSON.parse(data);
    AREA_USUARIO_LOCAL.textContent = "NOMBRE: " + obj.nombre + " - CORREO: " + obj.correo + " - ROL: " + obj.rol;
  });

  // EJERCICIO 18
  const BTN_GENERAR_LIBROS = document.getElementById("btn-generar-libros");
  const AREA_TABLA_LIBROS = document.getElementById("tabla-libros-area");
  BTN_GENERAR_LIBROS.addEventListener("click", function () {
    AREA_TABLA_LIBROS.innerHTML = "";
    const JSON_LIBROS = '[{"titulo":"Cien años de soledad","autor":"G Garcia Marquez"},{"titulo":"La ciudad y los perros","autor":"M Vargas Llosa"},{"titulo":"El principito","autor":"Antoine de Saint-Exupery"}]';
    const LIBROS = JSON.parse(JSON_LIBROS);
    const TABLE = document.createElement("table");
    TABLE.style.borderCollapse = "collapse";
    TABLE.style.width = "100%";
    const THEAD = document.createElement("thead");
    const TRH = document.createElement("tr");
    ["TITULO", "AUTOR"].forEach(function (h) {
      const TH = document.createElement("th");
      TH.textContent = h;
      TH.style.border = "1px solid #ccc";
      TH.style.padding = "6px";
      TRH.appendChild(TH);
    });
    THEAD.appendChild(TRH);
    TABLE.appendChild(THEAD);
    const TBODY = document.createElement("tbody");
    LIBROS.forEach(function (lib) {
      const TR = document.createElement("tr");
      const TD1 = document.createElement("td");
      TD1.textContent = lib.titulo;
      TD1.style.border = "1px solid #ccc";
      TD1.style.padding = "6px";
      const TD2 = document.createElement("td");
      TD2.textContent = lib.autor;
      TD2.style.border = "1px solid #ccc";
      TD2.style.padding = "6px";
      TR.appendChild(TD1);
      TR.appendChild(TD2);
      TBODY.appendChild(TR);
    });
    TABLE.appendChild(TBODY);
    AREA_TABLA_LIBROS.appendChild(TABLE);
  });

  // EJERCICIO 19
  const OBJ_JSON_19 = '{"nombre":"Luis","edad":28,"ciudad":"Cusco"}';
  const OBJETO_19 = JSON.parse(OBJ_JSON_19);
  OBJETO_19.edad = 29; 
  const JSON_ACTUALIZADO_19 = JSON.stringify(OBJETO_19);
  console.log("EJERCICIO 19 - JSON ACTUALIZADO:", JSON_ACTUALIZADO_19);

  // EJERCICIO 20
  const INPUT_NOMBRE_20 = document.getElementById("input-nombre-20");
  const BTN_GUARDAR_JSON20 = document.getElementById("btn-guardar-json20");
  BTN_GUARDAR_JSON20.addEventListener("click", function () {
    const nombre = (INPUT_NOMBRE_20.value || "").trim();
    if (nombre === "") return;
    const obj = { nombre: nombre };
    console.log("EJERCICIO 20 - OBJETO EN JSON:", JSON.stringify(obj));
  });

  // EJERCICIO 21
  const BTN_CARGAR_TAREAS = document.getElementById("btn-cargar-tareas");
  const UL_TAREAS = document.getElementById("lista-tareas");
  BTN_CARGAR_TAREAS.addEventListener("click", function () {
    UL_TAREAS.innerHTML = "";
    const JSON_TAREAS = '[{"titulo":"Comprar","completada":true},{"titulo":"Estudiar","completada":false},{"titulo":"Hacer ejercicio","completada":true}]';
    const TAREAS = JSON.parse(JSON_TAREAS);
    TAREAS.forEach(function (t) {
      const LI = document.createElement("li");
      LI.textContent = t.titulo;
      if (t.completada) {
        LI.style.backgroundColor = "#dff0d8"; 
      } else {
        LI.style.backgroundColor = "#f8d7da"; 
      }
      UL_TAREAS.appendChild(LI);
    });
  });

  // EJERCICIO 22
  const FORM_PERFIL = document.getElementById("form-perfil");
  const INPUT_PERFIL_NOMBRE = document.getElementById("perfil-nombre");
  const INPUT_PERFIL_EDAD = document.getElementById("perfil-edad");
  const INPUT_PERFIL_PAIS = document.getElementById("perfil-pais");
  const BTN_GUARDAR_PERFIL = document.getElementById("btn-guardar-perfil");
  const AREA_PERFIL = document.getElementById("area-perfil");

  function mostrarPerfilGuardado() {
    const data = localStorage.getItem("perfilLaboratorio16");
    if (!data) {
      AREA_PERFIL.textContent = "NO HAY PERFIL GUARDADO";
      return;
    }
    const perfil = JSON.parse(data);
    AREA_PERFIL.innerHTML = "";
    const P1 = document.createElement("p");
    P1.textContent = "NOMBRE: " + perfil.nombre;
    const P2 = document.createElement("p");
    P2.textContent = "EDAD: " + perfil.edad;
    const P3 = document.createElement("p");
    P3.textContent = "PAIS: " + perfil.pais;
    AREA_PERFIL.appendChild(P1);
    AREA_PERFIL.appendChild(P2);
    AREA_PERFIL.appendChild(P3);
  }

  FORM_PERFIL.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = (INPUT_PERFIL_NOMBRE.value || "").trim();
    const edad = (INPUT_PERFIL_EDAD.value || "").trim();
    const pais = (INPUT_PERFIL_PAIS.value || "").trim();
    if (nombre === "" || edad === "" || pais === "") return;
    const perfil = { nombre: nombre, edad: edad, pais: pais };
    localStorage.setItem("perfilLaboratorio16", JSON.stringify(perfil));
    mostrarPerfilGuardado();
    FORM_PERFIL.reset();
  });

  mostrarPerfilGuardado();
});
