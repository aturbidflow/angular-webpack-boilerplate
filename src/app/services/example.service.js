'use strict'

export default function ()
{
	const serv = this

	serv.data = ''

	serv.set = function ( data )
	{
		serv.data = data + ' (changed in service) '
	}
}