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
    constructor(id, retrato, nombre, colorElegido, precio, categoria){
        this.id = id;
        this.retrato = retrato;
        this.nombre = nombre;
        this.color = colorElegido;
        this.precio = precio;
        this.categoria = categoria;
    }
}

let Gallardo = new Coloresfamosos(1, "./img/gallardo.png", "Marcelo Gallardo", "./img/colorGallardo.png", 2400, "Deportista");
let Lepes = new Coloresfamosos(2, "./img/lepes.png", "Narda Lepes", "./img/colorLepes.png", 2400, "Chef");
let Johansen = new Coloresfamosos(3, "./img/johansen.png", "Kevin Johansen", "./img/colorJohansen.png", 2400, "Músico");
let Suarez = new Coloresfamosos(4, "./img/suarez.png", "China Suarez", "./img/colorChina.png", 2400, "Actriz");
let Pampita = new Coloresfamosos(5, "./img/pampita.png", "Pampita", "./img/colorPampita.png", 2400, "Modelo");
let Messi = new Coloresfamosos(6, "./img/messi.png", "Lionel Messi", "./img/colorMessi.png", 2400, "Deportista");
let Varsky = new Coloresfamosos(7, "./img/varsky.png", "Juan Pablo Varsky", "./img/colorVarsky.png", 2400, "Periodista");
let Castle = new Coloresfamosos(8, "./img/castle.png", "Carlos Castle", "./img/colorCastle.png", 2400, "Youtuber");


const productosFamosos = [];


productosFamosos.push(Gallardo, Lepes, Johansen, Suarez, Pampita, Messi, Varsky, Castle);

let contenedorFamosos = document.getElementById("famosos__contenedor");





/* RENDERIZAR PRODUCTOS */

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

productosFamosos.forEach(producto => {
    let item = document.createElement("div");
    item.innerHTML = `
        <img class="foto_recuadro" src="${producto.retrato}" alt = ""/>
        <h3>${producto.nombre}</h3>
        <img class="color_famoso" src="${producto.color}" alt = ""/>
        <p>$${producto.precio}</p>
        <p>${producto.categoria}</p>
        <button id= "boton${producto.id}">Agregar</button>
    `;
    item.className = "div";

    contenedorFamosos.append(item);

    
    let botonFamosos = document.getElementById(`boton${producto.id}`);

    botonFamosos.addEventListener("click", () => agregarAlCarrito(producto.id));
    botonFamosos.addEventListener("click", () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Se añadió el producto a tu carrito",
            showConfirmButton: true,
            timer: 2500,
        });
        
    });

    botonFamosos.addEventListener("click", () => total());
    // botonFamosos.addEventListener("click", () => vaciarCarrito());
           
    
});



/* AGREGAR AL CARRITO Y RENDERIZARLO */
const agregarAlCarrito = (id) => {
    const producto = productosFamosos.find((producto) => producto.id === id);
    carrito.push(producto);
    // console.log(carrito);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
    
}

let contenedorCarrito = document.getElementById("mostrarcarrito");

const actualizarCarrito = () => {
    let aux = '';
    carrito.forEach(itemCarrito => {
        aux += `
        <h4>AGREGASTE A TU CARRITO</h4>
        <img class="foto_recuadro--carrito" src="${itemCarrito.retrato}" alt = ""/>
        <p>${itemCarrito.nombre}</p>
        <img class="color_famoso--carrito" src="${itemCarrito.color}" alt = ""/>
        <p>$${itemCarrito.precio}</p>
        `
    });

        contenedorCarrito.innerHTML = aux
        carrito.length > 0 ? botonVaciarCarrito.className = "boton__carrito--mostrar" :  botonVaciarCarrito.className = "boton__carrito--ocultar";
        total()

}

/* VACIAR CARRITO */
   
    let botonVaciarCarrito = document.getElementById("vaciarcarrito__boton");
    botonVaciarCarrito.addEventListener("click", () => {
        
        Swal.fire({
            title: "¿Estás seguro que deseas vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, estoy seguro",
            cancelButtonText: "No, no quiero",
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                carrito.splice(0, carrito.length);
                actualizarCarrito()
            Swal.fire({
                title: "Carrito eliminado!",
                icon: "success",
                text: "El carrito ha sido borrado",
            });
        }
        });
    });






