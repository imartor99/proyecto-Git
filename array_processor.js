/**
 * @fileoverview Lógica para realizar operaciones de conjuntos (Filter/Index) en arrays.
 * @module ArrayProcessor
 */

/**
 * Clase para realizar operaciones de Intersección, Unión y Diferencia entre dos arrays.
 */
class ArrayProcessor {

    /**
     * Define los arrays A y B.
     * @param {string[]} arrayA - El primer array.
     * @param {string[]} arrayB - El segundo array.
     */
    constructor(arrayA, arrayB) {
        this.arrayA = arrayA;
        this.arrayB = arrayB;
    }

    /**
     * Procesa las operaciones de Intersección, Unión y Diferencia (A-B).
     * @returns {object} Un objeto que contiene los arrays resultantes.
     */
    processArrays() {
<<<<<<< Updated upstream
        // [LÍNEA DE CONFLICTO]
        const array1 = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];
        const array2 = ['uva', 'pera', 'naranja', 'fresa', 'mango'];

        // 1. INTERSECCIÓN (A ∩ B): Elementos en A que también están en B
        const arrayInterseccion = array1.filter(palabra => array2.includes(palabra));

        // 2. UNIÓN (A ∪ B): Concatenar y luego usar filter/indexOf para duplicados (Método tradicional)
        const arrayCombinado = array1.concat(array2);
        const arrayUnion = arrayCombinado.filter((palabra, indice) => {
            // Se mantiene si la primera aparición de la palabra es su posición actual
            return arrayCombinado.indexOf(palabra) === indice;
        });

        // 3. DIFERENCIA (A - B): Elementos en A que NO están en B
        const arrayDiferencia = array1.filter(palabra => !array2.includes(palabra));

        return { arrayInterseccion, arrayUnion, arrayDiferencia };
    }
}

module.exports = ArrayProcessor;
