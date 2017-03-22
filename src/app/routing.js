'use strict'

import indexPage from './pages/index/index.page.js'

export default function ( app ) 
{
	app
		.config(function ( $routeProvider, $locationProvider ) {
	        $routeProvider
	        /*
	        	.when('/path/to/page', somePage)
			*/
		        .otherwise(indexPage)

	        $locationProvider.html5Mode(true)
	    })
}