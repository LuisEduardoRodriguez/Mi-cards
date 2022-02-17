const API = "https://jsonplaceholder.typicode.com/users";

const getData = (api) => {
  return fetch(api)
    .then((response) => response.json())
    .then((json) => {
      llenarDatos(json);
    })
    .catch((error) => {
      console.log("Error", error);
    });
};
const llenarDatos = (data) => {
  let html = "";

  data.forEach((pj) => {
    html += '<div class="card" style="width: 18rem;">';
    html += '<img src="./img/cards.png" class="card-img-top" alt="...">';
    html += '<div class="card-body">';
    html += `<h5 class="card-title">${pj.name}</h5>`;
    html += `<p class="card-text">${pj.email}</p>`;
    html += `<a href="#" class="btn btn-primary">${pj.address.city}</a>`;
    html += "</div>";
    html += "</div>";
  });
  document.getElementById("datosPersonajes").innerHTML = html;
};

getData(API);