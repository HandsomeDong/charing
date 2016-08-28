(function ( $ ) {

	$.fn.BootSideMenu = function( options ) {

		var oldCode, newCode, side;

		newCode = "";

		var settings = $.extend({
			side:"left",
			autoClose:true
		}, options );

		side = settings.side;
		autoClose = settings.autoClose;

		this.addClass("container sidebar");

		if(side=="left"){
			this.addClass("sidebar-left");
		}else if(side=="right"){
			this.addClass("sidebar-right");
		}else{
			this.addClass("sidebar-left");	
		}

		oldCode = this.html();

		newCode += "<div class=\"row\">\n";
		newCode += "<div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\" data-side=\""+side+"\">\n"+ oldCode+" </div>\n";
		newCode += "</div>";
		// newCode += "<div class=\"toggler\">\n";
		// newCode += "	<span class=\"glyphicon glyphicon-chevron-right\">&nbsp;</span> <span class=\"glyphicon glyphicon-chevron-left\">&nbsp;</span>\n";
		// newCode += "</div>\n";

		//Mod suggested by asingh3
		//https://github.com/AndreaLombardo/BootSideMenu/issues/1
		
		//this.html(newCode);
	
    		var wrapper = $(newCode);
		// copy the children to the wrapper.
		$.each(this.children(), function () {
			$('.panel-content', wrapper).append(this);
		});

		// Empty the element and then append the wrapper code.
		$(this).empty();
		$(this).append(wrapper);

		if(autoClose){
			// $("#my-register-link").trigger("click");
			var container = $("#demo");
		// 	var listaClassi = $(container[0]).attr('class').split(/\s+/); //IE9 Fix - Thanks Nicolas Renaud
		// 	var side = getSide(listaClassi);
		// 	if(side=="left"){
		// 		container.animate({
		// 			left:-(containerWidth+2)
		// 		});
		// 	}else if(side=="right"){
				container.css("right",- (container.width() +2));
		// 	}
			container.attr('data-status', 'closed');
		}

	};

//Hacked by HandsomeDong, not good
	$(document).on('click','#my-register-link', function(){
		var container = $("#demo");
		//var listaClassi = container[0].classList; //Old
		var listaClassi = $(container[0]).attr('class').split(/\s+/); //IE9 Fix - Thanks Nicolas Renaud
		var side = getSide(listaClassi);
		var containerWidth = container.width();
		var status = container.attr('data-status');
		if(!status){
			status = "opened";
		}
		doAnimation(container, containerWidth, side, status);
		/*$(".container-fluid").css("margin-right","600px");*/
	});

	/*Cerca un div con classe submenu e id uguale a quello passato*/
	function searchSubMenu(id){
		var found = false;
		$('.submenu').each(function(){
			var thisId = $(this).attr('id');
			if(id==thisId){
				found = true;
			}
		});
		return found;
	}

//restituisce il lato del sidebar in base alla classe che trova settata
function getSide(listaClassi){
	var side;
	for(var i = 0; i<listaClassi.length; i++){
		if(listaClassi[i]=='sidebar-left'){
			side = "left";
			break;
		}else if(listaClassi[i]=='sidebar-right'){
			side = "right";
			break;
		}else{
			side = null;
		}
	}
	return side;
}
//esegue l'animazione
function doAnimation(container, containerWidth, sidebarSide, sidebarStatus){
	if(sidebarStatus=="opened"){
		if(sidebarSide=="left"){
			container.animate({
				left:-(containerWidth+2)
			});
		}else if(sidebarSide=="right"){
			container.animate({
				right:- (containerWidth +2)
			});
		}
		container.attr('data-status', 'closed');
	}else{
		if(sidebarSide=="left"){
			container.animate({
				left:0
			});

		}else if(sidebarSide=="right"){
			container.animate({
				right:0
			});

		}
		container.attr('data-status', 'opened');

	}

}

function toggleArrow(toggler, side){
	if(side=="left"){
		$(toggler).children(".glyphicon-chevron-right").css('display', 'block');
		$(toggler).children(".glyphicon-chevron-left").css('display', 'none');
	}else if(side=="right"){
		$(toggler).children(".glyphicon-chevron-left").css('display', 'block');
		$(toggler).children(".glyphicon-chevron-right").css('display', 'none');
	}
}

function onWindowResize() {
	 $(".toggler").each( function(){
		var container = $(this).parent();
		var listaClassi = $(container[0]).attr('class').split(/\s+/); 
		var side = getSide(listaClassi);
		
		var status = container.attr('data-status');
		var containerWidth = container.width();
		if (status==="closed") {
			if(side=="left"){
				container.css("left",-(containerWidth+2))

			}else if(side=="right"){
				container.css("right",-(containerWidth+2))

			}
		}
	})
}
window.addEventListener('resize', onWindowResize, false);
}( jQuery ));

