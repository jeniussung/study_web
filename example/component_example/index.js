// function Rectangle(){
// }

// Rectangle.prototype = new eg.Component();
// Rectangle.prototype.constructor = Rectangle;
// Rectangle.prototype.some = function(){
// 	console.log("a");
// }

// var rt = new Rectangle();
// rt.some();
// rt.on("click",function(){ // 이벤트 등록
// 	console.log("aa");
// });

// rt.trigger("click"); // 이벤트 실행


// var Rectangle = extend(eg.Component,{
// 	init : function(){
// 	},
// 	some : function(){
// 		this.trigger("hi",{"a":1})
// 	}
// })

// var rt = new Rectangle();

// function callback(e){
// 	console.log("hi", e);
// 	rt.off(callback);
// }

// rt.on("hi",callback);
/*
reference
- https://github.com/naver/egjs/blob/master/README-ko.md
- http://naver.github.io/egjs/latest/doc/eg.Class.html#extend
*/

var Rectangle = class Some extends eg.Component {
	hi() {
		// $(document).write("hi! <br>");
		document.write("<h1>hi!</h1> </br>");
	}
	thing() {
		this.once("hi", this.hi);
	}
}

var some = new Rectangle();

some.thing();
some.trigger("hi");
some.trigger("hi");