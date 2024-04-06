// Función que recibe un arreglo y lo ordena alfabéticamente
export const orderAlphabeticalArray = (arr) => {
    // Utilizamos el método sort() para ordenar el arreglo alfabéticamente
    // El método sort() modifica el arreglo original, por lo que usamos slice() para hacer una copia antes de ordenarlo
    const sortedArray = arr.slice().sort((a, b) => {
      // Usamos localeCompare() para comparar cadenas de caracteres teniendo en cuenta las reglas del idioma
      return a.localeCompare(b);
    });
    return sortedArray;
  };