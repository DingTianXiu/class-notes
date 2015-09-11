$(document).ready(function () {
	

	//隐藏和显示
	$("#hide").click(function(){
		$("p").hide();
	})
	$("#show").click(function(){
		$("p").show();
	})
	$("#sah").click(function(){
		$("p").toggle();
	});


	//淡入和淡出
	$("#in").click(function(){
		$("#div1").fadeIn();
		$("#div2").fadeIn("show");
		$("#div3").fadeIn(2000);
	})
	$("#out").click(function(){
		$("#div1").fadeOut();
 		$("#div2").fadeOut("slow");
 		$("#div3").fadeOut(3000);
	})
	$("#fade-toggle").click(function(){
		$("#div1").fadeToggle();
 		$("#div2").fadeToggle("slow");
  		$("#div3").fadeToggle(3000);
	})
	$("#to").click(function(){
		$("#div1,#div2,#div3").fadeTo("slow",0.4);
	})
	

	
})