// Function to apply proxy click event on all cards
function cardsInit(items) {
  const cards = document.querySelectorAll(items);  
  Array.prototype.forEach.call(cards, card => {  
      let down, up, link = card.querySelector('h2 a');
      card.onmousedown = () => down = +new Date();
      card.onmouseup = () => {
          up = +new Date();
          if ((up - down) < 200) {
              link.click();
          }
      }
  });
}