$(function(){
	$("#web_content .button_code:eq(0)").click(function(){
		 	window.open('https://github.com/greenydo/module');
	});
	$("#web_content .button_code:eq(1)").click(function(){
		 	window.open('https://github.com/greenydo/module2');
	});
	$("#web_content .button_code:eq(2)").click(function(){
		 	window.open('https://github.com/greenydo/module3');
	});
	// 
	$cssBoxList = $("web_content .button_code:gt(2)");
	// 
	$("#codebox1").load("web_code_tpls/css1.html");
	$("#codebox2").load("web_code_tpls/css2.html");
	$("#codebox3").load("web_code_tpls/css3.html");
	$("#codebox4").load("web_code_tpls/css4.html");
	
});
