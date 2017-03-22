'use strict'

export default function ()
{

	function _apply ( element )
	{
		element.style.backgroundColor = 'red'
	}

	return {
		restrict: 'A',
		scope: {},
		link: function ( scope, elements, attrs )
			{
				angular.forEach(elements, _apply)
			}
	}
}