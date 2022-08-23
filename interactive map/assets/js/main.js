// Add header and footer content // ------------------------------------------
fetch("parts/header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });

fetch("parts/footer.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("footer").innerHTML = data;
  });

// Animate with barba.js // --------------------------------------------------
/* barba.init({
    schema: {
        prefix: 'data-custom',
        wrapper: 'wrap'
      }
})
 */
// Leaflet.js // -------------------------------------------------------------

let map = L.map("map").setView([48.8534, 2.3488], 14);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

let marker = L.marker([48.8534, 2.3488]).addTo(map);
let clickMarker;
let form =
  "<form action='#' method='post'>" +
  "<input type='text' id='name' name= 'name' placeholder='lieu'>" +
  "<br><br><input type='text' id='type' name= 'name' placeholder='genre'>" +
  "<br><br><textarea id='msg' name='message' placeholder='Commentaire'></textarea>" +
  "<br><input id='lon' name= 'longitude' placeholder='longitude' type='hidden'>" +
  "<br><input id='lat' name= 'latitude' placeholder='latitude' type='hidden'>" +
  "<button>Envoyer</button>" +
  "</form>";

let circle = L.circle([48.8534, 2.3488], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 500,
}).addTo(map);

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047],
]).addTo(map);

marker.bindPopup("Paris centre").openPopup();

function onMapClick(e) {
  alert("Voici les coordonnées d'ici " + e.latlng);
}

map.on("click", onMapClick);

let popup = L.popup();

function onMapClick(e) {
  if (clickMarker) {
    map.removeLayer(clickMarker);
  }
  clickMarker = new L.marker(e.latlng, { draggable: true }).addTo(map);
  clickMarker
    .on("dragend", function (e) {})
    .bindPopup(form)
    .openPopup();
}

map.on("click", onMapClick);

// list // -------------------------------------------------------------------
class Card {
  constructor(title, text, img) {
    this.title = title;
    this.text = text;
    this.img = img;
  }
}
