//objeto em escopol global qu o require manipula
require.config({

	//nome da aplicacao
	name: 'app',

	//pasta raiz dos arquivs javascript
	baseUrl: 'assets/js',

	//dicionario de importacao das bibliotecas.
	paths:{

		// 'nome da biblioteca': caminho relativo do arquivo da biblioteca
		'jquery': 'libs/jquery-3.2.1'

	}

}) ;


//A biblioreca 'Jquery' esta sendo requerida
//Ela esta sendo assinada ao caractere $
require(['jquery'], function($){

	$('body').append('hello');

});
