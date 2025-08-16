const seccionLibros = document.getElementById("contenedorLibros")
const nombreAutor = document.getElementById("nombreAutor")
const btnBuscar = document.getElementById("botonBuscar")
const conteoLibros = document.getElementById("librosTotales")

let listadoLibrosPorAutor = [];
let librosMostrar = [];
let totalLibrosEncontrados = 0;
async function buscarLibrosPorAutor(autor) {
    try {
        let queryString = "https://openlibrary.org/search.json?author=" + autor
        const res = await fetch(queryString)
        listadoLibrosPorAutor = await res.json()
    } catch (error) {
        console.error("Error al cargar listado de libros por autor", error)
    }
}

function mostrarLibros(libros) {
    libros.forEach((libro) => {
        seccionLibros.innerHTML += `
    <div class="col col-cards">
        <div class="card h-100 mb-3" style="width: 100%;">
        <img src="https://covers.openlibrary.org/b/id/${libro.cover_i}-M.jpg" class="card-img-top text-center portada-libro" alt="Portada del libro">
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><strong>Autor(es)</strong>: ${libro.author_name?.join(", ") || "Desconocido"}</li>
            <li class="list-group-item"><strong>Título</strong>: ${libro.title || "Sin título"}</li>
            <li class="list-group-item"><strong>Año de Publicación</strong>: ${libro.first_publish_year || "N/A"}</li>
        </ul>
        </div>
    </div>
    `
    });
    conteoLibros.innerHTML += `<p><h4 class="mb-5">Total de libros encontrados en la base de datos para el autor "${nombreAutor.value}" es: ${totalLibrosEncontrados}</h4></p>`
}

btnBuscar.addEventListener("click", () => {
    const nombre = nombreAutor.value.trim()
    if (!nombre) {
        alert("Por favor escribe un nombre")
        return;
    }
    buscarLibrosPorAutor(nombre)
        .then(() => {
                seccionLibros.innerHTML = ""
                conteoLibros.innerHTML = ""
            if (listadoLibrosPorAutor["docs"].length > 0) {
                totalLibrosEncontrados = listadoLibrosPorAutor["numFound"]
                librosMostrar = listadoLibrosPorAutor["docs"].slice(0, 12)
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