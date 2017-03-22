'use strict'

export default function ( $scope, exampleService )
{
	const dlg = this

	dlg.close = $scope.closeThisDialog

	dlg.send = function ()
	{
		exampleService.set($scope.text)
		dlg.close()
	}
}