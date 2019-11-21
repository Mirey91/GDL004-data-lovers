import potterObj from './data/potter/potter.js';
import { filtrarPorCasa } from './data.js';

const funcionMostrar = (arregloPersonajes) => {
    const divsContenedor = document.querySelector("#seccionDeDatos");
    //borrar el contenido de divsContenedor
    //document.getElementById("seccionDeDatos").innerHTML = "";

    arregloPersonajes.map(function (harry) {

        const newDiv = document.createElement("div");

        const divOculto = document.createElement("div");

        const imgPersonaje = document.createElement("img");
        imgPersonaje.src = harry.image;

        const namePersonaje = document.createElement("p");
        const textoName = document.createTextNode(`Name: ${harry.name}`);
        namePersonaje.appendChild(textoName);

        const casaPersonaje = document.createElement("p");
        const textoCasa = document.createTextNode(`House: ${harry.house}`);
        casaPersonaje.appendChild(textoCasa);

        const genderPersonaje = document.createElement("p");
        const textogender = document.createTextNode(`Gender: ${harry.gender}`);
        genderPersonaje.appendChild(textogender);

        const ancestryPersonaje = document.createElement("p");
        const textoancestry = document.createTextNode(`Ancestry: ${harry.ancestry}`);
        ancestryPersonaje.appendChild(textoancestry);

        const patronusPersonaje = document.createElement("p");
        const textopatronus = document.createTextNode(`Patronus: ${harry.patronus}`);
        patronusPersonaje.appendChild(textopatronus);

        //for(let wandAttribute in harry)
        const soloWand = document.createElement("p");
        const textoWand = document.createTextNode("Wand");
        soloWand.appendChild(textoWand);

        const wandPersonaje = document.createElement("ul");

        const woodWand = document.createElement("li");
        const textoWood = document.createTextNode(`Wood: ${harry.wand.wood}`);
        woodWand.appendChild(textoWood);
        const coreWand = document.createElement("li");
        const textocore = document.createTextNode(`Core: ${harry.wand.core}`);
        coreWand.appendChild(textocore);
        const lengthWand = document.createElement("li");
        const textolength = document.createTextNode(`Length: ${harry.wand.length}`);
        lengthWand.appendChild(textolength);

        wandPersonaje.appendChild(woodWand);
        wandPersonaje.appendChild(coreWand);
        wandPersonaje.appendChild(lengthWand);


        const actorPersonaje = document.createElement("p");
        const textoactor = document.createTextNode(`Actor: ${harry.actor}`);
        actorPersonaje.appendChild(textoactor);

        const eyeColourPersonaje = document.createElement("p");
        const textoeyeColour = document.createTextNode(`Eye Colour: ${harry.eyeColour}`);
        eyeColourPersonaje.appendChild(textoeyeColour);

        const hairColourPersonaje = document.createElement("p");
        const textohairColour = document.createTextNode(`Hair Colour: ${harry.hairColour}`);
        hairColourPersonaje.appendChild(textohairColour);

        const aliveComparable = harry.alive ? "Esta vivo" : "Esta muerto";
        const alivePersonaje = document.createElement("p");
        const textoAlive = document.createTextNode(aliveComparable);
        alivePersonaje.appendChild(textoAlive);

        newDiv.appendChild(imgPersonaje);
        newDiv.appendChild(namePersonaje);
        newDiv.appendChild(casaPersonaje);
        divOculto.appendChild(genderPersonaje);
        divOculto.appendChild(ancestryPersonaje);
        divOculto.appendChild(patronusPersonaje);
        divOculto.appendChild(soloWand);
        divOculto.appendChild(wandPersonaje);
        divOculto.appendChild(eyeColourPersonaje);
        divOculto.appendChild(hairColourPersonaje);
        divOculto.appendChild(alivePersonaje);
        //divOculto.appendChild();
        divOculto.appendChild(actorPersonaje);

        divsContenedor.appendChild(newDiv);
        divsContenedor.appendChild(divOculto);

    });
};

funcionMostrar(potterObj);

const resultCasa = filtrarPorCasa('Gryffindor', potterObj);
funcionMostrar(resultCasa);
console.log(resultCasa);
