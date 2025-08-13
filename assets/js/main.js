const seccionLibros = document.getElementById("contenedorLibros")
const nombreAutor = document.getElementById("nombreAutor")
const btnBuscar = document.getElementById("botonBuscar")

let listadoLibrosPorAutor = [];
let librosMostrar = [];
async function buscarLibros(autor) {
    try {
        let queryString = "https://openlibrary.org/search.json?author=" + autor
        const res = await fetch(queryString)
        listadoLibrosPorAutor = await res.json()
        // return listadoLibrosPorAutor["docs"].slice(0,10)
    } catch (error) {
        console.error("Error al cargar listado de libros por autor", error)
    }
}

function mostrarLibros(libros) {
    libros.forEach((libro) => {
        seccionLibros.innerHTML += `<div class="card mb-3" style="width: 25rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="autor">Autor(es): ${libro.author_name}</li>
                <li class="list-group-item" id="titulo">Título: ${libro.title}</li>
                <li class="list-group-item" id="anio">Año de Publicación: ${libro.first_publish_year}</li>
            </ul>
        </div>`
    });
}

btnBuscar.addEventListener("click", () => {
    seccionLibros.innerHTML = ""
    const nombre = nombreAutor.value.trim()
    if (!nombre) {
        alert("Por favor escribe un nombre")
        return;
    }
    buscarLibros(nombre)
    .then(() => {
        if (listadoLibrosPorAutor["docs"].length > 0) {
            librosMostrar = listadoLibrosPorAutor["docs"].slice(0,10)
            if (librosMostrar) {
                mostrarLibros(librosMostrar)
            } else {
               seccionLibros.innerHTML = `<p class="text-center my-5 text-warning">No se encontraron libros para el autor ${nombre} en nuesta base de datos. Intenta nuevamente...</p>`
            }
        } else {
            seccionLibros.innerHTML = `<p class="text-center my-5 text-warning">No se encontraron libros para el autor ${nombre} en nuesta base de datos. Intenta nuevamente...</p>`
        }
    })
    .catch(error => seccionLibros.innerHTML = `<p class="text-center my-5 text-warning">Error en la búsqueda por autor ${nombre}: ${error}</p>`)
})