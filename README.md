# BuscadorDeLibros

Esta aplicación web fue desarrollada utilizando HTML, CSS y JavaScript puro, como parte del proceso formativo del Bootcamp Desarrollo de Aplicaciones Web Full Stack JavaScript Trainee, en el marco del programa especial “Talento Digital para Chile” – Becas Laborales 2024.
El proyecto tiene como objetivo aplicar los conocimientos adquiridos durante el bootcamp, abordando conceptos clave como la manipulación del DOM, el uso de eventos, la estructura semántica en HTML, el estilo y diseño responsivo con CSS, y la interacción con APIs externas utilizando JavaScript.
En este caso, se desarrolló un buscador de libros por autor(a) que permite obtener y visualizar información en tiempo real desde la API de Open Library.

El grupo está compuesto por:
-Alberto Poblete
-Macarena Espinoza
-Francisco Godoy
-Daniel Pallares

Contexto
Una pequeña biblioteca local quiere crear una herramienta en línea para que sus lectores puedan buscar libros por autor. Ustedes fueron contratados para desarrollar la primera versión del prototipo. 
Para esta actividad, simularán el comportamiento usando una API pública (Open Library o un archivo JSON).

Instrucciones:

Divídanse en equipos y repartan responsabilidades:
-Estructura HTML.
-Lógica JavaScript.
-Estilos CSS opcionales.
-Manejo de errores y validaciones.

El proyecto debe incluir:

Un campo de texto donde el usuario pueda ingresar el nombre de un autor.
Un botón con el texto "Buscar libros".
Un contenedor donde se mostrarán los resultados.
En el archivo JavaScript, creen una función buscarLibrosPorAutor() que:
Use fetch junto con async/await para realizar una solicitud a esta API:
https://openlibrary.org/search.json?author=nombre_del_autor
Reemplace nombre_del_autor con el valor ingresado por el usuario.

Procesen la respuesta JSON y:

Iteren sobre los primeros 10 libros obtenidos.
Muestren el título del libro, el año de publicación, y el autor (puede haber varios).
Agreguen un mensaje de "Cargando resultados..." mientras se espera la respuesta.
Manejen los siguientes casos:
Si no se encuentran resultados, mostrar un mensaje adecuado.
Si hay un error de red o respuesta no válida, mostrar un error en pantalla.

Bonus:

Permitir al usuario volver a realizar otra búsqueda sin recargar la página.
Mostrar un contador con el número total de resultados encontrados.

Resultado esperado
Una pequeña aplicación web funcional donde, al buscar por autor, se haga una solicitud AJAX usando fetch, se espere la respuesta con await, y se muestren libros en pantalla dinámicamente.
