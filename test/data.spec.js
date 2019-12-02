// importamos la función `example`
import { filtrarPorCasa, ordenarAscendente, ordenarDescendente } from '../src/data';
const arregloPersonajesMock = [
  {
    name: 'Mirey',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '05-18-1991',
    yearOfBirth: 1991,
    ancestry: 'pure-blood',
    eyeColour: 'honey',
    hairColour: 'brunette',
    wand: {
      wood: 'hawthorn',
      core: 'unicorn tail-hair',
      length: 10,
    },
    patronus: '',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Tom Felton',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/draco.jpg',
  },
  {
    name: 'Reggie',
    species: 'human',
    gender: 'female',
    house: 'Gryffindor',
    dateOfBirth: '05-18-1991',
    yearOfBirth: 1991,
    ancestry: 'pure-blood',
    eyeColour: 'honey',
    hairColour: 'brunette',
    wand: {
      wood: 'hawthorn',
      core: 'unicorn tail-hair',
      length: 10,
    },
    patronus: '',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Tom Felton',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/draco.jpg',
  },
  {
    name: 'Frank',
    species: 'human',
    gender: 'male',
    house: 'Hufflepuff',
    dateOfBirth: '05-18-1991',
    yearOfBirth: 1991,
    ancestry: 'pure-blood',
    eyeColour: 'honey',
    hairColour: 'brunette',
    wand: {
      wood: 'hawthorn',
      core: 'unicorn tail-hair',
      length: 10,
    },
    patronus: '',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Tom Felton',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/draco.jpg',
  },
  {
    name: 'Ofelia',
    species: 'human',
    gender: 'female',
    house: 'Ravenclaw',
    dateOfBirth: '05-18-1991',
    yearOfBirth: 1991,
    ancestry: 'pure-blood',
    eyeColour: 'honey',
    hairColour: 'brunette',
    wand: {
      wood: 'hawthorn',
      core: 'unicorn tail-hair',
      length: 10,
    },
    patronus: '',
    hogwartsStudent: true,
    hogwartsStaff: false,
    actor: 'Tom Felton',
    alive: true,
    image: 'http://hp-api.herokuapp.com/images/draco.jpg',
  },
];

  describe("filtrarPorCasa", () => {
    // escribe aquí tu test
    it("filtrar por casa debe ser una funcion", () => {
        expect(typeof filtrarPorCasa).toBe("function");
    });

    it("deberia retornar 2 elementos de la casa de Gryffindor", () => {
      expect(filtrarPorCasa("Gryffindor", arregloPersonajesMock))
      .toHaveLength(2);
    });

    it("deberia el nombre del primer Ravenclaw ser Ofelia", () => {
      expect(filtrarPorCasa("Ravenclaw", arregloPersonajesMock)[0])
      .toHaveProperty("name", "Ofelia");
    });

  });

  describe("ordenarAscendente", () => {
    // escribe aquí tu test
    it("ordenarAscendente debe ser una funcion", () => {
        expect(typeof ordenarAscendente).toBe("function");
    });

    it("deberia ordenar los elementos con base en el nombre de A a la Z", () => {

      const nombresOrdenadosMock = ["Frank", "Mirey", "Ofelia", "Reggie"];

      const arregloOrdenadoResultado = ordenarAscendente(arregloPersonajesMock);

      const nombresArregloResultado = arregloOrdenadoResultado.map( personaje => { return personaje.name});

      expect(nombresArregloResultado)
      .toEqual(nombresOrdenadosMock);
    });
  });

  describe("ordenarDescendente", () => {
    // escribe aquí tu test
    it("ordenarDescendente debe ser una funcion", () => {
        expect(typeof ordenarDescendente).toBe("function");
    });

    it("deberia ordenar los elementos con base en el nombre de Z a la A", () => {

      const nombresDescendentesMock = ["Reggie", "Ofelia", "Mirey", "Frank"];

      const arregloDescendenteResultado = ordenarDescendente(arregloPersonajesMock);

      const nombresDescendenteResultado = arregloDescendenteResultado.map( personaje => { return personaje.name});

      expect(nombresDescendenteResultado)
      .toEqual(nombresDescendentesMock);
    });
  });
