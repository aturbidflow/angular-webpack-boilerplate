'use strict'

import exElementCtrl from './example-element.controller.js'
import exElementTmpl from './example-element.template.html'

import '../../../style/components/example-element.css'

export default function()
{
	return {
		replace: true,
		restrict: 'E',
		template: exElementTmpl,
		controller: exElementCtrl,
		controllerAs: 'el'
	}
}