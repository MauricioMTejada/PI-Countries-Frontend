export const addPropPopulationString = (data) => {
    return data.map(prop => {
        return {
            ...prop,
            stringPoblacion: formatPoblacion(prop.poblacion)
        };
    });
};

const formatPoblacion = (poblacion) => {
    if (poblacion > 1000000000) {
        // Si la población es mayor a 1.000 millones, agregar el punto "." de miles
        const poblacionB = (poblacion / 1000000000).toFixed(1); // Convertir a miles de millones con un decimal
        return `${poblacionB.replace(/\B(?=(\d{3})+(?!\d))/g, ".")} B`; // Agregar el punto "." de miles y la unidad "B"
    } else if (poblacion > 1000000) {
        // Si la población es mayor a 1 millón, formatearla en formato "1,0 M"
        const poblacionMillones = (poblacion / 1000000).toFixed(0); // Convertir a millones con un decimal
        return `${poblacionMillones} M`;
    } else if (poblacion > 1000) {
        // Si la población es mayor a 1000, formatearla en formato "1 k"
        const poblacionK = (poblacion / 1000).toFixed(0); // Convertir a miles sin decimales
        return `${poblacionK} k`;
    } else {
        // De lo contrario, usar el formato estándar con separadores de miles
        return poblacion.toLocaleString("en-US");
    }
};