<?php
if(isset($_POST["action"])):
	if($_POST["action"]=="sendform"):
		
		
		if($_POST["project"]=='eventors'){$project='eventors';}
		if($_POST["project"]=='club'){$project='club';}
		if($_POST["project"]=='fire'){$project='fire';}
		if($_POST["project"]=='tort'){$project='tort';}
		if($_POST["project"]=='atcoin'){$project='tort + fire';}
		if($_POST["project"]=='bonus'){$project='bonus';}
		
		
			
				
				$page="vk.com/id".$_POST["id"];
				$title=$project; 
				$mail="booking.estetiqua@gmail.com"; 
				$from='mail@estetiqua.com.ua';
				$message="Страница: $page";
				mail($mail, $title, $message, "From: $from
												Reply-To: $from
												Content-Type: text/plain; charset=windows-1251
												Content-Transfer-Encoding: Site"
												);
			

	endif;
else:
	die;
endif;
?>