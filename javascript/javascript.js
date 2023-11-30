displayMenu = function(){
				if (!display){
					$("nav").animate({"left":"0%"}, 1000)
				}else{
					$("nav").animate({"left":"-150%"}, 1000)
				}
				display = !display
			}
			display = false
			setup = function() {
				$(".bar").click(displayMenu)
			}
			$(document).ready(setup)



			wow = new WOW();
				wow.init();