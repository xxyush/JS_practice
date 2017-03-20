

	function Drag(divId){

		this.oDiv=document.getElementById(divId);
		this.disX=null;
		this.disY=null;
		var _this=this;
		this.oDiv.onmousedown=function(){
			_this.dragMouseDown();
			return false;
		}

		
	};

	Drag.prototype.dragMouseDown= function() {
		    var oEvent= arguments.callee.caller.arguments[0]||window.event;
		    var _this=this;
			disX=oEvent.clientX-this.oDiv.offsetLeft;
			disY=oEvent.clientY-this.oDiv.offsetTop;
			document.onmousemove=function(){
				_this.dragMouseMove();
			}
			document.onmouseup=function(){
				_this.dragMouseUp();
			}
			

		
	};

		Drag.prototype.dragMouseMove=function(){
				var oEvent= arguments.callee.caller.arguments[0]||window.event;
				var l=oEvent.clientX-this.disX;
				var t=oEvent.clientY-this.disY;
				if(l<0){
					l=0;
				}else if(l>document.documentElement.clientWidth-this.oDiv.offsetWidth){
					l=document.documentElement.clientWidth-this.oDiv.offsetWidth;
				}
				if(t<0){
					t=0;
				}else if(t>document.documentElement.clientHeight-this.oDiv.offsetHeight){
					t=document.documentElement.clientHeight-this.oDiv.offsetHeight;
				}
				this.oDiv.style.left=l+"px";
				this.oDiv.style.top=t+"px";
		};
		Drag.prototype.dragMouseUp=function(){
				document.onmousedown=null;
				document.onmousemove=null;
				

			
		};