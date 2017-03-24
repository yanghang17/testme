addLoadEvent(prepareslideshow);

function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}

//创建div与图片
function prepareslideshow() {
	var div = document.createElement("div");
	div.setAttribute("id","slideshow");
	var img = document.createElement("img");
	img.setAttribute("src","http://wx1.sinaimg.cn/large/006u2vszgy1fdy2ogjkvoj31xg08catp.jpg");
	img.setAttribute("id","preview");
	div.appendChild(img);
	var linklist = document.getElementById("linklist");
	var list = linklist.getElementsByTagName("a");
	var nav = document.getElementsByTagName("nav");
	//console.log(nav);
	var parent = nav[0].parentNode;
	//console.log(parent);
	parent.insertBefore(div,nav[0]);
	preview = document.getElementById("preview");
	console.log(preview);

	list[0].onmouseover = function() {
		movemessage("preview",-000,0,10);
	}
	list[1].onmouseover = function() {
		movemessage("preview",-500,0,10);
	}
	list[2].onmouseover = function() {
		movemessage("preview",-1000,0,10);
	}
	list[3].onmouseover = function() {
		movemessage("preview",-1500,0,10);
	}
	list[4].onmouseover = function() {
		movemessage("preview",-2000,0,10);
	}
}
//移动目标函数
function movemessage(elementid,left_x,top_y,times) {
	if (!document.getElementById) {return false};
	var elem = document.getElementById(elementid);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (!elem.style.left) {elem.style.left = "0px"};
	if (!elem.style.top) {elem.style.top = "0px"};
	var leftx = parseInt(elem.style.left);
	var topy = parseInt(elem.style.top);
	var dist = 0;
	if (leftx == left_x && topy == top_y) {return true};
	if (leftx < left_x) {
		dist = Math.ceil((left_x - leftx)/10);
		leftx = dist + leftx;
	}
	if (leftx > left_x) {
		dist = Math.ceil((leftx - left_x)/10);
		leftx = leftx - dist;
	}
	if (topy < top_y) {
		dist = Math.ceil((top_y - topy)/10);
		topy = dist + top_y;
	}
	if (topy > top_y) {
		dist = Math.ceil((topy - top_y)/10);
		topy = topy - dist;
	}
	elem.style.left = leftx + "px";
	elem.style.top = topy + "px";
	var repeat = "movemessage('"+elementid+"',"+left_x+","+top_y+","+times+")";
	elem.movement = setTimeout(repeat,times);
}
