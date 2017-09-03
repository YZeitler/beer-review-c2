(function() {

    var beers = [];

    function updateBeers() {

        $('ul').empty();
        for (i = 0; i < beers.length; i++) {

            $(".beers-list").append('<li>' + beers[i].name + ", " + beers[i].category + ", Rating: " + beers[i].rating + '</li>');

        }
    }

    $('#post').click(function() {
        var name = $('.beer-input').val();
        var category = $('.category-input').val();
        var rating = $('#select option:selected').text();

        function addBeer(name, category, rating) {

            const object = new Object();
            object.name = name;
            object.category = category;
            object.rating = rating;
            beers.push(object);

        }
        addBeer(name, category, rating);
        updateBeers();
    });

    var ascending = false;

    $('#sort').click(function() {

        beers.sort(function(a, b) {
            return ascending ? a.rating - b.rating : b.rating - a.rating;
        });
        updateBeers();
        ascending = !ascending;

    });
})();