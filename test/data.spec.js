// importamos la función `example`
// import  data from '../src/data';
import filtrarPorCasa from '../src/data';
//import potterObj from'../src/data/potter/potter.js';
import {potterObj} from'../src/data/potter/potter.js';
const harryPotter = potterObj;

// describe("data", () => {
  // it('debería ser una objeto', () => {
  //   expect(typeof data).toBe('object');
  // })
  
  describe("filtrarPorCasa", () => {
    // escribe aquí tu test
    it("filtrar por casa debe ser una funcion", () => {
        expect(typeof filtrarPorCasa).toBe("function");
    });

    it("deberia retornar 'Harry Potter' en la primera pocision de la casa de Gryffindor", () => {
      expect(filtrarPorCasa("Gryffindor", harryPotter)[0])
      .toHaveProperty("house", "Gryffindor");
    });

    let aux = filtrarPorCasa("Gryffindor", harryPotter)[0];
    console.log(aux.house);
  });
// });
