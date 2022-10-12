// funcion para crear productos

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = parseInt(id);
        this.nombre = nombre[0].toUpperCase() + nombre.substring(1);
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);
    }
    impuestoIva() {
        this.precio = this.precio * 1.21;
    }
    restarStock (cantidad) {
        this.stock -= cantidad;
    }
}
let control = 1;
let listaProductoEnStock = "";
let listaNombreProducto = "";
let productoCompra = "";

let subTotal = 0;
let total = 0;
let subPrecioFinal = [];
let precioFinal = [];
// let auxiliarEntrada = [];
let auxiliarEntCant = 0;
let prodStock = [];
let prodNombre = [];
let prodCantidad = [];
let carrito = [];
let contador = 0;

const listaProductos = [];

listaProductos.push(new Producto("1", "transistor", 2.75, 100));
listaProductos.push(new Producto("2", "resistencia", 1.25, 500));
listaProductos.push(new Producto("3", "capacitor", 1.60, 300));
listaProductos.push(new Producto("4", "integrado", 4.75, 80));
listaProductos.push(new Producto("5", "plaqueta", 0.75, 900));

function controlStock(listaProductos) {
    listaProductoEnStock = listaProductos.filter((prod) => prod.stock > 0);
    listaNombreProducto = listaProductoEnStock.map((prod) => prod.nombre);
}
controlStock(listaProductos);

function carritoProductos(prodNombre, prodCantidad, boleano) {
  if (boleano == true) {
    console.log("bienvenido al carrito");
    alert("bienvenido al carrito");
    let itemProducto = listaProductos.find((prod) => prod.nombre === prodNombre);
    console.log(itemProducto);
    console.log("Cantidad "+prodCantidad);
    let precioProducto = itemProducto.precio;
    precioFinal.push(precioProducto * prodCantidad);
    console.log("precioFinal " + precioFinal)
    total = precioFinal.reduce((acu,elem) => acu + elem, 0);
    console.log(total)
    alert("El total a pagar es: " + total);
    alert("Gracias por su compra");
    // return total;

  } else {
    let itemProducto = listaProductos.find((prod) => prod.nombre === prodNombre);
    console.log(itemProducto);
    console.log("Cantidad "+prodCantidad);
    let precioProducto = itemProducto.precio;
    let operacion = precioProducto * prodCantidad;
    subPrecioFinal.push(operacion);
    console.log("subPrecioFinal " + subPrecioFinal)
    subTotal += subPrecioFinal.reduce((acu,elem) => acu + elem, 0);
    console.log(subTotal);
    return subTotal;
  }
}


function elijeProducto(productoElejido){

  let auxProdElejido = [];
  let controlEntrada = productoElejido[0].toUpperCase() + productoElejido.substring(1).toLowerCase();
  let item = listaNombreProducto.indexOf(controlEntrada);
  let nombre = listaNombreProducto[item];
  let enStock = parseInt(listaProductoEnStock[item].stock);
  auxProdElejido.push(nombre, enStock);

  console.log("auxProdElejido  " + auxProdElejido);
  contador = 1;
  return auxProdElejido;
}

function actualizarStock (nomb, stockNomb, descontarStock){
  let nuevoStock = parseInt(stockNomb) - parseInt(descontarStock);
  let aux = listaProductos.find(nombre => nombre.nombre === nomb );
  console.log("Lista producto:  " + Object.values(aux));
  console.log("Stock del producto:  " + (aux.stock));
  aux.stock = nuevoStock;
  console.log("Stock a actualizar:  " + nuevoStock);
  console.log("Stock actualizado:  " + Object.values(aux));
}

