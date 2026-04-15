ESPECIFICACIONES DEL SISTEMA
Nombre del proyecto: Aplicación del Clima Asistida por IA
Versión: 1.0
Autor: Luis Enrique Escamilla Lucero

INTRODUCCIÓN
Este documento describe las especificaciones del sistema para una aplicación web del clima desarrollada con HTML, CSS y JavaScript. La aplicación permite al usuario consultar el clima actual de una o varias ciudades mediante el uso de la API de Geocodificación y la API de Pronóstico del Clima de Open-Meteo.
El propósito de este documento es explicar de manera clara qué hace la aplicación, cuáles son sus funciones principales, cómo fue construida, qué tecnologías utiliza, cómo se empleó la inteligencia artificial durante el desarrollo y cuáles fueron los principales aprendizajes y desafíos del proyecto.
OBJETIVO DEL SISTEMA
El objetivo de la aplicación es permitir que un usuario ingrese el nombre de una ciudad y obtenga información meteorológica actual de forma clara, rápida y amigable. Además, la aplicación debe manejar errores adecuadamente y ofrecer al menos una funcionalidad avanzada, en este caso la consulta del clima para múltiples ciudades.

ALCANCE
La aplicación está diseñada para:
•	Recibir la entrada del usuario mediante una barra de búsqueda. 
•	Enviar solicitudes HTTP a una API meteorológica real. 
•	Obtener las coordenadas de la ciudad mediante la API de geocodificación. 
•	Consultar el clima actual con base en la latitud y longitud obtenidas. 
•	Mostrar la información del clima en pantalla. 
•	Permitir la consulta de varias ciudades. 
•	Mostrar mensajes de error cuando la ciudad no exista o cuando ocurra un fallo en la consulta. 

DESCRIPCIÓN GENERAL DE LA APLICACIÓN
La aplicación del clima permite a los usuarios consultar el clima actual de cualquier ciudad que ingresen. Cuando el usuario escribe el nombre de una ciudad y presiona el botón “Obtener clima”, la aplicación primero utiliza la API de Geocodificación de Open-Meteo para encontrar la latitud y longitud correspondientes a esa ciudad. Después, usa esas coordenadas para hacer una segunda solicitud a la API de Pronóstico del Clima de Open-Meteo y recuperar información meteorológica actual.
La información mostrada al usuario incluye temperatura, velocidad del viento, humedad y una descripción breve del estado del clima. La aplicación también soporta la consulta de múltiples ciudades, separadas por comas, y presenta los resultados en tarjetas organizadas para facilitar la lectura.

FUNCIONALIDADES PRINCIPALES
La aplicación incluye las siguientes funciones principales:
•	Una barra de búsqueda para ingresar el nombre de una o varias ciudades. 
•	Un botón para obtener la información del clima. 
•	Consulta de datos meteorológicos en tiempo real usando Open-Meteo. 
•	Visualización de la temperatura en grados Celsius. 
•	Visualización de la velocidad del viento. 
•	Visualización de la humedad. 
•	Resumen de las condiciones climáticas, por ejemplo: Despejado, Nublado o Lluvia ligera. 
•	Soporte para consultar varias ciudades al mismo tiempo. 
•	Manejo de errores cuando no se encuentra la ciudad o cuando falla la API. 
•	Interfaz amigable y organizada para mostrar resultados. 

TECNOLOGÍAS UTILIZADAS
El sistema fue desarrollado con las siguientes tecnologías:
•	HTML para la estructura de la aplicación. 
•	CSS para el diseño visual y la presentación. 
•	JavaScript para la lógica del sistema y la interacción con las APIs. 
•	API de Geocodificación de Open-Meteo para obtener coordenadas. 
•	API de Pronóstico del Clima de Open-Meteo para obtener información meteorológica. 

