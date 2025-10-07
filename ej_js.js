/**
 * @module TextUtils
 */

/**
 * Clase para manejar la inversión de cadenas de texto.
 * @class
 */
class StringReverser {
    /**
     * Invierte una cadena de texto.
     * @param {string} str - La cadena a invertir.
     * @returns {string} La cadena invertida.
     */
    reverse(str) {
        if (!str) {
            return "";
        }
        return str.split('').reverse().join('');
    }
}

// Código de ejemplo que se ejecuta solo si el archivo es llamado directamente
// (No afecta a las pruebas, pero puedes dejarlo si lo necesitas)
const reverser = new StringReverser();
const original = "Git es genial";
const invertido = reverser.reverse(original);

console.log("Original: " + original);
console.log("Invertido: " + invertido);

/**
 * Esta línea es CRUCIAL para que Jest pueda importar la clase.
 * Se debe añadir al final del archivo.
 */
module.exports = StringReverser;
