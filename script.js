var beers = [];


$('.post-beer').click(function() {
    var name = $('.beer-input').val();
    var category = $('.category-input').val();

    function addBeer(name, category) {

        const object = new Object();
        object.name = name;
        object.category = category;
        beers.push(object);
    }
    addBeer(name, category);
});

function updateBeers() {


}