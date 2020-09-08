btnHandler('.btn-log', function(){
  console.log('👋 Oh, hello there!');
});

// clickToggle('.button', '.target');
// clickToggleAll('.button', '.target');

// Calling the Collpase Section function on init
collapseSections('.collapse');

cardsInit('.base-card');

// Add hover listener to connected cards on init
addHoverListener('#connected-cards-hover-top-left,' +
    '#connected-cards-hover-top-right')

tabs('.tabs');

menuItems('[data-inclusive-menu-opens]');


// Get the dialog element (with the accessor method you want)
const el = document.getElementById('dialog-example');
// Instantiate a new A11yDialog module
const dialog = new A11yDialog(el);
