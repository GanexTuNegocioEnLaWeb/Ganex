---
title: 'Megaloblastos'
description: 'Megaloblastos mostró liderazgo con su sitio web para estudiantes de medicina.'
pubDate: 'Sep 1 2024'
updatedDate: 'Sep 23 2024'
heroImage: '/proyectos/megaloblastos.png'
author: 'Ganex'
tags: ['medicina', 'centro interno']
---

# Transformando las Elecciones Estudiantiles en Gestión Eficiente
###### Objetivo: Facilitar el acceso al material de estudio para los estudiantes de medicina.
El proyecto **Megaloblastos** surgió como una iniciativa de un grupo de estudiantes que competían para dirigir el centro interno de la facultad de medicina. A diferencia de sus rivales, que se enfocaban en promesas de campaña tradicionales, Megaloblastos decidió adelantarse con hechos. Ellos no dijeron: "*Vamos a hacer un sitio web para la carrera*", sino que fueron más allá con: "*Vamos a mejorar el sitio web que ya hicimos para ustedes*".

Este enfoque práctico y decidido resonó mucho en Ganex, y nos entusiasmó formar parte de una idea que beneficiaría directamente a los estudiantes, desde los recién ingresados hasta aquellos que aún estaban postulando a la carrera. Un portal que proporcionara material de apoyo accesible era justo lo que los estudiantes necesitaban.

A pocas semanas de las elecciones, comenzamos el desarrollo del sitio web, conscientes de que no solo se trataba de cumplir con un plazo apretado, sino de construir una herramienta que realmente marcara la diferencia.

#### El Problema Inicial: La Complejidad del Plan de Estudios
Al empezar, teníamos un gran desafío: entender cómo funcionaban los cursos de la carrera, desde la estructura de los semestres hasta las asignaturas impartidas por los docentes. Parecía sencillo. La idea inicial era organizar el sitio en base a semestres, pero pronto descubrimos que el plan de estudios no era tan lineal como pensábamos.

Algunas materias se cursaban semestralmente, otras anualmente, y los docentes dividían sus exámenes en varios parciales. Lo que pensábamos que sería un flujo sencillo de navegación terminó siendo un verdadero rompecabezas. Aquí es donde decidimos cambiar de estrategia.

#### Solución Creativa: Rediseñando la Navegación del Sitio
El primer enfoque que planteamos consistía en una navegación basada en semestres, donde los estudiantes podrían seleccionar su semestre, materia, docente y luego acceder al material de apoyo. Pero pronto descubrimos que había demasiadas excepciones: materias que se cursaban en varios años, exámenes parciales que no se aplicaban a todas las asignaturas, y diferentes modalidades de evaluación.

Este fue el punto en el que adoptamos una solución más flexible y eficiente:
- En lugar de organizar todo por semestres, **rediseñamos el flujo de navegación por años**.
- Dentro de cada año, agrupamos las materias y permitimos que el usuario navegara por docente y por parcial (si aplicaba).
- Creamos una **condición especial** para las materias cuyo examen no era por parciales, saltando la selección de estos y mostrando directamente el material de apoyo.

Este cambio fue crucial, ya que evitaba que los estudiantes tuvieran que recorrer rutas innecesarias. Simplificamos el proceso para que se ajustara a la estructura real de la carrera.

#### Optimizando la Base de Datos: Menos es Más
Una vez que tuvimos claro cómo organizar el contenido, nos enfrentamos a otro reto: cómo estructurar la base de datos. Teniendo en cuenta que los datos de los docentes y las materias no cambiaban con frecuencia, decidimos optimizar las consultas.

**Problema:** "¿Cómo podemos manejar esta gran cantidad de datos de manera eficiente sin crear una base de datos extremadamente compleja?"

En lugar de crear múltiples tablas y relaciones (una opción que hubiera incrementado el número de consultas a la base de datos), optamos por una sola tabla para el material de apoyo. Esta tabla almacenaba la información esencial de cada recurso: año, materia, docente, parcial y tipo de material.

**TABLA MATERIAL DE APOYO**

| id | año | materia | docente | parcial | url | tipo |
| -- | --- | ------- | ------- | ------- | --- | ---- |
| 1  | 1   | Anatomía | Dr. Pérez | Primer parcial | url1 | Banco de preguntas  |
| 2  | 1   | Anatomía | Dr. Pérez | Segundo parcial | url2 | Material de apoyo  |

<br />

Con esta estructura, una sola consulta a la base de datos era suficiente para obtener todo lo necesario. Esto permitió que el sitio cargara rápidamente y evitó la necesidad de relaciones complejas que hubieran ralentizado el sistema.

#### La Autenticación de Usuarios: Un Paso Extra para la Seguridad
Cuando llegó el momento de crear el área de administración del sitio, donde el equipo de Megaloblastos podría gestionar los materiales, enfrentamos la decisión de cómo implementar la autenticación de usuarios. Servicios como Google o Facebook ofrecen soluciones sencillas, pero decidimos no utilizarlas. ¿Por qué?

**Solución Creativa: Seguridad a Medida**
La razón principal fue mantener el control total sobre la seguridad y los datos del sistema. Al implementar nuestra propia solución de autenticación, pudimos asegurarnos de que cumplía con los requisitos específicos de la facultad y el equipo de Megaloblastos. Además, esto nos permitió personalizar las funcionalidades de acceso, como permisos para añadir o editar materiales.
 
#### El Desafío de la Experiencia de Usuario: Navegación Profunda
Si bien habíamos logrado estructurar el sitio de manera eficiente, había un último problema: la profundidad de la navegación. Para encontrar un material específico, los estudiantes tenían que hacer clic en varias capas de menús, lo que podía ser frustrante.

**Solución Creativa: Buscador con Sugerencias**
Para mejorar la experiencia de usuario, implementamos un buscador con sugerencias dinámicas. Este buscador permitía a los estudiantes escribir el nombre de una materia o docente y recibir sugerencias en tiempo real, reduciendo la cantidad de clics y pasos necesarios para acceder al material de apoyo.

Con esta funcionalidad, los usuarios podían encontrar lo que buscaban de manera rápida y directa, haciendo el sitio mucho más amigable.

#### Conclusión: Más que una Promesa
El proyecto **Megaloblastos** no solo fue un éxito técnico, sino también una prueba de que la gestión eficiente y la innovación son posibles incluso antes de asumir un cargo. Al lanzar el sitio web antes de las elecciones, el equipo de Megaloblastos demostró que estaban comprometidos con el bienestar de sus compañeros, ofreciendo soluciones reales y tangibles.

Actualmente, seguimos trabajando con ellos, asegurando la estabilidad y seguridad del sitio, y preparándonos para futuras actualizaciones que publicaremos muy pronto.

<a href="https://megaloblastos.com/" target="_blank">Ver Resultado (Sitio Web de Megaloblastos)</a>