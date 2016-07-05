window.onload = function(){
	var homepageBar = document.getElementById("to_homepage");
	var sideBarList = document.getElementById("sidebar").getElementsByTagName("li");
	var sideBarDotList = document.getElementById('sidebar').getElementsByClassName('side_circle');
	var sideBarChange = function(a){
			for(var i = 0;i<sideBarList.length;i++)
			{
				sideBarList[i].style.opacity = 0.5;
				sideBarDotList[i].style.background = "none";
			}
			sideBarList[a].style.opacity = 1.0;
			sideBarDotList[a].style.background = "#FF4500";
	}
	for(var i=0; i<sideBarList.length; i++){
		(function(index){
			sideBarList[index].onclick = function(){
				document.body.scrollTop = 104+index*704;
				sideBarChange(index);
			}
		})(i);	
	}
	homepageBar.onclick = function(){
		location.href="index.html";
	}
	document.onmousewheel = function(){
		 var scrollTopRecord = document.body.scrollTop;
		 switch(true) {
		 	case scrollTopRecord <= 600:
		 		sideBarChange(0);
		 		break;
		 	case scrollTopRecord > 600 && scrollTopRecord <= 600+700*1:
		 		sideBarChange(1);
		 		break;
		 	case scrollTopRecord > 600+700*1 && scrollTopRecord <= 600+700*2:
		 		sideBarChange(2);
		 		break;
		 	case scrollTopRecord > 600+700*2 && scrollTopRecord <= 600+700*3:
		 		sideBarChange(3);
		 		break;
		 	case scrollTopRecord > 600+700*3 && scrollTopRecord <= 600+700*4:
		 		sideBarChange(4);
		 		break;
		 	case scrollTopRecord > 600+700*4 && scrollTopRecord <= 600+700*5:
		 		sideBarChange(5);
		 		break;
		 	default:
		 		sideBarChange(6);
		 }
	}
}