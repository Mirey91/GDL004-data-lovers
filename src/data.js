/* Manejo de data */

// esta es una función de ejemplo

export const example = () => {
  return 'example';
};

const filtrarPorCasa = (tipoCasa, potterObj) => {
  const resultado = potterObj.filter( (elementoActual) =>{
      if(elementoActual.house === tipoCasa) {
          return true;
      } else {

          return false;
      }
  } );
  // console.log(resultado);
  return resultado;
};

export default filtrarPorCasa;

const comparaObj = (objeto1, objeto2) => {
 if(objeto1.name > objeto2.name) {
   return 1;
 }else if(objeto1.name < objeto2.name){
   return -1;
 }
 return 0
};

export const ordenarAscendente = (potterObj) => { //Creo que esto debe de ir en la línea 21
  const valoresOrdenados = potterObj.sort(comparaObj);
  return valoresOrdenados;
};

const comparaObjDes = (objeto1, objeto2) => {
  if(objeto1.name < objeto2.name) {
    return 1;
  }else if(objeto1.name > objeto2.name){
    return -1;
  }
  return 0
 };
 
 export const ordenarDescendente = (potterObj) => {
   const valoresOrdenadosDes = potterObj.sort(comparaObjDes);
   console.log(valoresOrdenadosDes);
   return valoresOrdenadosDes;
 };
