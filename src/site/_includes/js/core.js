function menuItems(items) {
  var list = document.querySelectorAll(items); 
  
  list.forEach(function(el) {
    new MenuButton(el);
  });
}