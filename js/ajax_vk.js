function ajax_vk(id_user,project_name){
	
	var msg="&project="+project_name+"&id="+id_user+"&action=sendform";
	
	$.ajax({
							type:'POST',
							url:"sender_vk.php",
							data:msg,
							cache:false
						});
						
						j_shower('eventors_form','close');
						j_shower('atcoin_form','close');
						j_shower('fire_form','close');
						j_shower('tort_form','close');	
						j_shower('club_form','close');
						j_shower('bonus','close');
						document.getElementById('mail_alert_parent').style.visibility="visible";
}