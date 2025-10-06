<?php
/**
 * @file
 * Ejercicio simple de PHP para practicar PHPDoc.
 */

/**
 * Comprueba si un número entero dado es par o impar.
 *
 * @param int $numero El número entero a evaluar.
 * @return string Devuelve 'par' si el número es divisible por 2, o 'impar' en caso contrario.
 * @throws \InvalidArgumentException Si el argumento no es un entero.
 */
function determinarParImpar(int $numero): string
{
    // Una validación simple para demostrar
    if (!is_int($numero)) {
        throw new \InvalidArgumentException("La función solo acepta enteros.");
    }

    // El operador módulo (%) devuelve el resto de la división
    if ($numero % 2 == 0) {
        return 'par';
    } else {
        return 'impar';
    }
}

/**
 * Imprime el resultado de la determinación para un número dado.
 *
 * @param int $valor El número a probar.
 * @return void
 */
function probarFuncion(int $valor): void
{
    try {
        $resultado = determinarParImpar($valor);
        echo "El número {$valor} es {$resultado}." . PHP_EOL;
    } catch (\InvalidArgumentException $e) {
        echo "Error: " . $e->getMessage() . PHP_EOL;
    }
}

// Ejemplos de uso
probarFuncion(10); // par
probarFuncion(3);  // impar
probarFuncion(0);  // par
?>
