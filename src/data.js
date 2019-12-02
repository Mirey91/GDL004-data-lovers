/* Manejo de data */

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


const comparaObj = (objeto1, objeto2) => {
 if(objeto1.name > objeto2.name) {
   return 1;
 }else if(objeto1.name < objeto2.name){
   return -1;
 }
 return 0
};

export const ordenarAscendente = (potterObj) => { 
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
   return valoresOrdenadosDes;
 };