ARQUITECTURA GENERAL DEL SISTEMA 
La aplicación sigue un flujo sencillo de cliente web:
1.	El usuario escribe una ciudad. 
2.	JavaScript captura el valor ingresado. 
3.	El sistema realiza una solicitud HTTP a la API de geocodificación. 
4.	La API devuelve la latitud y longitud. 
5.	El sistema usa esas coordenadas para hacer una segunda solicitud a la API de clima. 
6.	La API devuelve los datos meteorológicos actuales. 
7.	La aplicación procesa la respuesta y la muestra en pantalla.
   
MANEJO DE ERRORES
La aplicación contempla los siguientes escenarios de error:
•	Entrada vacía: si el usuario no escribe ninguna ciudad, se muestra un mensaje indicando que debe ingresar una ciudad válida. 
•	Ciudad no encontrada: si la API de geocodificación no encuentra resultados, la aplicación informa que la ciudad no pudo localizarse. 
•	Error de red: si ocurre un problema con la conexión, se muestra un mensaje para intentar nuevamente más tarde. 
•	Respuesta inválida: si la API devuelve datos incompletos o inesperados, la aplicación evita mostrar información incorrecta y genera una notificación clara. 

DESCRIPCIÓN DE LO QUE HACE LA APLICACIÓN
La aplicación recibe el nombre de una o varias ciudades, obtiene sus coordenadas usando una API de geocodificación y después consulta el clima actual mediante una API meteorológica. Finalmente, presenta los resultados de forma clara y organizada para que el usuario pueda entenderlos fácilmente.
CARACTERÍSTICAS DE LA APLICACIÓN
Las características principales de la aplicación son:
•	Consulta de clima en tiempo real. 
•	Soporte para múltiples ciudades. 
•	Interfaz simple y fácil de usar. 
•	Visualización clara de temperatura, humedad y viento. 
•	Manejo de errores. 
•	Integración con APIs externas. 
•	Presentación amigable de la información.

CÓMO SE USÓ LA IA DURANTE EL PROYECTO
La inteligencia artificial se utilizó como apoyo durante el desarrollo de la aplicación. Ayudó a organizar la lógica general del proyecto, especialmente para dividir el proceso en pasos claros: primero obtener la ubicación de la ciudad y después consultar los datos meteorológicos.
La IA también fue útil para:
•	Proponer una estructura inicial del código. 
•	Sugerir mejoras en la organización de funciones. 
•	Ayudar a redactar comentarios y documentación. 
•	Orientar la corrección de errores relacionados con el uso de APIs. 
•	Generar ideas para mejorar la interfaz y la experiencia del usuario. 
Cada sugerencia generada por IA fue revisada y comprendida antes de integrarse al proyecto.

LO QUE APRENDÍ Y LO QUE FUE UN DESAFÍO
Durante el desarrollo de este proyecto aprendí a trabajar con APIs, a manejar solicitudes HTTP en JavaScript y a organizar mejor la lógica de una aplicación web. También reforcé el uso de funciones, validaciones y manejo de errores.
Uno de los principales desafíos fue coordinar correctamente el flujo entre dos APIs distintas, ya que primero era necesario obtener la ubicación y después usar esos datos para consultar el clima. También fue desafiante manejar los errores sin afectar la experiencia del usuario y asegurar que la aplicación siguiera funcionando cuando una ciudad no fuera encontrada.

UNA COSA DE LA QUE ESTOY ORGULLOSO
Estoy orgulloso de haber logrado que la aplicación funcione de principio a fin con datos reales obtenidos desde una API externa. También considero un logro importante haber agregado la funcionalidad de consultar múltiples ciudades y mantener la información organizada de forma clara.
UNA COSA QUE MEJORARÍA SI TUVIERA MÁS TIEMPO
Si tuviera más tiempo, mejoraría el diseño visual de la aplicación con estilos más avanzados e incluiría íconos para representar mejor las condiciones del clima. También agregaría una función para guardar búsquedas recientes y quizás un pronóstico extendido para varios días.
