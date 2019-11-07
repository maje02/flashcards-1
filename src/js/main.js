import Form from './Form'
import Card from './Card'

fetch('http://localhost:3333/cards')
	.then(res => res.json())
	.then(cards => cards.forEach(card => new Card(card)))
	.catch(err => console.log(err))

new Form()
