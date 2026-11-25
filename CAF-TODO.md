# SitioPreBmq TODO

## Context y status
- Que es: catalogo movil de 82 ejercicios, clic abre imagen y explicacion
- Fuentes: Pre-BMT 6-Week Advanced Fitness Training Program, FORCE Preparation Guide (PSP CAF)
- Stack: HTML, CSS, JS, Bootstrap 5.3 (CDN), sin backend ni build
- Ubicacion: D:\Asist\SitioPreBmq
- Datos: data/ejercicios.js (window.EXERCISES), imagenes en img/
- Git: pendiente, lo ejecuta el jefe
- Siguiente paso: probar en el telefono y publicar en GitHub Pages

## Instrucciones y precisiones
- Sitio en ingles
- Sin planes de entrenamiento, series ni semanas
- Imagenes: recortes de los PDF, derechos reservados del Gobierno de Canada
- Decision del jefe: imagenes publicadas en GitHub Pages para uso en iPhone, img/ no se ignora
- Rutas relativas, funciona en subdirectorio de GitHub Pages y abriendo index.html local

## Backlog pendiente
- Imagenes Pre-BMT traen boton de play de video, valorar recortarlo
- Opcional PWA para uso sin internet
- Opcional agregar ejercicios nuevos editando data/ejercicios.js

## Paso a paso
1. Abrir index.html en el PC y revisar filtros, busqueda y modal
2. Copiar la carpeta al telefono y probar
3. Crear repositorio en GitHub (usuario)
4. git init, add, commit, push (usuario)
5. Activar GitHub Pages en Settings, Pages, rama main, carpeta root
6. Abrir la URL publicada en el telefono y agregarla a la pantalla de inicio
