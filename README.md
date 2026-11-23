
# 🇩🇴 Validador de Cédula Dominicana

Aplicación web que permite validar cédulas dominicanas mediante el algoritmo de verificación Módulo 10.

## 📌 Descripción

Este proyecto consiste en una aplicación web sencilla que permite introducir un número de cédula dominicana y comprobar si su dígito verificador coincide con el resultado del algoritmo Módulo 10.

## 🚀 Funcionalidades

- Ingreso de cédulas dominicanas.
- Validación del formato de 11 dígitos.
- Implementación del algoritmo Módulo 10.
- Identificación de cédulas válidas e inválidas según el cálculo.
- Mensajes de resultados en pantalla.
- Diseño adaptable a dispositivos móviles.

## 🛠️ Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript

## 🧮 Algoritmo Módulo 10

1. Se toman los primeros 10 dígitos.
2. Se multiplican alternadamente por 1 y 2.
3. Si un resultado tiene dos cifras, se suman sus dígitos.
4. Se suman todos los resultados.
5. Se calcula el dígito verificador esperado.
6. Se compara con el último dígito de la cédula.

## 🤖 Uso de Inteligencia Artificial

Se utilizó ChatGPT como herramienta de apoyo durante el desarrollo del proyecto para:

- Comprender el funcionamiento del algoritmo Módulo 10.
- Orientar la estructura de los archivos HTML, CSS y JavaScript.
- Apoyar la programación de las funciones de validación.
- Identificar posibles errores y realizar pruebas.

## 📂 Estructura del proyecto

ValidadorCedulaDominicana/
│
├── index.html
├── styles.css
├── script.js
└── README.md

## ▶️ Cómo ejecutar el proyecto

1. Descargar o clonar el repositorio.
2. Abrir la carpeta del proyecto.
3. Ejecutar el archivo index.html en un navegador web.
4. Introducir una cédula de 11 dígitos.
5. Presionar el botón Validar cédula.

## ⚠️ Nota

Esta aplicación comprueba el formato y el dígito verificador mediante el algoritmo implementado. No verifica si una cédula está registrada oficialmente en la Junta Central Electoral (JCE).

## 👨‍💻 Autor

Proyecto académico desarrollado como práctica de programación web.
