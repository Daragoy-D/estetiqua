		function j_shower(a,b){
		
	
		
			if (a=="bonus")
				{
					if (b!="close")
						{	
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
									document.getElementById("bonus_big_box").style.opacity=timePassed/500;
									document.getElementById("shadow_box_bonus").style.opacity=timePassed/500;
									
								}, 2);
							document.getElementById('bonus_butt').style.display="none";
							document.getElementById('bonus_big_box').style.display="block";
							document.getElementById("shadow_box_bonus").style.visibility="visible";
						}
					else
						{
							document.getElementById('bonus_butt').style.display="block";
							document.getElementById('bonus_big_box').style.display="none";
							document.getElementById("shadow_box_bonus").style.visibility="hidden";
							document.getElementById('mail_bonus').style.display="block";
							document.getElementById('bonus_form_email').style.display="none";
							document.getElementById("bonus_big_box").style.opacity=0;
							document.getElementById("shadow_box_bonus").style.opacity=0;
							document.getElementById("bonus_form_email").style.opacity=0;
						}
				}
			
			if (a=="bonus_form_email")
				{	
					var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById("bonus_form_email").style.opacity=timePassed/500;
									
								}, 2);
					document.getElementById('mail_bonus').style.display="none";
					document.getElementById('bonus_form_email').style.display="block";
				}		
				
			if (a=="Tort_photo" || a=="Tort_video")
				{
					if (b!="close")
						{
							var selectedPosY = 0;
								theElement = document.getElementById("1");
								
							while (theElement != null) {
								selectedPosY += theElement.offsetTop;
								theElement = theElement.offsetParent;
							}
							window.scrollTo(0,selectedPosY);
							
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
						
							document.getElementById(a).style.display="block";
							document.getElementById('Tort_box').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('Tort_box').style.display="flex";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
			if (a=="tort_form")
				{
					if (b!="close")
						{
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							document.getElementById(a).style.display="block";
							document.getElementById('tort_butt').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('tort_butt').style.display="block";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById('mail_tort').style.display="block";
							document.getElementById('tort_form_email').style.display="none";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
			
			if (a=="tort_form_email")
				{
					document.getElementById('mail_tort').style.display="none";
					document.getElementById('tort_form_email').style.display="block";
				}
			
			
			
			if (a=="Fire_photo" || a=="Fire_video")
				{
					if (b!="close")
						{
							
							var selectedPosY = 0;
								theElement = document.getElementById("2");
								
							while (theElement != null) {
								selectedPosY += theElement.offsetTop;
								theElement = theElement.offsetParent;
							}
							window.scrollTo(0,selectedPosY);
							
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							
							document.getElementById(a).style.display="block";
							document.getElementById('Fire_box').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('Fire_box').style.display="flex";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
			if (a=="fire_form")
				{
					if (b!="close")
						{
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							document.getElementById(a).style.display="block";
							document.getElementById('fire_butt').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('fire_butt').style.display="block";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById('mail_fire').style.display="block";
							document.getElementById('fire_form_email').style.display="none";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
				if (a=="fire_form_email")
				{
					document.getElementById('mail_fire').style.display="none";
					document.getElementById('fire_form_email').style.display="block";
					document.getElementById(a).style.opacity=1;
				}
				
			if (a=="freak_v_p" || a=="vader_v_p")
				{
					if (b!="close")
						{
							var selectedPosY = 0;
								theElement = document.getElementById("3");
								
							while (theElement != null) {
								selectedPosY += theElement.offsetTop;
								theElement = theElement.offsetParent;
							}
							window.scrollTo(0,selectedPosY);
							
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							
							document.getElementById(a).style.display="block";
							document.getElementById('club_box').style.display="none";
							document.getElementById('club_butt').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('club_box').style.display="flex";
							document.getElementById('club_butt').style.display="block";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
			if (a=="club_form")
				{
					if (b!="close")
						{
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							document.getElementById(a).style.display="block";
							document.getElementById('club_butt').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('club_butt').style.display="block";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById('mail_club').style.display="block";
							document.getElementById('club_form_email').style.display="none";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
				if (a=="club_form_email")
				{
					document.getElementById('mail_club').style.display="none";
					document.getElementById('club_form_email').style.display="block";
				}
				
			if (a=="atcoin_form")
				{
					if (b!="close")
						{
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							document.getElementById(a).style.display="block";
							document.getElementById('atcoin_butt').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('atcoin_butt').style.display="block";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById('mail_atcoin').style.display="block";
							document.getElementById('atcoin_form_email').style.display="none";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
				if (a=="atcoin_form_email")
				{
					document.getElementById('mail_atcoin').style.display="none";
					document.getElementById('atcoin_form_email').style.display="block";
				}
				
			if (a=="eventors_form")
				{
					if (b!="close")
						{
							var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 500) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
							
									document.getElementById(a).style.opacity=timePassed/500;
									document.getElementById("shadow_box_"+a).style.opacity=timePassed/500;
									
								}, 2);
							document.getElementById(a).style.display="block";
							document.getElementById('eventors_butt').style.display="none";
							document.getElementById("shadow_box_"+a).style.visibility="visible";
						}
					else
						{
							document.getElementById(a).style.display="none";
							document.getElementById('eventors_butt').style.display="block";
							document.getElementById("shadow_box_"+a).style.visibility="hidden";
							document.getElementById('mail_eventors').style.display="block";
							document.getElementById('eventors_form_email').style.display="none";
							document.getElementById(a).style.opacity=0;
							document.getElementById("shadow_box_"+a).style.opacity=0;
						}
				}
				
				if (a=="eventors_form_email")
				{
					document.getElementById('mail_eventors').style.display="none";
					document.getElementById('eventors_form_email').style.display="block";
				}

			if (a=="call_back_form")
				{
					if (b!="close")
						{
							document.getElementById("call_back_form").style.visibility="visible";
							document.getElementById("call_back_panel").style.visibility="hidden";
						}
					else
						{
							document.getElementById("call_back_form").style.visibility="hidden";
							document.getElementById("call_back_panel").style.visibility="visible";
						}
				}
			if (a=="call_visibility")
				{element = document.getElementById("call_big_box");
					//alert(parsPos);
					if (b!="close" && document.getElementById("shadow_box_call_back").style.visibility=="hidden")
							{	
								document.getElementById("shadow_box_call_back").style.visibility="visible";
								document.getElementById("gra_panel").style.visibility="visible";
								document.getElementById("dor_panel").style.visibility="visible";
								document.getElementById("ryb_panel").style.visibility="visible";
								document.getElementById("gra").style.visibility="visible";
								document.getElementById("dor").style.visibility="visible";
								document.getElementById("ryb").style.visibility="visible";
								document.getElementById("call_back_panel").style.visibility="visible";
								document.getElementById("call_button").style.backgroundPositionX="90px";
								document.getElementById("call_button").style.marginLeft="290px";
								document.getElementById("call_big_box").style.height="400px";
								document.getElementById("call_big_box").style.width="380px";
								buf1=parseInt(window.getComputedStyle(element).left, 10)-275;
								document.getElementById("call_big_box").style.left=buf1+"px";
								k=1;
								var start = Date.now(); 
								var timer = setInterval(function() {
								var timePassed = Date.now() - start;
									if (timePassed >= 1000) 
										{
											clearInterval(timer); 
											return;
										}
										
										//tut vsia huinya
									
									document.getElementById("shadow_box_call_back").style.opacity=timePassed/1000;
									document.getElementById("gra_panel").style.opacity=timePassed/1000;
									document.getElementById("dor_panel").style.opacity=timePassed/1000;
									document.getElementById("ryb_panel").style.opacity=timePassed/1000;
									document.getElementById("gra").style.opacity=timePassed/1000;
									document.getElementById("dor").style.opacity=timePassed/1000;
									document.getElementById("ryb").style.opacity=timePassed/1000;
									document.getElementById("call_back_panel").style.opacity=timePassed/1000;
								}, 2);
							}
						else
							{
								document.getElementById("call_back_form").style.visibility="hidden";
								document.getElementById("shadow_box_call_back").style.visibility="hidden";
								document.getElementById("gra_panel").style.visibility="hidden";
								document.getElementById("dor_panel").style.visibility="hidden";
								document.getElementById("ryb_panel").style.visibility="hidden";
								document.getElementById("gra").style.visibility="hidden";
								document.getElementById("dor").style.visibility="hidden";
								document.getElementById("ryb").style.visibility="hidden";
								document.getElementById("call_back_panel").style.visibility="hidden";
								document.getElementById("call_button").style.backgroundPositionX="0px";
								document.getElementById("call_button").style.marginLeft="0px";
								document.getElementById("call_big_box").style.height="0px";
								document.getElementById("call_big_box").style.width="0px";
								if (k==1){
									buf1=parseInt(window.getComputedStyle(element).left, 10)+275;
									document.getElementById("call_big_box").style.left=buf1+"px";
									k=0;
								}
								document.getElementById("shadow_box_call_back").style.opacity=0;
								document.getElementById("gra_panel").style.opacity=0;
								document.getElementById("dor_panel").style.opacity=0;
								document.getElementById("ryb_panel").style.opacity=0;
								document.getElementById("gra").style.opacity=0;
								document.getElementById("dor").style.opacity=0;
								document.getElementById("ryb").style.opacity=0;
								document.getElementById("call_back_panel").style.opacity=0;
								
							}
					
				}
				
		}