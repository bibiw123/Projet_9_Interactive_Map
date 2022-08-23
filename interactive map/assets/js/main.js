

// Add header and footer content // ------------------------------------------
fetch("parts/header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("header").innerHTML = data;
  });

fetch("parts/footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
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


// list // -------------------------------------------------------------------
class Card {
  constructor(title, text, img) {
    this.title = title;
    this.text = text;
    this.img = img;
  }
}
