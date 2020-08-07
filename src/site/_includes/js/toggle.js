// Click Class Toggle Multiple Targets
function clickToggleAll(selector, target, modifier) {
  modifier = (typeof modifier !== 'undefined') ? modifier : 'active'
  var btn = document.querySelector(selector);
  var tgt = document.querySelectorAll(target);
  if(!btn) { return; }
  
  btn.addEventListener('click', function(event) {
    event.preventDefault();

    for (i = 0; i < tgt.length; i++ ) {
      if ( tgt[i].classList.contains(modifier)) {
        tgt[i].classList.remove(modifier);
      } else {
        tgt[i].classList.add(modifier);
      }  
    }
  });
};

// Click Class Toggle
function clickToggle(selector, target, modifier) {
  modifier = (typeof modifier !== 'undefined') ? modifier : 'active'
  var btn = document.querySelector(selector);
  var tgt = document.querySelector(target);
  if(!btn) { return; }
  
  btn.addEventListener('click', function(event) {
    event.preventDefault();
    if (tgt.classList.contains(modifier)) {
      tgt.classList.remove(modifier);
    } else {
      tgt.classList.add(modifier);
    }
  }, false);
}