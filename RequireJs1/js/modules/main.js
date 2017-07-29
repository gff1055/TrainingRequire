//criando um componente no padrao AMD
//DEFINE('NOME DO MODULO', [DEPENDENCIAS], CALLBACK)
//funcao so sera executada depois que as dependencias forem resolvidas
define(
	["jquery", "myModules"],
	function($,myModules){
		//$(function(){
			$('.btn').on('click',
				function(){
					var number1 = $('#number1').val();
					var number2 = $('#number2').val();
					alert(myModules.sum(number1, number2));}
			);
		//});
});
