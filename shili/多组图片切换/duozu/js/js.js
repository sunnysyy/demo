window.onload=function(){
	var left1=document.getElementById("left1");
	var right1=document.getElementById("right1");
	var left2=document.getElementById("left2");
	var right2=document.getElementById("right2");
	var prevbtn=document.getElementById("prevbtn");
	var nextbtn=document.getElementById("nextbtn");
	var p1=document.getElementById("p1");
	var p2=document.getElementById("p2");
	var im1=document.getElementById("im1");
	var im2=document.getElementById("im2");
	var Le=['images/1.jpg','images/2.jpg','images/3.jpg','images/4.jpg','images/5.jpg'];
	var Ri=['images/6.jpg','images/7.jpg','images/8.jpg','images/9.jpg'];
	var p3=document.getElementById("p3");
	var p4=document.getElementById("p4");
	var i=0;
	var s=0;
	var n=Le.length;
	var t=Ri.length;
	left1.onclick=function(){
		i--;
		if(i<0){
			i=n-1;
		}
		leftchange();
	};
	right1.onclick=function(){
		i++;
		if(i>n-1){
			i=0;}
		leftchange();
	};
	left2.onclick=function(){
		s--;
		if(s<0){
			s=t-1;
		}
		rightchange();
	};
	right2.onclick=function(){
		s++;
		if(s>t-1){
			s=0;
		}
		rightchange();
	};
	function leftchange(){
		im1.src=Le[i];
		p1.innerHTML='第一组&nbsp;&nbsp;第'+(i+1)+'张';
		p2.innerHTML=i+1+'/5';
	}
	function rightchange(){
		im2.src=Ri[s];
		p3.innerHTML='第二组&nbsp;&nbsp;第'+(s+1)+'张';
		p4.innerHTML=s+1+'/4';
	}
	prevbtn.onclick=function(){
			i--;
		if(i<0){
			i=n-1;
		}
		leftchange();
		s--;
		if(s<0){
			s=t-1;
		}
		rightchange();
	}
	nextbtn.onclick=function(){
		i++;
		if(i>n-1){
			i=0;}
		leftchange();
		s++;
		if(s>t-1){
			s=0;
		}
		rightchange();
	}
};