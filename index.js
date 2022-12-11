/* INICIO DE SESION */

// let usuario;
// let usuarioStorage = localStorage.getItem("usuario");

// if(usuarioStorage){
//     usuario = usuarioStorage;
//     alert("Bienvenido nuevamente");
// }else{
//     usuario = prompt("por favor ingresá tu usuario");
//     alert("Bienvenido por primera vez");
//     localStorage.setItem("usuario", usuario)
// }




/* SECCION COLORES FAMOSOS */

class Coloresfamosos{
    constructor(id, retrato, nombre, precio, categoria){
        this.id = id;
        this.retrato = retrato;
        this.nombre = nombre;
        // this.color = color;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let Gallardo = new Coloresfamosos(1, "./img/gallardo.png", "Marcelo Gallardo", 2400, "Deportista");
let Lepes = new Coloresfamosos(2, "./img/lepes.png", "Narda Lepes", 2400, "Chef");
let Johansen = new Coloresfamosos(3, "./img/johansen.png", "Kevin Johansen", 2400, "Músico");
let Suarez = new Coloresfamosos(4, "./img/suarez.png", "China Suarez", 2400, "Actriz");
let Pampita = new Coloresfamosos(5, "./img/pampita.png", "Pampita", 2400, "Modelo");
let Messi = new Coloresfamosos(6, "./img/messi.png", "Lionel Messi", 2400, "Deportista");
let Varsky = new Coloresfamosos(7, "./img/varsky.png", "Juan Pablo Varsky", 2400, "Periodista");
let Castle = new Coloresfamosos(8, "./img/castle.png", "Carlos Castle", 2400, "Youtuber");


const productosFamosos = [];


productosFamosos.push(Gallardo, Lepes, Johansen, Suarez, Pampita, Messi, Varsky, Castle);

let contenedorFamosos = document.getElementById("famosos__contenedor");

// let carrito = [];

/* RENDERIZAR PRODUCTOS */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productosFamosos.forEach(producto => {
    let item = document.createElement("div");
    item.innerHTML = `
        <p>${producto.id}</p>
        <img class="foto_recuadro" src="${producto.retrato}" alt = ""/>
        <h3>${producto.nombre}</h3>
        <button class="boton__productos"></button>
        <p>$${producto.precio}</p>
        <p>${producto.categoria}</p>
        <button id= "boton${producto.id}">Agregar</button>
    `;
    item.className = "div";

    contenedorFamosos.append(item);

    
    let botonFamosos = document.getElementById(`boton${producto.id}`);

    botonFamosos.addEventListener("click", () => agregarAlCarrito(producto.id))
    botonFamosos.addEventListener("click", () => total())

    
});



/* AGREGAR AL CARRITO Y RENDERIZARLO */
const agregarAlCarrito = (id) => {
    const producto = productosFamosos.find((producto) => producto.id === id);
    carrito.push(producto);
    // console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito()

}

let contenedorCarrito = document.getElementById("mostrarcarrito");

const actualizarCarrito = () => {
    let aux = '';
    carrito.forEach(itemCarrito => {
        aux += `
        <h3>AGREGASTE A TU CARRITO</h2>
        <p>${itemCarrito.nombre}</p>
        <img class="foto_recuadro--carrito" src="${itemCarrito.retrato}" alt = ""/>
        <p>$${itemCarrito.precio}</p>
        `

        contenedorCarrito.innerHTML = aux


    });
}

const total = () => {
let totalCarrito = carrito.reduce((acum, item) => acum + item.precio, 0);
let contenedorTotal = document.getElementById("totalcarrito") 
contenedorTotal.append(totalCarrito);
}


actualizarCarrito();
// total();

// VISUALIZADOR DE COLOR

const colorInputVisualizador = document.getElementById("generador__color");
const botonInputVisualizador = document.getElementById("generador__formulario--boton")

colorInputVisualizador.addEventListener("input", () => {
    let colorVisualizador = colorInputVisualizador.value;
    botonInputVisualizador.style.backgroundColor = colorVisualizador;
});



/* GENERADOR DE COLOR */

let formulario = document.getElementById("generador__formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let colorGenerador = colorInputVisualizador.value;
    let inputsGenerador = e.target.children;


    let contenedorFormulario = document.getElementById("generador__formulario--contenedor");

    let itemGenerador = document.createElement("div");
    itemGenerador.innerHTML = `
    <button id="boton10">Hola</button>
    <h3>${inputsGenerador[2].value};
    <p>${inputsGenerador[3].value};
    `;

    contenedorFormulario.append(itemGenerador);
    const botonFinal = document.getElementById("boton10");
    botonFinal.style.backgroundColor = colorGenerador;
});




/* SECCION DE COLORES USUARIOS */


class Colorespersonas{
    constructor(id, retrato, nombre, precio, categoria){
        this.id = id;
        this.retrato = retrato;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let Rodriguez = new Colorespersonas(9, "./img/candelarodriguez.png", "Candela Rodriguez", 1200, "Artista plástica");
let Leon = new Colorespersonas(10, "./img/diegoleon.png", "Diego Leon", 1200, "Diseñador gráfico");
let Marano = new Colorespersonas(11, "./img/rodrigomarano.png", "Rodrigo Marano", 1200, "Programador");
let Amuchastegui = new Colorespersonas(12, "./img/agustinamuchastegui.png", "Agustín Amuchastegui", 1200, "Chef");
let Alegre = new Colorespersonas(13, "./img/camilaalegre.png", "Camila Alegre", 1200, "Psicóloga");
let Tarditti = new Colorespersonas(14, "./img/victoriatarditti.png", "Victoria Tarditti", 1200, "Abogada");
let Elorriaga = new Colorespersonas(15, "./img/bereniceelorriaga.png", "Berenice Elorriaga", 1200, "Recruiter");
let Candelmi = new Colorespersonas(16, "./img/marcocandelmi.png", "Marco Candelmi", 1200, "Médico");
let Bogisich = new Colorespersonas(17, "./img/diegobogisich.png", "Diego Bogisich", 1200, "Futbolista");
let Arredondo = new Colorespersonas(18, "./img/eugeniaarredondo.png", "Eugenia Arredondo", 1200, "Decoradora");


const productosPersonas = [];

productosPersonas.push(Rodriguez, Leon, Marano, Amuchastegui, Alegre, Tarditti, Elorriaga, Candelmi, Bogisich, Arredondo);

let contenedorPersonas = document.getElementById("personas__contenedor");

productosPersonas.forEach(producto => {
    let item = document.createElement("div");
    item.innerHTML = `
    <p>${producto.id}
    <img class="foto_recuadro" src="${producto.retrato}" alt = ""/>
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
    <p>${producto.categoria}</p>
    <button id= "boton${producto.id}">Agregar</button>
    `;
    item.className = "div";
    contenedorPersonas.append(item);

    let botonPersonas = document.getElementById(`boton${producto.id}`);

    botonPersonas.addEventListener("click", () => agregarAlCarritoPersonas(producto.id))    

    // let boton = document.getElementById(`boton${producto.id}`);
    // const ejecutar = (id) => {
    //     console.log(id);
    // }
    // boton.addEventListener("click", () => ejecutar(producto.id))
});



/* AGREGAR AL CARRITO Y RENDERIZARLO */
const agregarAlCarritoPersonas = (id) => {
    const producto = productosPersonas.find((producto) => producto.id === id);
    carrito.push(producto);
    // console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    let divCarrito = document.createElement("div");
    carrito.forEach(itemCarrito => {
        divCarrito.innerHTML = ""
        divCarrito.innerHTML = `
        <p>${itemCarrito.nombre}</p>
        <img class="foto_recuadro--carrito" src="${itemCarrito.retrato}" alt = ""/>
        <p>$${itemCarrito.precio}</p>
        `
    let contenedorCarrito = document.getElementById("mostrarcarrito");
    
    contenedorCarrito.append(divCarrito)

    });
}


/* BOTON CARRITO */

// let botonCarritoMostrar = document.getElementsByClassName("btn btn-outline-success");
// botonCarritoMostrar.addEventListener("click", () => console.log("click")); 

// let botonCarrito = document.getElementsByClassName("btn btn-outline-success");

// botonCarrito.addEventListener("click", () => {
//     let divBotonCarrito = document.createElement("div");
//     divBotonCarrito.innerHTML = "Hola a todos";
//     let contenedorBotonCarrito = document.getElementById("botonmostrarcarrito");
//     contenedorBotonCarrito.append(divBotonCarrito);
// })




/* TOTAL CARRITO */



