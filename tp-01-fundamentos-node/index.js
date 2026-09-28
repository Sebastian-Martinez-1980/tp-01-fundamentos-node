const fs = require("node:fs");
const path = require("node:path");

const nombreAlumno = process.argv[2] ?? "Isauro Sebastian Martinez";
console.log(`alumno: ${nombreAlumno}`);
console.log(`versión: ${process.version} plataforma: ${process.platform}`);

const videojuego = {
  titulo: "Street Fighter II",
  estudio: "Capcom",
  anio: 1991,
  plataformas: ["PC", "Sega", "Play Station", "Nintendo", "Xbox"],
  multijugador: true,
};

const plataformasComoTexto = videojuego.plataformas.join(", ");
const jugabilidad = videojuego.multijugador ? "Si" : "No";

const ficha = `FICHA DE VIDEOJUEGO

=================
Estudiante: ${nombreAlumno}
Node.js: ${process.version}
Plataforma: ${process.platform}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.anio}
Plataformas: ${plataformasComoTexto}
¿Es Multijugador?: ${jugabilidad}
;`

const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);