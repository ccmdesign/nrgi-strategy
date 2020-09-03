// Function to light up the paths when the cards are hovered
function onCardsHover(elements) {
    const cards = document.querySelectorAll(elements);

    cards.forEach((card) => {
        card.addEventListener("mouseover", function(event){ toggleLinesOpacity(event.target, true) });
        card.addEventListener("mouseout", function(event){ toggleLinesOpacity(event.target, false) });
    })
}

function toggleLinesOpacity(card, hover) {
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