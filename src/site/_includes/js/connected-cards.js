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

    card.classList.contains('connected-card__icon--revenues')
        ? lines = document.querySelectorAll('.lines__line--bottom-left, .lines__line--top-right, .lines__straight-line--right')
        : lines = document.querySelectorAll('.lines__line--top-left, .lines__line--bottom-right, .lines__straight-line--left');

    hover
        ? lines.forEach((line) => { line.style.opacity = '1' })
        : lines.forEach((line) => { line.style.opacity = '.1' });
}
