// Function to add hover listener to connected cards
function addHoverListener(elements) {
    const cards = document.querySelectorAll(elements);

    cards.forEach((card) => {
        card.addEventListener("mouseover", function(event){ onCardHover(event.target, true) });
        card.addEventListener("mouseout", function(event){ onCardHover(event.target, false) });
    })
}

// Function to toggle lines opacity when cards are hovered
function onCardHover(card, hover) {
    let lines;
    const text = document.querySelector('.between-lines-text');

    if (!card.id) card = card.parentElement;

    card.classList.remove('pulse');

    card.id.includes('top-right')
        ? lines = document.querySelectorAll('.line-bottom-left, .line-top-right, .line-right')
        : lines = document.querySelectorAll('.line-top-left, .line-bottom-right, .line-left');

    hover
        ? lines.forEach((line) => { line.style.opacity = '1'; text.style.opacity = '0' })
        : lines.forEach((line) => { line.style.opacity = '.1'; text.style.opacity = '1' });
}