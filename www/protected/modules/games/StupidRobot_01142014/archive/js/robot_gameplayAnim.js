(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.robot_gameAnim = function() {
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


(lib.Symbol2 = function() {
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
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKCoICVAAIAAlPIiVAAIAAFP").cp();
	this.shape_5.setTransform(36.5,86.5,0.328,0.185);

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


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(0.1,-55.7,1,1,180,0,0,-5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:270.1,x:0.5,y:-55.9},10).to({rotation:360,x:0.9,y:-55.6},10).to({rotation:270.1,x:0.5,y:-55.9},10).to({scaleX:1,scaleY:1,rotation:189.1,x:0.2,y:-55.7},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-62.3,24.6,13.2);


(lib.Robot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{default:0,incorrectAnswe:9,correctAnswer:19},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.gotoAndStop("default");
	}
	this.frame_18 = function() {
		this.gotoAndStop("default");
	}
	this.frame_29 = function() {
		this.gotoAndStop("default");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(10).call(this.frame_18).wait(11).call(this.frame_29));

	// Layer 1
	this.instance_1 = new lib.Symbol2();
	this.instance_1.setTransform(0.5,0.5,1,1,0,0,0,33.2,56.2);

	this.spinner = new lib.Symbol1();
	this.spinner.setTransform(-5.1,-57.8,1,1,0,0,0,-5.4,-55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.spinner,p:{rotation:0,x:-5.1,y:-57.8}},{t:this.instance_1,p:{rotation:0,x:0.5,y:0.5,regY:56.2}}]}).to({state:[{t:this.spinner,p:{rotation:-89.9,x:-53.4,y:1.9}},{t:this.instance_1,p:{rotation:-89.9,x:4.9,y:-3.7,regY:56.2}}]},9).to({state:[{t:this.spinner,p:{rotation:135,x:42.8,y:30.3}},{t:this.instance_1,p:{rotation:135,x:-2.4,y:-6.8,regY:56.1}}]},10).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-64.4,66.5,121.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;