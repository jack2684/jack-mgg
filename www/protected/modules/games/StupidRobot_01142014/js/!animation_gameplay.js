(function (lib, img, cjs) {

var p; // shortcut to reference prototypes
var name;
// stage content:
(lib.animation_gameplay = function(temp) {
	this.initialize();

	// Layer 1
	this.robot = new lib.Robot();
	this.robot.setTransform(171.5,102.8,1,1,0,0,0,0.5,-6);

	this.addChild(this.robot);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(138.3,44.3,66.5,121.2);


// symbols:
(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAh6IgXB3QgSAGgMAQQgLARAAAUQgBAcAUATQATATAaAAQAbABATgUQATgTAAgbQABgVgMgRQgMgQgSgGIgYh3").cp();
	this.shape.setTransform(-5.5,0,1,1,90,0,0,0,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,-6.5,24.6,13.2);


(lib.normalRobot = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AANgMIgZAAIAAAZIAZAAIAAgZ").cp();
	this.shape_1.setTransform(56.3,68.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjwjCIHhAAIAAGGInhAAIAAmG").cp();
	this.shape_2.setTransform(50.5,68.7,0.328,0.328);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnAoIBPAAIAAhPIhPAAIAABP").cp();
	this.shape_3.setTransform(13.1,67.6,0.328,0.328);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ADxDEInhAAIAAmGIHhAAIAAGG").cp();
	this.shape_4.setTransform(16.5,68.7,0.328,0.328);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgXAeIAvAAIAAg8IgvAAIAAA8").cp();
	this.shape_5.setTransform(36.5,86.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgXAYIAvAAIAAgvIgvAAIAAAv").cp();
	this.shape_6.setTransform(23.2,87.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKCoICVAAIAAlPIiVAAIAAFP").cp();
	this.shape_7.setTransform(30,86.5,0.328,0.185);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKBLICVAAIAAiVIiVAAIAACV").cp();
	this.shape_8.setTransform(42.8,87.2,0.328,0.328);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Agg6vIhQGEIotAAIAABqIiqAAIAABpIisAAMAAAAo/QAABTA7A6QA6A8BUAAQBTAAA6g8QA8g6AAhTITEAAQAABTA7A6QA7A8BTAAQBTAAA6g8QA7g6AAhTMAAAgo/IirAAIAAhpIirAAIAAhqIotAAIhPmEIhCAA").cp();
	this.shape_9.setTransform(33.2,56.2,0.328,0.328);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,112.5);


(lib.incorrectRobot = function() {
	this.initialize();

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AANgMIgZAAIAAAZIAZAAIAAgZ").cp();
	this.shape_10.setTransform(56.3,68.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AjwjCIHhAAIAAGGInhAAIAAmG").cp();
	this.shape_11.setTransform(50.5,68.7,0.328,0.328);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgnAoIBPAAIAAhPIhPAAIAABP").cp();
	this.shape_12.setTransform(13.1,67.6,0.328,0.328);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("ADxDEInhAAIAAmGIHhAAIAAGG").cp();
	this.shape_13.setTransform(16.5,68.7,0.328,0.328);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgXAeIAvAAIAAg8IgvAAIAAA8").cp();
	this.shape_14.setTransform(36.5,86.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgXAYIAvAAIAAgvIgvAAIAAAv").cp();
	this.shape_15.setTransform(23.2,87.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhKCoICVAAIAAlPIiVAAIAAFP").cp();
	this.shape_16.setTransform(30,86.5,0.328,0.185);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AhKBLICVAAIAAiVIiVAAIAACV").cp();
	this.shape_17.setTransform(42.8,87.2,0.328,0.328);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00FF66").s().p("AEUmOIg4AAIAAgjIi3AAIgaiAIgVAAIgaCAIi3AAIAAAjIg4AAIAAAiIg4AAIAANcQAAAbATAUQATATAbAAQAcAAATgTQATgUAAgbIGQAAQAAAbAUAUQATATAbAAQAbAAAUgTQATgUAAgbIAAtcIg4AAIAAgi").cp();
	this.shape_18.setTransform(33.3,56.2);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,112.5);


(lib.correctRobot = function() {
	this.initialize();

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AANgMIgZAAIAAAZIAZAAIAAgZ").cp();
	this.shape_19.setTransform(56.3,68.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AjwjCIHhAAIAAGGInhAAIAAmG").cp();
	this.shape_20.setTransform(50.5,68.7,0.328,0.328);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgnAoIBPAAIAAhPIhPAAIAABP").cp();
	this.shape_21.setTransform(13.1,67.6,0.328,0.328);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("ADxDEInhAAIAAmGIHhAAIAAGG").cp();
	this.shape_22.setTransform(16.5,68.7,0.328,0.328);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgXAeIAvAAIAAg8IgvAAIAAA8").cp();
	this.shape_23.setTransform(36.5,86.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgXAYIAvAAIAAgvIgvAAIAAAv").cp();
	this.shape_24.setTransform(23.2,87.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhKCoICVAAIAAlPIiVAAIAAFP").cp();
	this.shape_25.setTransform(30,86.5,0.328,0.185);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhKBLICVAAIAAiVIiVAAIAACV").cp();
	this.shape_26.setTransform(42.8,87.2,0.328,0.328);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC3300").s().p("AEUmOIg4AAIAAgjIi3AAIgaiAIgVAAIgaCAIi3AAIAAAjIg4AAIAAAiIg4AAIAANcQAAAbATAUQATATAbAAQAcAAATgTQATgUAAgbIGQAAQAAAbAUAUQATATAbAAQAbAAAUgTQATgUAAgbIAAtcIg4AAIAAgi").cp();
	this.shape_27.setTransform(33.3,56.2);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,66.5,112.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0.1,-55.7,1,1,180,0,0,-5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270.1,x:0.5,y:-55.9},10).to({rotation:360,x:0.9,y:-55.6},10).to({rotation:270.1,x:0.5,y:-55.9},10).to({scaleX:1,scaleY:1,rotation:189.1,x:0.2,y:-55.7},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-62.3,24.6,13.2);


(lib.Robot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{default:0,correctAnswer:1,incorrectAnswer:11},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_10 = function() {
		this.gotoAndStop("default");
	}
	this.frame_29 = function() {
		this.gotoAndStop("default");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10).call(this.frame_10).wait(19).call(this.frame_29));

	// Layer 1
	this.instance_1 = new lib.normalRobot();
	this.instance_1.setTransform(0.5,0.5,1,1,0,0,0,33.2,56.2);

	this.spinner = new lib.Symbol1();
	this.spinner.setTransform(-5.1,-57.8,1,1,0,0,0,-5.4,-55.8);

	this.instance_2 = new lib.incorrectRobot();
	this.instance_2.setTransform(0.5,0.5,1,1,0,0,0,33.2,56.2);

	this.instance_3 = new lib.correctRobot();
	this.instance_3.setTransform(0.5,0.5,1,1,0,0,0,33.2,56.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spinner,p:{x:-5.1,y:-57.8}},{t:this.instance_1}]}).to({state:[{t:this.spinner,p:{x:-5.1,y:-57.8}},{t:this.instance_2}]},1).to({state:[{t:this.spinner,p:{x:-5.6,y:-56.9}},{t:this.instance_3}]},10).wait(19));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-64.4,66.5,121.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;