function comprandoProductos(productoCompra) {

  // let auxiliarEntrada = elijeProducto(productoCompra);
  let auxiliarEntrada = productoCompra;

  // auxiliarEntrada.push(elijeProducto(productoCompra));
  console.log(typeof(auxiliarEntrada))
  // console.log("auxiliarEntrada " + auxiliarEntrada.productoCompra)
  console.log("auxiliarEntrada " + auxiliarEntrada[0])
  console.log("productoCompra " + productoCompra)
  if (auxiliarEntrada[1] <= 0) {
    alert("No disponemos mas de stock de " + auxiliarEntrada[0]);
  }
  
  let cantidadIngresa = parseInt(prompt("Ingrese la cantidad de " + auxiliarEntrada[0] + " quiere adquirir"));
  auxiliarEntCant = cantidadIngresa;
  if(cantidadIngresa > auxiliarEntrada[1]) {
    alert("No disponemos de la cantidad ingresa");
    alert("Actualmente nuestro stock disponible es: " + auxiliarEntrada[1] + " unidades")
  }
  // actualizarStock(auxiliarEntrada[0], auxiliarEntrada[1], cantidadIngresa);
  let retorno = [auxiliarEntrada[0], auxiliarEntrada[1], cantidadIngresa];
  return retorno;
}

function preguntaSeguirComprando(){
  let i = 1;
  let pregunta = "";
  while (i){
    alert("Quiere adquirir otros productos de nuestra tienda");
    pregunta = prompt("Elija SI o NO").toUpperCase();
    console.log("prenguta while " + pregunta);
    i = 0;
    if (pregunta == ""){
      alert("Debe ingresar una respuesta")
    }
  }
  console.log("prenguta despues del while " + pregunta);
  return pregunta;
}

function repregunta(respuesta, nombProducto, cantIngresa){
  let devolucion = "";
  console.log("mi respuesta es: " + respuesta)
  if (respuesta == 'NO') {
    devolucion = [nombProducto, cantIngresa, true];
    console.log("devolucion " + devolucion);
  } 
  if (respuesta == 'SI'){
    devolucion = [nombProducto, cantIngresa, false];
    console.log("devolucion " + devolucion);
  }
  return devolucion;
}


function primerContacto() {
  // let contador = 1
  productoCompra = prompt(
      "Ingrese que producto quiere comprar: \n - " +
          listaNombreProducto.join("\n - ") +
          "\n - o ESC para salir"
  ).toUpperCase();
  console.log(productoCompra);
  if (productoCompra == "ESC") {
    alert("Gracias por visitarnos lo espereramos pronto");
  }
  return productoCompra;
}


alert(
    "Estos son los producto que vendemos en nuestro sitio: \n - " +
        listaNombreProducto.join("\n - ")
);


//productoCompra = primerContacto()
//console.log(productoCompra);
//comprandoProductos(productoCompra);
// repregunta(auxiliarEntCant);


// alert("Quiere adquirir otros productos de nuestra tienda");
// primerContacto();

// function pagarCursos(costoFinal) {
//     alert("El monto total por los cursos adquiridos es: " + costoFinal);
//     alert("Gracias por adquirir nuestros cursos te esperamos pronto para seguir aprendiendo");
//     console.log(costoFinal);
//     return 0;
// }

// function elijeCurso(entrada) {
//     while (control) {
//         if (entrada == cursoUno.toUpperCase()) {
//             let preCantidadCursoUno = parseInt(
//                 prompt(
//                     "Ingrese la cantidad del cursos de " +
//                         cursoUno +
//                         " quiere adquirir"
//                 )
//             );
//             if (preCantidadCursoUno <= stockCursoUno) {
//                 precioFinalUno = preCantidadCursoUno * precioCursoUno;
//                 stockCursoUno -= preCantidadCursoUno;
//             } else {
//                 alert("No disponemos mas de stock del curso " + cursoUno);
//             }
//         } else if (entrada == cursoDos.toUpperCase()) {
//             let preCantidadCursoDos = parseInt(
//                 prompt(
//                     "Ingrese la cantidad del cursos de " +
//                         cursoDos +
//                         " quiere adquirir"
//                 )
//             );
//             if (preCantidadCursoDos <= stockCursoDos) {
//                 precioFinalDos = preCantidadCursoDos * precioCursoDos;
//                 stockCursoDos -= preCantidadCursoDos;
//             } else {
//                 alert("No disponemos mas de stock del curso " + cursoDos);
//             }
//         } else if (entrada == cursoTres.toUpperCase()) {
//             let preCantidadCursoTres = parseInt(
//                 prompt(
//                     "Ingrese la cantidad del cursos de " +
//                         cursoTres +
//                         " quiere adquirir"
//                 )
//             );
//             if (preCantidadCursoTres <= stockCursoTres) {
//                 precioFinalTres = preCantidadCursoTres * precioCursoTres;
//                 stockCursoTres -= preCantidadCursoTres;
//             } else {
//                 alert("No disponemos mas de stock del curso " + cursoTres);
//             }
//         } else {
//             alert("No tenemos ese Curso disponible en la plataforma");
//             entradaCurso();
//         }

