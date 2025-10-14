const ArrayProcessor = require('./array_processor');

describe('ArrayProcessor Tests', () => {
    // Definición de arrays de prueba
    const arrayA = ['manzana', 'banana', 'pera', 'uva', 'kiwi'];
    const arrayB = ['uva', 'pera', 'naranja', 'fresa', 'mango'];
    let processor;
    let results;

    beforeAll(() => {
        // Inicializamos y procesamos los arrays para todas las pruebas
        processor = new ArrayProcessor(arrayA, arrayB);
        results = processor.processArrays();
    });

    test('Debe calcular la Intersección correctamente', () => {
        // Intersección esperada: ['uva', 'pera']
        expect(results.arrayInterseccion).toEqual(expect.arrayContaining(['uva', 'pera']));
        expect(results.arrayInterseccion.length).toBe(2);
    });

    test('Debe calcular la Unión correctamente sin duplicados', () => {
        // Unión esperada: 8 elementos únicos
        expect(results.arrayUnion.length).toBe(8);
        expect(results.arrayUnion).toEqual(expect.arrayContaining(['manzana', 'banana', 'pera', 'uva', 'kiwi', 'naranja', 'fresa', 'mango']));
    });

    test('Debe calcular la Diferencia (A-B) correctamente', () => {
        // Diferencia esperada: ['manzana', 'banana', 'kiwi']
        expect(results.arrayDiferencia).toEqual(expect.arrayContaining(['manzana', 'banana', 'kiwi']));
        expect(results.arrayDiferencia.length).toBe(3);
    });
});
