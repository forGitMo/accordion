//Element suchen...
const items = document.getElementsByClassName('accordion__item');


//Element überprüfen
Array.from(items).forEach(function(item) {
    item.addEventListener('click', function() {
        item.classList.toggle('is-active'); 
    })
});


