/**
 * Módulo para operaciones básicas con texto.
 * @module TextUtils
 */

/**
 * Representa una utilidad para manipular strings.
 * @class
 */
class StringReverser {

    /**
     * Crea una instancia del StringReverser.
     * @constructor
     */
    constructor() {
        // Inicialización simple
    }

    /**
     * Invierte el orden de las palabras en una frase.
     *
     * @param {string} frase - La frase de entrada.
     * @returns {string} La frase con el orden de las palabras invertido.
     *
     * @example
     * // returns 'mundo hola'
     * StringReverser.invertirPalabras('hola mundo');
     */
    invertirPalabras(frase) {
        // 1. Dividir la frase en un array de palabras
        const palabras = frase.split(' ');

        // 2. Invertir el array
        palabras.reverse();

        // 3. Unir las palabras de nuevo en una string
        return palabras.join(' ');
    }
}

// Ejemplo de uso
const reverser = new StringReverser();
const textoOriginal = "Git es genial";
const textoInvertido = reverser.invertirPalabras(textoOriginal);

console.log(`Original: ${textoOriginal}`);
console.log(`Invertido: ${textoInvertido}`);
