<?php

/**
 * @file
 * Contiene la lógica para determinar si un número es par o impar.
 */

/**
 * Determina si un número es par o impar.
 *
 * @param int $numero El número a evaluar.
 * @return string El mensaje indicando si es PAR o IMPAR.
 */
function determinarParImpar(int $numero): string {
    if ($numero % 2 === 0) {
        return "El número $numero es PAR.";
    } else {
        return "El número $numero es IMPAR.";
    }
}

/**
 * Este bloque es CRUCIAL para las pruebas unitarias.
 * Solo se ejecuta el código de ejemplo si el archivo se llama directamente
 * (evitando que se ejecute cuando PHPUnit lo requiere).
 */
if (basename($_SERVER['PHP_SELF']) == 'ej_php.php') {
    // Código de ejemplo
    echo determinarParImpar(10) . "\n";
    echo determinarParImpar(3) . "\n";
    echo determinarParImpar(0) . "\n";
}
