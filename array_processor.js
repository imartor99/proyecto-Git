/**
 * @fileoverview Lógica para realizar operaciones de conjuntos (Set) en arrays.
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
        // [LÍNEA DE CONFLICTO]: Modificar 'kiwi' por 'MANGO_A' en el paso 1.6
        const array1 = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];
        const array2 = ['uva', 'pera', 'naranja', 'fresa', 'mango'];

        // 1. INTERSECCIÓN (A ∩ B): Usamos Set para búsqueda rápida (O(1))
        const setB = new Set(array2);
        const arrayInterseccion = array1.filter(palabra => setB.has(palabra));

        // 2. UNIÓN (A ∪ B): Usamos Set para eliminar duplicados automáticamente
        const setUnion = new Set([...array1, ...array2]);
        const arrayUnion = Array.from(setUnion);

        // 3. DIFERENCIA (A - B): Elementos en A que NO están en B
        const arrayDiferencia = array1.filter(palabra => !setB.has(palabra));

        return { arrayInterseccion, arrayUnion, arrayDiferencia };
    }
}

module.exports = ArrayProcessor;
