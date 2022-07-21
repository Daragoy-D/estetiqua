		var Site={serverName: 'www.estetiqua.com.ua'} 
		function sendform(form_name){
			if (form_name=='myform_call_back_form'){field=document.forms[form_name].tel.value}
			else{field=document.forms[form_name].email.value}
			
			if(field!=0 ){
					var msg=$('#'+form_name).serialize();
					$.ajax({
							type:'POST',
							url:"sender.php",
							data:msg+"&action=sendform",
							cache:false
						});
							//j_shower('call_visibility','close');
							j_shower('eventors_form','close');
							j_shower('atcoin_form','close');
							j_shower('fire_form','close');
							j_shower('tort_form','close');	
							j_shower('club_form','close');
							j_shower('bonus','close');
							document.getElementById('mail_alert_parent').style.visibility="visible";
					
				}	
		}
		
