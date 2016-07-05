$(function(){
	$articleTag=$("#accordion .submenu li");
	$articleTag.click(function(){
		var id=this.id;
		var item = this.className;
		var idUrl="tpls/"+item+"/"+id+".html";
		$("article").load(idUrl);
	});
});