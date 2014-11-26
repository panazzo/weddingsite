<?php 
	if ($_POST["input_name0"] == "")
	{
		$output = json_encode(array('type'=>'error', 'text' => 'O campo nome está vazio!'));
		die($output);
	}
	elseif ($_POST["input_email0"] == "")
	{
		$output = json_encode(array('type'=>'error', 'text' => 'O campo email está vazio!'));
		die($output);
	}
	elseif ($_POST["input_sexo0"] == "")
	{
		$output = json_encode(array('type'=>'error', 'text' => 'O campo sexo está vazio!'));
		die($output);
	}
	else
	{
		//Contact 0
		$email_to 			=   'rafaelpanazzo@gmail.com,j.jessica.garrido@gmail.com'; 
		$contact_name0     	=   $_POST['input_name0'];  
		$contact_email0    	=   $_POST['input_email0'];
		$contact_sexo0  	=   $_POST['input_sexo0'];
		$contact_sapato0   	=   $_POST['input_sapato0'];

		//Contact 1
		$contact_name1     	=   $_POST['input_name1'];  
		$contact_sexo1  	=   $_POST['input_sexo1'];
		$contact_sapato1   	=   $_POST['input_sapato1'];

		//Contact 2
		$contact_name2     	=   $_POST['input_name2'];  
		$contact_sexo2  	=   $_POST['input_sexo2'];
		$contact_sapato2   	=   $_POST['input_sapato2'];

		//Contact 3
		$contact_name3    	=   $_POST['input_name3'];  
		$contact_sexo3  	=   $_POST['input_sexo3'];
		$contact_sapato3   	=   $_POST['input_sapato3'];

		//Contact 4
		$contact_name4     	=   $_POST['input_name4'];  
		$contact_sexo4  	=   $_POST['input_sexo4'];
		$contact_sapato4   	=   $_POST['input_sapato4'];

		//Contact 5
		$contact_name5     	=   $_POST['input_name5'];  
		$contact_sexo5  	=   $_POST['input_sexo5'];
		$contact_sapato5   	=   $_POST['input_sapato5'];

		//Message
    	$contact_message  	=   $_POST['input_message'];
	
    	$headers  	= "From: ".$contact_email0."\r\n";	
		$headers   .= "Reply-To: ".$contact_email0."\r\n";	
		$subject 	= "RSVP - Confirmação de ".$contact_name0;		
		
		$finalmessage = "RSVP Casamento Rafael & Jéssica \n\n\n";
		$finalmessage .= "\n Nome: $contact_name0 \n Email: $contact_email0 \n Sexo: $contact_sexo0 \n";
		if (!empty($contact_sapato0)){
			$finalmessage .= " Sapato: $contact_sapato0 \n\n";
		}	

		for ($i = 1; $i <= 5; $i++) {
			if (is_null(${'contact_name'.$i})){
				break;
			}
 			$finalmessage .= "-----------------------------------------\n\n";
			$finalmessage .= "Acompanhante $i \n";
			$finalmessage .= "\n Nome: ${'contact_name'.$i} \n Sexo: ${'contact_sexo'.$i} \n";
			if (!empty(${'contact_sapato'.$i})){
				$finalmessage .= " Sapato: ${'contact_sapato'.$i} \n\n";
			}
			 
		}

		$finalmessage .= "-----------------------------------------\n\n";
		$finalmessage .= "$contact_message \n\n";

    	if(mail($email_to, $subject, $finalmessage, $headers)){
        	$output = json_encode(array('type'=>'success', 'text' => 'Mensagem enviada'));
    	}else{
        	$output = json_encode(array('type'=>'error', 'text' => 'Erro'));
   		}		
		die($output);
	}
?>