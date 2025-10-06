# Proyecto Final - Documentación y GitFlow (2º DAW)

Este repositorio contiene tres ejercicios simples desarrollados en **Python**, **PHP** y **JavaScript**, siguiendo una estricta gestión de ramas basada en el modelo **GitFlow** y aplicando los estándares de documentación específicos para cada lenguaje.

---

## Estructura y Flujo de Trabajo (GitFlow)

El desarrollo se gestionó siguiendo el siguiente modelo de ramas:

1.  **`main`**: Rama de producción (código estable).
2.  **`develop`**: Rama de integración donde se fusionaron las funcionalidades.
3.  **`feature/*`**: Ramas de desarrollo individuales para cada ejercicio (`feature/python`, `feature/php`, `feature/javascript`).
4.  **`release/1.0.0`**: Rama de pre-producción para la documentación final (este `README.md`) y el etiquetado.

## Resumen de los Ejercicios y Documentación Aplicada

Cada ejercicio fue creado y documentado cumpliendo con los estándares requeridos por el proyecto:

### 🐍 1. Python (ejercicio_python.py)

**Funcionalidad:** Implementa una función para calcular el área de un círculo.

| Estándar | Aplicación |
| :--- | :--- |
| **Estilo (PEP 8)** | Se respetan las convenciones de nombres, espaciado e indentación (4 espacios). |
| **Docstrings (PEP 257)** | Se utilizó el formato de docstring completo para la función, incluyendo la descripción, `Args`, `Returns` y `Raises`. |

Para ejecutar: `python ejercicio_python.py`

### 🐘 2. PHP (ejercicio_php.php)

**Funcionalidad:** Implementa una función para determinar si un número es par o impar.

| Estándar | Aplicación |
| :--- | :--- |
| **PHPDoc** | Se documentaron la función principal, la función de prueba (`probarFuncion`), y se incluyeron etiquetas `@param`, `@return` y `@throws` para la correcta referencia de tipos y excepciones. |

Para ejecutar: `php ejercicio_php.php`

### 📜 3. JavaScript (ejercicio_js.js)

**Funcionalidad:** Define una clase (`StringReverser`) con un método para invertir el orden de las palabras en una frase.

| Estándar | Aplicación |
| :--- | :--- |
| **JSDoc** | Se documentaron el módulo (`@module`), la clase (`@class`), el constructor (`@constructor`) y el método (`@param`, `@returns`, `@example`). |

Para ejecutar: `node ejercicio_js.js`

---

## Historial de Versiones

### v1.0.0 (Lanzamiento inicial)

* Integración final de las tres funcionalidades (Python, PHP, JavaScript).
* Documentación de código completa y verificada según los estándares de cada lenguaje.
* Documentación del proyecto en formato Markdown (`README.md`).
