requirejs.config({
    
    //POR PADRAO CARREGA QUALQUER MODULO DE js/lib
    //DEVE SER CONFIGURADO NO MESMO DIRETORIO RAIZ DO SCRIPT SETADO NO data-main
    baseUrl: 'js/lib';
    
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    
    //INCLUINDO PS MODULOS DA PASTA app NO CARREGAMENTO
    paths:{
        app:'../app'
    }

    //STARTS THE MAIN APP LOGIC
    //INICIA A LOGICA DO APP PRINCIPAL
    requirejs(['jquery','canvas','app/sub'],
        function($, canvas, sub){
            
            //jQuery, canvas and the app/sub module are all
            //loaded and can be used here now.

            /*jQuery, canvas E O MODULO app/sub SAO TODOS CARREGADOS E PODEM SER USADOS AGORA */


        }
    )
    
})
