'use strict'

import dlgExampleTmpl from '../dialogs/example.template.html'
import dlgExampleCtrl from '../dialogs/example.controller.js'

export default function ( $rootScope, ngDialog )
{
	const dialogs = this

	dialogs.example = function ( data, onClose )
	{
		_dialog(dlgExampleTmpl, dlgExampleCtrl, { text: data }, onClose)
	}


	function _dialog ( tmpl, ctrl, data, callback )
	{
		let $sc = $rootScope.$new()

		angular.forEach(data, function(item, key){
			$sc[key] = item
		})

		ngDialog.open({ 
			template: tmpl, 
			controller: ctrl, 
			controllerAs: 'dlg', 
			plain: true, 
			scope: $sc,
			className: 'ngdialog-theme-default',
			preCloseCallback: function ( value ) 
				{
					;(callback) && (callback(value))
			    } 
		});
	}
}