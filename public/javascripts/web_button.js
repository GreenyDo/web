$(function(){
	// 演示
	$("#web_content .button_code:eq(0)").click(function(){
		 	window.open('https://github.com/greenydo/module');
	});
	$("#web_content .button_code:eq(1)").click(function(){
		 	window.open('https://github.com/greenydo/module2');
	});
	$("#web_content .button_code:eq(2)").click(function(){
		 	window.open('https://github.com/greenydo/module3');
	});
	// 布局
	$("#web_content .button_code:eq(3)").click(function(){
		 	window.open('/web_code_tpls/layout1.html');
	});
	$("#web_content .button_code:eq(4)").click(function(){
		 	window.open('/web_code_tpls/layout3.html');
	});
	$("#web_content .button_code:eq(5)").click(function(){
		 	window.open('/web_code_tpls/layout4.html');
	});
	$("#web_content .button_code:eq(6)").click(function(){
		 	window.open('/web_code_tpls/layout2.html');
	});
	// 
	$("#codebox1").load("web_code_tpls/css1.html");
	$("#codebox2").load("web_code_tpls/css2.html");
	$("#codebox3").load("web_code_tpls/css3.html");
	$("#codebox4").load("web_code_tpls/css4.html");
	
});
