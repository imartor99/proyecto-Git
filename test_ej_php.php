<?php
# Este archivo contiene las pruebas unitarias para ej_php.php usando PHPUnit.

# Incluye el archivo de código fuente
require_once 'ej_php.php';

use PHPUnit\Framework\TestCase;

/**
 * Clase de prueba para la lógica de determinarParImpar.
 * NOTA: El nombre de esta clase es crucial para que PHPUnit la descubra correctamente.
 */
class EjPhpTest extends TestCase 
{
    public function testDeterminarPar(): void
    {
        $this->assertSame("El número 4 es PAR.", determinarParImpar(4));
    }

    public function testDeterminarImpar(): void
    {
        $this->assertSame("El número 7 es IMPAR.", determinarParImpar(7));
    }

    public function testCeroEsPar(): void
    {
        $this->assertSame("El número 0 es PAR.", determinarParImpar(0));
    }
}
