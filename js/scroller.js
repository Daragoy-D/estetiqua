		function j_scroller(a){
			if (a!="scroll"){
				var i;
				element = document.getElementById("feedback");
				backPosX = window.getComputedStyle(element).backgroundPositionX;
				parsPos = parseInt(backPosX, 10);
				
				var start = Date.now(); 
				var timer = setInterval(function() {
				var timePassed = Date.now() - start;
					if (timePassed >= 1047) 
						{
							clearInterval(timer); 
							return;
						}
						
						//tut vsia huinya
				 if (a=="left"){ element.style.backgroundPositionX = parsPos - timePassed/1.5  + 'px';}
					else {element.style.backgroundPositionX = parsPos + timePassed/1.5  + 'px';}

				}, 2);
			}
			else
			{
				var $page = $('html, body');
				$('a[href*="#"]').click(function() {
					$page.animate({
						scrollTop: $($.attr(this, 'href')).offset().top
					}, 1000);
					return false;
				});
			}
			
			
			
		}