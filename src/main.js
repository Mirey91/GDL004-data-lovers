import potterObj from './data/potter/potter.js';
import { filtrarPorCasa, ordenarAscendente, ordenarDescendente } from './data.js';

const funcionMostrar = (arregloPersonajes) => {
    const divsContenedor = document.querySelector("#seccionDeDatos");
    divsContenedor.classList.add("personajesOrdenados");

    document.getElementById("seccionDeDatos").innerHTML = "";

    arregloPersonajes.map(function (harry) {
         const todosPersonajesTemplate = document.getElementById("templatePersonajes");


         const personajeImgSpan = todosPersonajesTemplate.content.querySelector(".img");
         personajeImgSpan.src = harry.image;

         const personajeNameSpan = todosPersonajesTemplate.content.querySelector(".nameSpan");
         personajeNameSpan.textContent = harry.name;

         const personajeHouseSpan = todosPersonajesTemplate.content.querySelector(".houseSpan");
         personajeHouseSpan.textContent = harry.house;

         const personajeGenderSpan = todosPersonajesTemplate.content.querySelector(".genderSpan");
         personajeGenderSpan.textContent = harry.gender;

         const personajeAncestrySpan = todosPersonajesTemplate.content.querySelector(".ancestrySpan");
         personajeAncestrySpan.textContent = harry.ancestry;

         const personajePatronusSpan = todosPersonajesTemplate.content.querySelector(".patronusSpan");
         personajePatronusSpan.textContent = harry.patronus;

         const personajeWoodSpan = todosPersonajesTemplate.content.querySelector(".woodSpan");
         personajeWoodSpan.textContent = harry.wand.wood;

         const personajeCoreSpan = todosPersonajesTemplate.content.querySelector(".coreSpan");
         personajeCoreSpan.textContent = harry.wand.core;

         const personajeLengthSpan = todosPersonajesTemplate.content.querySelector(".lengthSpan");
         personajeLengthSpan.textContent = harry.wand.length;

         const personajeEyeColourSpan = todosPersonajesTemplate.content.querySelector(".eyeColourSpan");
         personajeEyeColourSpan.textContent = harry.eyeColour;

         const personajeHairColourSpan = todosPersonajesTemplate.content.querySelector(".hairColourSpan");
         personajeHairColourSpan.textContent = harry.hairColour;

         const personajeAliveSpan = todosPersonajesTemplate.content.querySelector(".aliveSpan");
         personajeAliveSpan.textContent = harry.alive ? "Alive" : "Dead";

         const personajeActorSpan = todosPersonajesTemplate.content.querySelector(".actorSpan");
         personajeActorSpan.textContent = harry.actor;

         const contenidoTemplate = todosPersonajesTemplate.content;
         const clonePersonajes = document.importNode(contenidoTemplate, true);
         divsContenedor.appendChild(clonePersonajes);

    });
};


funcionMostrar(potterObj);

const ejecutarFiltro = () => {
    let filtroCasas = document.getElementById("tiposDeCasa").value;
    const resultCasa = filtrarPorCasa(filtroCasas, potterObj);
    funcionMostrar(resultCasa);
};

document.getElementById("filtrar").addEventListener("click", ejecutarFiltro);

const ejecutarOrden = () => {
   const ordenadas = ordenarAscendente(potterObj);
   console.log(ordenadas)
   funcionMostrar(ordenadas);
};

document.getElementById("orderAZ").addEventListener("click", ejecutarOrden);

const ejecutarOrdenZA = () => {
   const ordenadas = ordenarDescendente(potterObj);
   console.log(ordenadas)
   funcionMostrar(ordenadas);
};

document.getElementById("orderZA").addEventListener("click", ejecutarOrdenZA);

