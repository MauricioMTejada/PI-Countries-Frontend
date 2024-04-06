// Función que recibe un array de objetos y el nombre de la clave para ordenar
export const orderAlphabeticalArrayOfObjects = (array, keyName) => {
    // Utilizamos el método sort() para ordenar el array por la clave especificada
    const sortedArray = array.slice().sort((a, b) => {
      // Utilizamos localeCompare() para comparar los valores de las claves
      return a[keyName].localeCompare(b[keyName]);
    });
    return sortedArray;
  };