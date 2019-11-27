/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};

export const filtrarPorCasa = (tipoCasa, potterObj) => {

  const resultado = potterObj.filter( (elementoActual) =>{
      if(elementoActual.house === tipoCasa) {
          return true;
      } else {

          return false;
      }
  } );
  return resultado;
};

const ordenarAscendente = (objeto1, objeto2) => {
  if(objeto1.name > objeto2.name) {
    return 1;
  }
};

/*const valoresOrdenados = potterObj.sort(ordenarAscendente);
console.log(valoresOrdenados);*/
