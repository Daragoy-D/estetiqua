<?php
if(isset($_POST["action"])):
	if($_POST["action"]=="sendform"):
		
		
		if($_POST["project"]=='eventors_email'){$project='Eventor';}
		if($_POST["project"]=='club_email'){$project='Club';}
		if($_POST["project"]=='fire_email'){$project='Fire';}
		if($_POST["project"]=='tort_email'){$project='Tort';}
		if($_POST["project"]=='atcoin_email'){$project='Tort + fire';}
		if($_POST["project"]=='bonus_email'){$project='Bonus';}
		
		if($_POST["project"]=='call_back'){
			$project="Call back";
			$tel=$_POST["tel"];
			$title=$project; 
			if(($project == 'Fire') or ($project == 'Tort + fire'))
				{$mail="murchik.mur@gmail.com"; }
			else
				{$mail="booking.estetiqua@gmail.com"; }
			
			$from='mail@estetiqua.com.ua';
			$message="Number: $tel";
			mail($mail, $title, $message, "From: $from
											Reply-To: $from
											Content-Type: text/plain; charset=windows-1251
											Content-Transfer-Encoding: Site"
											);
		}
		else{
				$email=$_POST["email"];
				$title=$project; 
				if(($project == 'Fire') or ($project == 'Tort + fire'))
					{$mail="murchik.mur@gmail.com"; }
				else
					{$mail="booking.estetiqua@gmail.com"; }
				$from='mail@estetiqua.com.ua';
				$message="E-mail: $email";
				mail($mail, $title, $message, "From: $from
												Reply-To: $from
												Content-Type: text/plain; charset=windows-1251
												Content-Transfer-Encoding: Site"
												);}
			
				
				
			

	endif;
else:
	die;
endif;
?>