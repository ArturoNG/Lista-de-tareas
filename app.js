let boton = document.getElementById("add");
let lista = document.querySelector("ul");
let inputTexto = document.getElementById("texto");

// function saludarConNombre(nombre) {
//     console.log(`Hola, ${nombre}!`);
// }

function addTask() {
    if (inputTexto.value !== "") { // Esto verifica que no está en blanco el input de texto. Si lo está no hace nada.   
        let nuevoItem = document.createElement("li");
        nuevoItem.setAttribute("class", "my-3"); //cambio Como nuevo item crea un li le definimos a él los márgenes
        nuevoItem.textContent = inputTexto.value; // Esto es el valor que hay escrito en el input
        nuevoItem.addEventListener("click", function () {
            console.log(nuevoItem);
            console.log("Borrando tarea: " + nuevoItem.textContent);
            nuevoItem.remove();
        });
        lista.appendChild(nuevoItem);
        addButtonBorrar(nuevoItem);
    }
};


function addButtonBorrar(nuevoItem) {
    let buttonBorrar = document.createElement("button");
    buttonBorrar.textContent = "Borrar";
    buttonBorrar.setAttribute("class", "float-start mx-3 btn btn-primary"); //cambio1
    console.log(buttonBorrar);
    nuevoItem.appendChild(buttonBorrar);
};


boton.addEventListener("click", function () {
    addTask();
});

inputTexto.addEventListener('keypress', function (e) {
    console.log(e.key);
    if (e.key === 'Enter') {
        addTask();
    }
});




// let lista = document.querySelector("ul");
// let nuevoItem = document.createElement("li");
// nuevoItem.textContent = "Elemento nuevo a borrar";
// nuevoItem.setAttribute("data-id", "2");
// nuevoItem.addEventListener("click", function () {
//     alert("Botón clickeado", nuevoItem.getAttribute("data-id"));
//     nuevoItem.remove();
// });
// lista.appendChild(nuevoItem);


