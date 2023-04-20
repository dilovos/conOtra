fetch("https://rickandmortyapi.com/api/character")
  .then((response) => {
    //de JSON a dato manipulable (objeto o array)
    return response.json();
  })
  .then((data) => {
    const personajes = data.results;
    const $contenedor = document.getElementById("contenedor-personajes");

    console.log(personajes[0]);

    for (let i = 0; i < personajes.length; i++) {
      $contenedor.innerHTML += `
      <div class="tarjeta">
        <img src="${personajes[i].image}">
        <p class="nombre-personaje">${personajes[i].name}</p>
        <p>${personajes[i].gender} - ${personajes[i].species} - ${personajes[i].status}</p>
        <p>${personajes[i].location.name}</p>
        <p>${personajes[i].origin.name}</p>
      </div>
      `;
    }
  });
