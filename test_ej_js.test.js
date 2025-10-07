const StringReverser = require('./ej_js');

describe('StringReverser', () => {
    test('Debe invertir una cadena de letras correctamente', () => {
        const reverser = new StringReverser();
        expect(reverser.reverse("hola")).toBe("aloh");
    });

    test('Debe manejar cadenas vacías', () => {
        const reverser = new StringReverser();
        expect(reverser.reverse("")).toBe("");
    });

    test('Debe manejar cadenas con espacios', () => {
        const reverser = new StringReverser();
        expect(reverser.reverse("adios mundo")).toBe("odnum soida");
    });
});
