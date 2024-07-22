

let productos = [];
let contador = 1;
let botonAgregar = document.getElementById("boton-add"); 
let productosLista = document.getElementById("productos-list"); 

let addProduct = () => {
    let productText = prompt("Ingresa el producto");
    let productStock = Number(prompt("Ingresa la cantidad de productos en stock"));
    let producto = { id: contador, text: productText, stock: productStock};
    productos.push(producto);

    contador++;

    pintarTarjetas();
};

botonAgregar.addEventListener("click", addProduct);

const deleteTodo = (elemento) => {
    productos = productos.filter((producto) => producto.id !== elemento.id); 
    pintarTarjetas();
};

const pintarTarjetas = () => {
    productosLista.innerHTML = "";

    productos.forEach((elemento) => {
    let item = document.createElement("li");
    item.className = "card";
    
    item.innerHTML = `<span>${elemento.text}, ${elemento.stock}, ${elemento.id};</span> 
        <button class="delete-button">Borrar</button>`;
    let deleteButton = item.querySelector(".delete-button");

    deleteButton.addEventListener("click", () => {
        deleteTodo(elemento);
    });

    productosLista.appendChild(item);
    });
};

// const confirmBoton = () => {
//     let divBoton = document.getElementById("container-boton");
//     let button1 = document.createElement("button");
//     button1.className = "confirm-button";
//     divBoton.append(button1);
// };
let divBoton = document.getElementById("container-boton");

const confirmBoton = () => {
    if (divBoton) {
        let button1 = document.createElement("button");
        button1.className = "confirm-button";
        button1.textContent = "Confirmar";
        divBoton.append(button1);
    } else {
        console.error("No se encontró ningún elemento con el id 'container-boton'");
    }
};

const alerta = () => {
    alert("Productos agregados con exito!");
}

divBoton.addEventListener("click", alerta);

confirmBoton();
pintarTarjetas();
