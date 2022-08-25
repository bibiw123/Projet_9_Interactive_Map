// Add head, header and footer content // ------------------------------------------
// fetch("parts/head.html")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     document.querySelector("head").innerHTML = data;
//   });

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


  // fetch(url)
  // .then(response => {
  //     // handle the response
  // })
  // .catch(error => {
  //     // handle the error
  // });

  

//   fetch('./insertData.php',{
//     method: 'POST',
//     body: JSON.stringify(value),
//     headers: {
//         "Content-Type": "application/json; charset=UTF-8"
//     }
// })
// .then((response)=> console.log(response.json()))
// .then((data)=> console.log(data))


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

let gameMarker = L.icon({
  iconUrl: 'https://img.icons8.com/clouds/100/000000/map-pin.png',
  iconSize:     [100, 100], // size of the icon
  iconAnchor:   [19, 17], // point of the icon which will correspond to marker's location  
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

fetch("../back/display.php")
.then((response) => {
  return response.json();
})
.then((data) => {
  data.map(place => 
    L.marker([place.lat, place.lng, {icon: gameMarker}]).bindPopup(`${place.name}<br>${place.adress}`).addTo(map))
});

// L.marker([place.lat, place.lng], {icon: gameMarker}).addTo(map);


let marker = L.marker([48.8534, 2.3488]).addTo(map);
let clickMarker;
let form =
  "<form action='add.php' method='post'>" +
  "<input type='text' id='name' name= 'name' placeholder='nom'>" +
  "<input type='text' id='adress' name= 'adress' placeholder='adresse'>" +
  "<br><br><input type='text' id='image' name= 'image' placeholder='image url'>" +
  "<br><br><input type='text' id='city' name= 'city' placeholder='ville'>" +
  "<br><br><input type='text' id='category' name= 'category' placeholder='categorie'>" +
  "<br><input id='lon' name= 'longitude' placeholder='longitude' type='hidden'>" +
  "<br><input id='lat' name= 'latitude' placeholder='latitude' type='hidden'>" +
  "<button>Ajouter</button>" +
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