/* TOTAL CARRITO */
const total = () => {
    let totalCarrito = carrito.reduce((acum, item) => acum + item.precio, 0);
    let contenedorTotal = document.getElementById("totalcarrito") 
    contenedorTotal.innerHTML = totalCarrito;
    }

total();




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
    <button id="boton10">MI COLOR</button>
    <h3>${inputsGenerador[2].value}
    <p>${inputsGenerador[3].value}
    <p>${inputsGenerador[4].value}
    `;

    contenedorFormulario.append(itemGenerador);
    const botonFinal = document.getElementById("boton10");
    botonFinal.style.backgroundColor = colorGenerador;
});


/* SECCION DE COLORES USUARIOS */

let listadoPersonas = document.getElementById("personas__contenedor");

fetch("./data.json")
.then((response) => response.json())
.then((data) => {
    data.forEach((productoJson) => {
        const divJson = document.createElement("div");
        divJson.innerHTML = `
            <img class="foto_recuadro" src="${productoJson.foto}" alt = ""/>
            <h2>${productoJson.nombre}</h2>
            <img class="foto_recuadro" src="${productoJson.color}" alt = ""/>
            <p>${productoJson.ocupacion}</p>
            <p>${productoJson.ciudad}</p>

        `;
        divJson.className = "div";
        listadoPersonas.append(divJson);
    });
});





// class Colorespersonas{
//     constructor(id, retrato, nombre, categoria, ciudad){
//         this.id = id;
//         this.retrato = retrato;
//         this.nombre = nombre;
//         this.categoria = categoria;
//         this.ciudad = ciudad;
//     }
// }

// let Rodriguez = new Colorespersonas(9, "./img/candelarodriguez.png", "Candela Rodriguez", "Artista plástica", "Buenos Aires");
// let Leon = new Colorespersonas(10, "./img/diegoleon.png", "Diego Leon", "Diseñador gráfico", "Buenos Aires");
// let Marano = new Colorespersonas(11, "./img/rodrigomarano.png", "Rodrigo Marano", "Programador", "Buenos Aires");
// let Amuchastegui = new Colorespersonas(12, "./img/agustinamuchastegui.png", "Agustín Amuchastegui", "Chef", "Buenos Aires");
// let Alegre = new Colorespersonas(13, "./img/camilaalegre.png", "Camila Alegre", "Psicóloga", "Buenos Aires");
// let Tarditti = new Colorespersonas(14, "./img/victoriatarditti.png", "Victoria Tarditti", "Abogada", "Buenos Aires");
// let Elorriaga = new Colorespersonas(15, "./img/bereniceelorriaga.png", "Berenice Elorriaga", "Recruiter", "Buenos Aires");
// let Candelmi = new Colorespersonas(16, "./img/marcocandelmi.png", "Marco Candelmi", "Médico", "Buenos Aires");
// let Bogisich = new Colorespersonas(17, "./img/diegobogisich.png", "Diego Bogisich", "Futbolista", "Buenos Aires");
// let Arredondo = new Colorespersonas(18, "./img/eugeniaarredondo.png", "Eugenia Arredondo", "Decoradora", "Buenos Aires");


// const productosPersonas = [];

// productosPersonas.push(Rodriguez, Leon, Marano, Amuchastegui, Alegre, Tarditti, Elorriaga, Candelmi, Bogisich, Arredondo);

// let contenedorPersonas = document.getElementById("personas__contenedor");

// productosPersonas.forEach(producto => {
//     let item = document.createElement("div");
//     item.innerHTML = `
//     <p>${producto.id}
//     <img class="foto_recuadro" src="${producto.retrato}" alt = ""/>
//     <h3>${producto.nombre}</h3>
//     <p>${producto.categoria}</p>
//     <p>${producto.ciudad}</p>
//     `;
//     item.className = "div";
//     contenedorPersonas.append(item);


// });