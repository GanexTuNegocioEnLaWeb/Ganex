---
title: 'Imprenta Karins'
description: 'Si no estás en la web, no existes. Descubre cómo ayudamos a Imprenta Karins.'
pubDate: 'Oct 1 2024'
updatedDate: 'Oct 4 2024'
heroImage: '/proyectos/imprentakarins/imprentakarins.png'
author: 'Ganex'
tags: ['imprenta', 'impresiones']
---

# Mejorando la Presencia en Internet
###### Objetivo: ¿Dónde está mi imprenta en Internet?
El proyecto “Imprenta Karins” nació con un único propósito: hacer que la imprenta fuera más visible en el vasto océano de Internet. En un mundo donde todo se encuentra a un clic de distancia, la misión era clara: facilitar que los clientes encontraran la imprenta, entendieran dónde estaba y, lo más importante, ¡que pudieran solicitar cotizaciones sin sentirse en un laberinto! Además, queríamos que sus productos y servicios brillaran con luz propia, como si fueran las estrellas de una gala.

**Paso 1**: Categorizar la misión:
Empezamos a organizar la tarea como si estuviéramos en una reunión de superhéroes, cada uno con su misión:

1. **Mejorar mi presencia en Internet:**
   1. **Diseño UX:** Asegurarnos de que los usuarios no se pierdan en el proceso, como en una película de horror donde siempre hay un personaje que se va solo a investigar ruidos extraños.
   2. **Diseño UI:** Hacer que todo se vea tan bien que los usuarios piensen: “¡Wow! ¡Este lugar se ve mejor que mi casa!”
2. **Mostrar mis productos:** Solicitar su catálogo de productos (esperábamos algo más que un post-it con nombres, pero un héroe siempre está preparado para cualquier desafío).
3. **Obtener mensajes de cotización vía WhatsApp:** Un mensaje directo a su WhatsApp, porque, seamos honestos, hoy en día todos preferimos enviar mensajes en lugar de hacer una llamada. ¡Eso es un hecho!

Después de recibir su “catálogo de productos” (que era como recibir un menú sin fotos ni descripciones), nos pusimos manos a la obra.

#### El Diseño: Damas y caballeros, ¡aquí viene la creatividad!
Al abrir el catálogo, nos encontramos con que solo teníamos los nombres de los productos. Y la pregunta del millón: ¿Y qué tiene? Sin imágenes ni descripciones, ¡la búsqueda de productos parecía un juego de adivinanzas!

Nos dimos cuenta de que un simple listado de nombres no iba a funcionar, así que hicimos un diseño preliminar que mostraba el nombre del producto de manera sencilla. Pero claro, sin imágenes o información adicional, se veía muy básico.

**Problema:** ¿Cómo hacemos que cada producto sea fácil de encontrar sin hacer interminables scrolls?

Fue en ese momento que nos vino la idea del **buscador**. Crear una barra de búsqueda permitiría a los usuarios encontrar lo que necesitaban sin perderse entre los cientos de productos de la imprenta.

Aunque pensábamos en una base de datos para gestionar todos los productos, nos dimos cuenta de que el presupuesto no alcanzaba. Así que nos pusimos creativos: guardamos todos los productos en un array de objetos, algo así como:

``` javascript
export const productos = [
   {
      nombre: "banners",
   },
   {
      // Otro producto...
   },
   // Y así con más de 200 productos
];
```

#### La Búsqueda: ¡Aquí es donde la magia sucede!
Creamos un buscador que mostraba productos al escribir. Pero... ¿qué pasaba si el cliente escribía “bannnerss” en lugar de “banners”? ¡No había resultados! Implementamos el **algoritmo de Levenshtein**, que básicamente compara cadenas y encuentra las similitudes (es como cuando tu amigo adivina lo que intentabas decir, aunque hayas escrito mal la palabra).

Sin embargo, esto no era suficiente. Si un cliente buscaba “lona” en vez de “banners”, la búsqueda no devolvía ningún resultado. Necesitábamos añadir sinónimos a los productos, y así lo hicimos:

``` javascript
export const productos = [
   {
      nombre: "banners",
      sinónimos: ["lona", "gigantografía", "cartel", "pancarta", "publicidad exterior", "anuncio", "valla"],
   },
   {
      // Otro producto...
   },
   // Y así con más de 200 productos
];
```

Con esto, logramos que al escribir “lona” o “gigantografía”, la búsqueda devolviera resultados adecuados. ¡Problema resuelto!

**Siguiente desafío:** Los usuarios muchas veces no saben qué están buscando. Así que, para mejorar su experiencia, agregamos un sistema de sugerencias automáticas en el buscador, para que mientras escribían, les aparecieran opciones relevantes. **¡Un toque más de magia UX!**

#### WhatsApp: La cereza en el pastel

Con el diseño casi listo, necesitábamos crear un formulario para que los clientes pudieran solicitar cotizaciones personalizadas directamente desde el sitio web. Y así lo hicimos. Diseñamos un formulario que permitiera enviar las solicitudes de manera simple y rápida.

Pero... nos enfrentamos a una última pregunta: ¿cómo mostrar dinámicamente el presupuesto mínimo de cada producto? Fácil. ¡Editando nuestro array de productos!

``` javascript
export const productos = [
   {
      nombre: "banners",
      minimoPresupuesto: 50,
      sinónimos: ["lona", "gigantografía", "cartel", "pancarta", "publicidad exterior", "anuncio", "valla"],
   },
   {
      // Otro producto...
   },
   // Y así con más de 200 productos
];
```

Una vez todo estaba configurado, buscamos la manera de que, con un solo clic, los clientes pudieran enviar su solicitud de cotización directamente a WhatsApp de Imprenta Karins. Aunque consideramos usar Twilio (un servicio que permite enviar mensajes automatizados), el presupuesto no lo permitía, así que usamos la API pública de WhatsApp. Con una pequeña modificación en la URL, logramos personalizar los mensajes y hacer todo mucho más dinámico. ¡Victoria!

#### Conclusión: Misión cumplida
Después de superar una serie de desafíos con humor y creatividad, conseguimos que Imprenta Karins no solo mejorara su presencia en Internet, sino que también ofreciera una experiencia de usuario mucho más intuitiva y efectiva. Ahora los clientes pueden encontrar productos fácilmente, pedir cotizaciones y contactar a la imprenta en un solo clic.

**Reflexión final:** Si algo hemos aprendido de este proyecto es que, aunque el camino pueda estar lleno de obstáculos, con un poco de imaginación y muchas líneas de código, todo es posible. ¡Y quién diría que el mundo de la imprenta podía ser tan entretenido!

<a href="https://imprentakarins.com/" target="_blank">Ver Resultado (Sitio Web de Imprenta Karins)</a>