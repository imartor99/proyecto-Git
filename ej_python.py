import math

# El nombre de archivo es en minúsculas y separado por guiones bajos (PEP 8)

def calcular_area_circulo(radio):
    """
    Calcula el área de un círculo.

    Args:
        radio (float): El radio del círculo. Debe ser un valor no negativo.

    Returns:
        float: El área calculada del círculo (pi * radio^2).

    Raises:
        ValueError: Si el radio es negativo.

    Examples:
        >>> calcular_area_circulo(5)
        78.53981633974483
    """
    if radio < 0:
        raise ValueError("El radio no puede ser negativo.")
    
    # Se usan 4 espacios para la indentación (PEP 8)
    area = math.pi * (radio ** 2)
    return area

# Se dejan dos líneas en blanco después de la definición de la función (PEP 8)


# Ejemplo de uso
if __name__ == "__main__":
    r = 7.5
    try:
        resultado = calcular_area_circulo(r)
        # Espacios alrededor de los operadores (PEP 8)
        print(f"El área de un círculo con radio {r} es: {resultado}")
    except ValueError as e:
        print(f"Error: {e}")
