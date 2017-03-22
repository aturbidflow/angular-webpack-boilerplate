'use strict'

export default function ( Dialogs )
{
	const el = this

	el.text = ''

	el.openPopup = function()
	{
		Dialogs.example(el.text, function(){
			;(el.text.toLowerCase() === 'something') && (alert('You got it ;)'))
		})
	}
}