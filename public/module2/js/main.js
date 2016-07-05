window.onload = function(){
	var sideList = document.getElementById("side_tool").getElementsByTagName("li");
	var contentList = document.getElementById("side_content").getElementsByTagName("div");
	for (var i = 0; i < sideList.length; i++){
		(function(index){
				sideList[index].onmouseover = function(){
				contentList[index].style.display = "block";
			}
				sideList[index].onmouseout = function(){
				contentList[index].style.display = "none";
			}
		})(i);
	}
}
