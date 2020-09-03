btnHandler('.btn-log', function(){
  console.log('👋 Oh, hello there!');
});

// clickToggle('.button', '.target');
// clickToggleAll('.button', '.target');

// Calling the Collpase Section function on init
collapseSections('.collapse');

cardsInit('.base-card');

onCardsHover('#connected-cards-hover-top-left,' +
    '#connected-cards-hover-top-right, ' +
    '#connected-cards-hover-bottom-left, ' +
    '#connected-cards-hover-bottom-right')

tabs('.tabs');

menuItems('[data-inclusive-menu-opens]');


// Get the dialog element (with the accessor method you want)
const el = document.getElementById('dialog-example');
// Instantiate a new A11yDialog module
const dialog = new A11yDialog(el);