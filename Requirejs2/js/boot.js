;(function(undefined){
	'use strict';


	require.config({
		baseUrl: './js',
		paths: {
			jquery:['https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min','vendor/jquery'],
			lodash: 'vendor/lodash'
		}
	});

	//injetando o arquivo jquery
	require(['jquery','lodash'], function($,_){
		//garantido que ao carregar o app.js o jquery e o lodash ja estarao carregados
		require(['App']);
	});
})();
