requirejs.config({

	//local de onde os modulos serão carregados
	"baseUrl": "js/modules",


	"paths":{
		"jquery": "http://code.jquery.com/jquery-3.2.1",
		//"main": "../main" //main esta em um diretorio anterior
	}
});

//chamando o modulo principal para iniciar a aplicacao
//injetando o arquivo main
requirejs(["main"]);