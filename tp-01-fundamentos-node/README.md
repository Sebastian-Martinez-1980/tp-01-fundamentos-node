# Trabajo práctico 01
## Descripción
    Se la estructura de un proyecto tomando como ejemeplo infromacion sobre un video juego, referido a los fundamentos de node
## Cómo ejecutar
    Ejecutamos a traves de una nueva terminal poniendo node index.js
## Archivo generado
    ficha-videojuego.txt
## Conceptos

- Qué construye el proyecto.
El proyecto construye dos programas, el primero crea una ficha de un Video Juego, incluyendo constantes del sistema y propias, además de crear una carpeta y un archivo desde el programa en si.

El segundo programa muestra cómo se puede alterar el orden de ejecución de procesos a través de mensajes con console.log() y setTimeOut

- Cómo ejecutar ambos programas.

simplemente se antepone la palabra node antes del nombre del archivo. En el caso de index.js se puede agregar el nombre después del archivo para modificar una variable del proyecto.


- Dónde se genera salida/ficha-videojuego.txt .

Se genera desde index.js, con los comandos mkdirSync y y writeFileSync desde la carpeta raíz.

- Las respuestas, con palabras propias, a estas preguntas:

1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

Javascript es un lenguaje de programación.

Node.js es un runtime, permite cargar y ejecutar javascript fuera del navegador.

V8 es la la parte de node que ejecuta código de javascript

2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?

Porque debe esperar a que termine el código principal.

3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

El I/O o entrada/salida bloqueante, significa que el Hilo principal debe esperar el proceso para seguir con la línea siguiente, en cambio el que no es bloqueante no.

4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js ?

Son módulos nativos, node:path construye rutas y node:fs opera en el disco

Crear también .gitignore :