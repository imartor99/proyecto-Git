import pytest
from ej_python import calcular_area_circulo

def test_area_radio_positivo():
    # Prueba con un radio normal (r=5, A = pi*25 ~ 78.54)
    assert calcular_area_circulo(5) == pytest.approx(78.54, 0.01)

def test_area_radio_cero():
    # Prueba con radio cero (A = 0)
    assert calcular_area_circulo(0) == 0

def test_area_radio_negativo_excepcion():
    # Prueba que lanza la excepción ValueError para radio negativo
    with pytest.raises(ValueError):
        calcular_area_circulo(-10)
