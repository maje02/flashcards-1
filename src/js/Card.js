//class CARD, mit dem man eine neue Karte erstellt.
export default class Card {
	constructor(card) {
		this.card = card
		this.createCard(this.card)
	}

	createCard(card) {
		const el = document.createElement('section')
		el.className = 'card'
		this.createInnerHTML(el, card)
		this.addToggleLogic(el)
		document.body.appendChild(el)
	}

	createInnerHTML(el, card) {
		return (el.innerHTML = `
	<h2>${card.title}</h2>
	<div class="js-content card__content" hidden>
	<p>${card.question}</p>
	<p class="card__answer">${card.answer}</p>
	</div>
	<button class="js-button button">show</button>
	`)
	}

	addToggleLogic(el) {
		const toggleContent = el.querySelector('.js-content')
		const toggleButton = el.querySelector('.js-button')

		toggleButton.addEventListener('click', () => {
			toggleContent.toggleAttribute('hidden')
			this.toggleButtonText(toggleButton, 'show', 'hide')
		})
	}

	toggleButtonText(el, firstText, secondText) {
		el.textContent === firstText
			? (el.textContent = secondText)
			: (el.textContent = firstText)
	}
}
