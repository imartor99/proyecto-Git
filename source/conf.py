# Configuration file for the Sphinx documentation builder.
#
# For the full list of built-in configuration values, see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Project information -----------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#project-information

project = 'proyectoGit'
copyright = '2025, imartor'
author = 'imartor'
release = '1.0.1'

# Insertar estas líneas después de la sección de Project Information:
import os
import sys
sys.path.insert(0, os.path.abspath('..')) # Línea clave para el PATH

# -- General configuration ---------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#general-configuration

extensions = [
	'sphinx.ext.autodoc',          # Para extraer la documentación del código
	'sphinx.ext.napoleon',         # Para entender el formato de docstrings PEP 257 (Google/NumPy)
	'sphinx_rtd_theme',            # El tema moderno
    	'sphinx_autodoc_typehints'     # Para manejar las anotaciones de tipos
]

templates_path = ['_templates']
exclude_patterns = []

language = 'es'

# -- Options for HTML output -------------------------------------------------
# https://www.sphinx-doc.org/en/master/usage/configuration.html#options-for-html-output

html_theme = 'sphinx_rtd_theme'
html_static_path = ['_static']
