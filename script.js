 var beerReviewApp = function() {

     var beers = [];

     function addBeer(name, category, rating) {
         const object = new Object();
         object.name = name;
         object.category = category;
         object.rating = rating;
         beers.push(object);
     }

     function updateBeers() {
         $('ul').empty();
         for (i = 0; i < beers.length; i++) {

             $(".beers-list").append('<li>' + beers[i].name + ", " + beers[i].category + ", Rating: " + beers[i].rating + '</li>');
         }
         return {
             addBeer: addBeer(name, category, rating),
             updateBeers: updateBeers()
         }
     }
 }
 var app = beerReviewApp();

 $('#post').click(function() {
     var name = $('.beer-input').val();
     var category = $('.category-input').val();
     var rating = $('#select option:selected').text();

     app.addBeer(name, category, rating);
     app.updateBeers();
 });

 /////////////////////////////////////////////////

 $('#sort').click(function() {
     var ascending = false;
     beers.sort(function(a, b) {
         return ascending ? a.rating - b.rating : b.rating - a.rating;
     });
     updateBeers();
     ascending = !ascending;
 });