//         for (let i = 1; i == contadorControlFinal; i++) {
//             costoFinal += precioFinalUno + precioFinalDos + precioFinalTres;
//         }

//         entrada = " ";

//         if (entrada == " ") {
//             let denuevo = prompt(
//                 "Quiere elejir mas cursos? \n Elija 'SI' si quiere elejir otro curso. \n Elija 'NO' si no quiere mas cursos"
//             ).toUpperCase();
//             if (denuevo == "SI") {
//                 entradaCurso();
//             } else {
//                 alert("Te redirigimos a nuestra seccion de pago");
//                 control = 0;
//                 pagarCursos(costoFinal);
//             }
//         }
//         contadorControlFinal += 1;
//     }
// }

// function entradaCurso() {
//     entrada = prompt(
//         "Elija si quiere el curso de " +
//             "\n" +
//             cursoUno +
//             "\n" +
//             cursoDos +
//             "\n" +
//             cursoTres +
//             "\n" +
//             " o ESC para salir"
//     ).toUpperCase();
//     if (entrada != "ESC") {
//         elijeCurso(entrada);
//     } else {
//       alert("Gracias por visitarnos lo espereramos pronto");
//     }
// }

// confirm("Buen dia, bienvenido a Coder");

// alert("Con cual curso quieres iniciarte");

// entradaCurso();

function bucleProducto() {
  
  let priProducto = primerContacto();
  console.log("primerProducto "+ priProducto);

  let prodElejido = elijeProducto(priProducto);
  console.log("prodElejido "+ prodElejido);

  let compProducto = comprandoProductos(prodElejido)
  console.log("compProducto "+ compProducto);

  let actStock = actualizarStock (compProducto[0], compProducto[1], compProducto[2]);
  console.log("actStock "+ actStock);

  let respuesta = preguntaSeguirComprando()
  console.log("respuesta  " + respuesta);

  let prodCarrito = Object.values(repregunta(respuesta, prodElejido[0], compProducto[2]));
  console.log("prodCarrito " + prodCarrito);

  let auxResp = [];

  auxResp.push(respuesta);

  let respuestaBucleProducto = auxResp.concat(prodCarrito)
  console.log("respuestaBucleProducto  " + respuestaBucleProducto);
  return respuestaBucleProducto;
}

function pagarProducto(){

  let tipoRespuesta = bucleProducto();
  console.log("tipoRespuesta dentro de pagarProducto " + tipoRespuesta)

  if (tipoRespuesta[3] == true) {
    console.log(tipoRespuesta[3]);
    carritoProductos(tipoRespuesta[1], tipoRespuesta[2], tipoRespuesta[3]);
  }

  while(tipoRespuesta[3] == false){
    console.log("tipoRespuesta dentro del while " + tipoRespuesta[0]);
    let auxResp = bucleProducto();
    let subTotalFinal = carritoProductos(auxResp[1], auxResp[2], auxResp[3]);
    if (auxResp[3] == true){
      console.log(subTotalFinal)
      alert("El total a pagar es: " + subTotalFinal);
      alert("Gracias por su compra");
    }
    tipoRespuesta = auxResp[3];
  }
}

pagarProducto()
