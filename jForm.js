/*
 * @project:	jForm
 * @version:	0.1 - 12/02/2013
 * @author:		Christian James
 * 
 * @description: Quando uma pessoa clica no input ele remove o valor do input que indica o que 
 * é o input, e quando o cara saí do formulário se ele não preencheu nada ele retorna o valor anterior. 
 * 
 * Ex.: Dentro do input da escrito "Nome" quando a pessoa clica no input ele limpa esse valor, e se a pessoa não digitou nada ele retorna esse valor.
 */

$.jForm = {
	init: function() {
	   jQuery('input[type="text"]').css('text-align', 'left');
	   jQuery('textarea').css('text-align', 'left');
	
	   /*INICIO*/
	  
	   jQuery('input[type="text"]').focus(function () {
	  		if( $(this).data('clean') != 'true'){
              $(this).data('oldvalue', $(this).val())
              		 .data('clean', 'true')
              		 .val('')
              		 .css('text-align', 'left')
              		 .css('color', '#4D4D4D');
         	 }
	   });
	   
	   jQuery('textarea').focus(function () {
	  		if( $(this).data('clean') != 'true'){
              $(this).data('oldvalue', $(this).val())
              		 .data('clean', 'true')
              		 .val('')
              		 .css('text-align', 'left')
              		 .css('color', '#4D4D4D');
              		
         	 }
	   });
	   
	   jQuery('select').focus(function () {
	   		if( $(this).data('clean') != 'true'){
              $(this).css('color', '#4D4D4D');
         	 }
	   });
	   
	   
	   jQuery('select').on('blur', function () {
	   		if($(this).val() == ''){
	   			$(this).css('color', '#B2B2B2');
	   		}
	   });
	   
       jQuery('input[type="text"]').on('blur', function () {
           if($(this).val() == ''){
               $(this).val($(this).data('oldvalue'))
               		  .data('clean', 'false')
               		  .css('text-align', 'left')
               		  .css('color', '#B2B2B2');
               		  
           }
       });
       
       jQuery('textarea').on('blur', function () {
           if($(this).val() == ''){
               $(this).val($(this).data('oldvalue'))
               		  .data('clean', 'false')
               		  .css('text-align', 'left')
               		  .css('color', '#B2B2B2');
           }
       });
       /*FIM*/
	}
};
