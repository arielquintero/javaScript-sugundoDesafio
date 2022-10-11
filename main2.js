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
let bienvenido = "";
let prodNombre = [];
let prodCantidad = [];
let carrito = [];

const listaProductos = [];

listaProductos.push(new Producto("1", "transistor", "2.75", "100"));
listaProductos.push(new Producto("2", "resistencia", "1.25", "500"));
listaProductos.push(new Producto("3", "capacitor", "1.60", "300"));
listaProductos.push(new Producto("4", "integrado", "4.75", "80"));
listaProductos.push(new Producto("5", "plaqueta", "0.75", "900"));

function controlStock(listaProductos) {
    listaProductoEnStock = listaProductos.filter((prod) => prod.stock > 0);
    listaNombreProducto = listaProductoEnStock.map((prod) => prod.nombre);
}
controlStock(listaProductos);

// console.log(listaNombreProducto)
// console.log(listaProductoEnStock)


function productoNombreCantidad(prod, cant) {
    const item = listaProductoEnStock.find(
        (prod) => prod.nombre === prodNombre
    );
    const itemPrecioFinal =
        prodCantidad * listaProductoEnStock.find((prod) => prod.stock);

    carrito.push(item, itemPrecioFinal);
    // console.log(carrito);
    return carrito;
}

function comprandoProductos(productoElejido) {
    let controlEntrada = productoElejido[0].toUpperCase() + productoElejido.substring(1).toLowerCase();
    let item = listaNombreProducto.indexOf(controlEntrada);
    console.log(item);
    let producto = listaNombreProducto[item];
    console.log(producto);
    let enStock = parseInt(listaProductoEnStock[item].stock);
    console.log(enStock)
    
    while (control) {
        if (producto.includes(controlEntrada)) {
            let cantidadEntrada = parseInt(
                prompt(
                    "Ingrese la cantidad de " +
                        controlEntrada +
                        " quiere adquirir"
                )
            );
            let nuevoStock = enStock - cantidadEntrada;
            if ((cantidadEntrada <= enStock)) {
              listaProductos.map(obj => {
                if(obj.nombre == producto) {
                  obj.stock =  nuevoStock;
                }
                console.log(listaProductos);
              });
              break;
            } else {
                alert("No disponemos mas de stock de " + controlEntrada);
            }

      

            // let prueba = productoNombreCantidad(controlEntrada, enStock);

            // console.log(prueba);
        } else{
          alert("No tenemos ese componente disponible en el sitio");
          primerContacto();
        }

    }
}


function primerContacto() {
    productoCompra = prompt(
        "Ingrese que producto quiere comprar: \n - " +
            listaNombreProducto.join("\n - ") +
            "\n - o ESC para salir"
    ).toUpperCase();
    console.log(productoCompra);
    // console.log(listaNombreProducto.join("\n - "));
    if (productoCompra != 'ESC') {
        comprandoProductos(productoCompra);
    }else {
      alert("Gracias por visitarnos lo espereramos pronto");

    }
}
 
// function agregarCarrito (prodID) {
//   const item = 0
// }

alert(
    "Estos son los producto que vendemos en nuestro sitio: \n - " +
        listaNombreProducto.join("\n - ")
);
console.log(listaNombreProducto.join("\n - "));

primerContacto();

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
