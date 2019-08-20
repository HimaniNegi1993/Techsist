/*================================================================*/
/*=========================content page============================*/
/*================================================================*/
function ok(){
	document.getElementById("page").style.marginLeft="0in";
	document.getElementById("page").style.opacity="1";
	document.getElementById("page").style.transition="1s";
}
/*================================================================*/
/////////////////////// load
$(window).load(function() {	
	setTimeout(function () {					
  		$('#spinner').fadeOut();		
  		$(window).trigger('resize');
  		start();
	}, 100);
	setTimeout(function () {$("#jquery_jplayer").jPlayer("play");}, 2000);	
});
	




