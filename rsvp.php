<?php 
	
	if ($_POST["input_name"] == "")
	{
		$output = json_encode(array('type'=>'error', 'text' => 'O campo nome está vazio!'));
		die($output);
	}
	elseif ($_POST["input_email"] == "")
	{
		$output = json_encode(array('type'=>'error', 'text' => 'O campo email está vazio!'));
		die($output);
	}
	else
	{
		$email_to 			=   'rafaelpanazzo@gmail.com'; 
		$contact_name     	=   $_POST['input_name'];  
		$contact_email    	=   $_POST['input_email'];
    	$contact_message  	=   $_POST['input_message'];
	
    	$headers  	= "From: ".$contact_email."\r\n";	
		$headers   .= "Reply-To: ".$contact_email."\r\n";	
		$subject 	= "RSVP message from Mr/Mrs ".$contact_name;		
		
		$finalmessage = "$contact_message \n\n";

    	if(mail($email_to, $subject, $finalmessage, $headers)){
        	$output = json_encode(array('type'=>'success', 'text' => 'Mensagem enviada'));
    	}else{
        	$output = json_encode(array('type'=>'error', 'text' => 'Erro'));
   		}		
		die($output);
	}
?>