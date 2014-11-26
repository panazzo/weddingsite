$(document).ready(function(){
	
	'use strict';
	
    $("#rsvpform").submit(function(event) {
	
		/* stop form from submitting normally */
     	event.preventDefault();		
		
		/* get some values from elements on the page: */
      	var $form = $( this ),
        	url = $form.attr( 'action' );
			
		var	inputname0  = $('#inputNome0').val(),
			inputemail0 = $('#inputEmail0').val(),
			inputsexo0 = $('#selectSapato0').val(),
			inputsapato0 = $('#inputSapato0').val(),
			//contato 1
			inputname1  = $('#inputNome1').val(),
			inputsexo1 = $('#selectSapato1').val(),
			inputsapato1 = $('#inputSapato1').val(),
			//contato 2
			inputname2  = $('#inputNome2').val(),
			inputsexo2 = $('#selectSapato2').val(),
			inputsapato2 = $('#inputSapato2').val(),
			//contato 3
			inputname3 = $('#inputNome3').val(),
			inputsexo3 = $('#selectSapato3').val(),
			inputsapato3 = $('#inputSapato3').val(),
			//contato 4
			inputname4 = $('#inputNome4').val(),
			inputsexo4 = $('#selectSapato4').val(),
			inputsapato4 = $('#inputSapato4').val(),
			//contato 5
			inputname5 = $('#inputNome5').val(),
			inputsexo5 = $('#selectSapato5').val(),
			inputsapato5 = $('#inputSapato5').val(),
			//Message
			inputmessage = $('#inputmessage').val();

			
		if (inputname0 == "") {
            $("#fullname").addClass("has-error");
        }
		else
		{
			$("#fullname").removeClass("has-error");
		}
		
		if (inputemail0 == "") {
            $("#email").addClass("has-error");
        }
		else
		{ 	
			$("#email").removeClass("has-error");
        }

        if (inputsexo0 == "") {
            $("#sexo").addClass("has-error");
        }
		else
		{ 	
			$("#sexo").removeClass("has-error");
        }
		

		var post_data = { input_name0: inputname0, input_email0: inputemail0, input_sexo0: inputsexo0, input_sapato0: inputsapato0,
							input_name1: inputname1, input_sexo1: inputsexo1, input_sapato1: inputsapato1,
							input_name2: inputname2, input_sexo2: inputsexo2, input_sapato2: inputsapato2,
							input_name3: inputname3, input_sexo3: inputsexo3, input_sapato3: inputsapato3,
							input_name4: inputname4, input_sexo4: inputsexo4, input_sapato4: inputsapato4,
							input_name5: inputname5, input_sexo5: inputsexo5, input_sapato5: inputsapato5,
							input_message: inputmessage  };
			
            //Ajax post data to server
            $.post(url, post_data, function(response){  
                //load json data from server and output message  
				var output = "";
				if(response.type == 'error')
				{
					output = '<div class="bg-danger">'+response.text+'</div>';
				}else{
				    output = '<div class="bg-success">'+response.text+'</div>';
					
					//reset values in all input fields
					$("#rsvpform input[type='text']").val(''); 
					$("#rsvpform input[type='email']").val('');
					$('#rsvpform textarea').val(''); 
				}
				
				$("#result").hide().html(output).slideDown();
            }, 'json');
	 
    });
 
    
});