// Function to collapse the collpase section component, 
// and covering the possibility of multiple elements in the same page. 
function collapseSections(items) {
  var section_list = document.querySelectorAll(items); 
  
  section_list.forEach(function(el) {
    var btn = el.children[0];
    var tgt = el.children[0].nextElementSibling;

    btn.onclick = () => {
      let expanded = btn.getAttribute('aria-expanded') === 'true' || false
      btn.setAttribute('aria-expanded', !expanded)
      tgt.hidden = expanded    
    }
  });
}
