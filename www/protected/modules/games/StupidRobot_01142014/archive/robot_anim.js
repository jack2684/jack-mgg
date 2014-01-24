(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.robot_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.objects.stop();
	}
	this.frame_275 = function() {
		this.objects.gotoAndStop(this.objects.timeline.position + 1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(275).call(this.frame_275));

	// FlashAICB
	this.robot = new lib.Robot();
	this.robot.setTransform(356,117.2,1,1,0,0,0,0.5,-6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANgMIgZAAIAAAZIAZAAIAAgZ").cp();
	this.shape.setTransform(373.5,136.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjwjCIHhAAIAAGGInhAAIAAmG").cp();
	this.shape_1.setTransform(373.2,136.3,0.328,0.328);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABigDIhUBTQgJAIgHgIIgTgTQgEgEAAgFQAAgFAEgEIBShSQAQgQAAgVQAAgWgPgPQgPgPgWAAIgxAAQgWAAgPAPQgPAPAAAWQAAAFgEAEQgEAEgFAAIgaAAQgGAAgDgEQgEgEAAgFQAAgrAfgeQAegfArAAIAxAAQArAAAeAfQAfAeAAArQAAArgfAeIAAAAAAMC1IgXAAQgGAAgEgEQgDgEAAgFIAAgaQAAgGADgDQAEgEAGAAIAXAAQAGAAAEAEQADADAAAGIAAAaQAAAFgDAEQgEAEgGAAIAAAA").cp();
	this.shape_2.setTransform(419.1,70.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(2,1,1).p("ABGg9IiMB7");
	this.shape_3.setTransform(401.1,90.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.robot}]}).to({state:[{t:this.robot},{t:this.shape_1},{t:this.shape}]},187).to({state:[{t:this.robot}]},2).to({state:[{t:this.shape_3},{t:this.robot},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.robot}]},2).to({state:[{t:this.shape_3},{t:this.robot},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).to({state:[{t:this.shape_3},{t:this.robot}]},2).to({state:[{t:this.shape_3},{t:this.robot},{t:this.shape_2}]},2).to({state:[{t:this.shape_3},{t:this.robot},{t:this.shape_2}]},2).to({state:[{t:this.robot}]},19).to({state:[{t:this.robot}]},55).wait(1));

	// questioner
	this.instance = new lib.SubAnimation();
	this.instance.setTransform(385.6,135.3,0.007,1,0,0,0,109.4,-5.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(133).to({_off:false},0).to({regX:108.7,regY:-5.8,scaleX:0.84,scaleY:1.04,skewX:58.3,skewY:-22.3,x:382.2,y:133.5},3).to({regX:112.5,regY:-5.2,scaleX:1.11,scaleY:0.76,rotation:-11.1,skewX:0,skewY:0,x:378.1,y:131.5},3).to({regX:112.3,regY:-5.3,scaleX:0.74,scaleY:0.87,rotation:-14.8,x:378,y:131.7},2).to({regX:112.4,scaleX:1.04,scaleY:0.79,rotation:-3.4,x:378.1},2).to({scaleX:0.68,rotation:0,skewX:169.2,skewY:-10.6,y:131.5},3).to({regX:112.3,regY:-5.4,scaleX:0.84,scaleY:0.83,rotation:2.1,skewX:0,skewY:0,y:131.7},2).to({regX:112.2,regY:-5.3,scaleX:0.93,scaleY:0.7,rotation:10.7,x:378,y:131.6},2).to({scaleX:0.68,scaleY:1.1,rotation:-0.1},2).to({regX:112.5,regY:-5.2,scaleX:1.11,scaleY:0.76,rotation:-11.1,x:378.1,y:131.5},2).to({regX:112.3,regY:-5.3,scaleX:0.74,scaleY:0.87,rotation:-8.1,x:378,y:131.7},2).to({regX:112.4,scaleX:1.04,scaleY:0.79,rotation:-11.8,x:378.1,y:131.8},2).to({scaleX:1.02,scaleY:0.89,rotation:-17.4,x:360.8,y:134.4},2).to({regX:112.7,regY:-4.6,scaleX:1,scaleY:1,rotation:-23,x:343.3,y:137.1},2).to({regX:112.5,regY:-5.7,scaleX:0.03,scaleY:0.02,rotation:0,skewX:-170.4,skewY:9.4,x:377.9,y:131.6},2).to({_off:true},2).wait(110));

	// object
	this.objects = new lib.Objects();
	this.objects.setTransform(4572.8,2016,1,1,0,0,0,91.5,86.5);

	this.timeline.addTween(cjs.Tween.get(this.objects).wait(49).to({x:1682.1,y:95},0).to({x:620.2},69).wait(100).to({x:-99.1},31).wait(27));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(322.8,60.8,4341.6,2041.8);


// symbols:
(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,179);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,179);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,179);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,179);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,185,175);


(lib.tree = function() {
	this.initialize(img.tree);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,183,173);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAAh6IgXB3QgSAGgMAQQgLARAAAUQgBAcAUATQATATAaAAQAbABATgUQATgTAAgbQABgVgMgRQgMgQgSgGIgYh3").cp();
	this.shape.setTransform(-5.5,0,1,1,90,0,0,0,5.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12.2,-6.5,24.6,13.2);


(lib.SubAnimation = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CC0033").ss(5,1,1).p("A1bAAMAq4AAA");
	this.shape_1.setTransform(249.5,-6.5);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Objects = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 1
	this.instance = new lib.tree();

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(64,-5.9);

	this.instance_2 = new lib.Bitmap7();
	this.instance_2.setTransform(28,0);

	this.instance_3 = new lib.Bitmap5();
	this.instance_3.setTransform(0,-4.9);

	this.instance_4 = new lib.Bitmap6();
	this.instance_4.setTransform(0,-5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3,p:{y:-4.9}}]},1).to({state:[{t:this.instance_3,p:{y:-5.9}},{t:this.instance_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,183,173);


(lib.Robot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_5 = new lib.Tween1("synched",0);
	this.instance_5.setTransform(0.9,-55.7,1,1,0,0,0,-5.5,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:-89.8,x:0.5,y:-55.9},20).to({rotation:-179.9,x:0.1,y:-55.6},20).to({rotation:-89.8,x:0.5,y:-55.9},20).to({rotation:0,x:0.9,y:-55.6},19).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AANgMIgZAAIAAAZIAZAAIAAgZ").cp();
	this.shape_2.setTransform(23.6,13);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AjwjCIHhAAIAAGGInhAAIAAmG").cp();
	this.shape_3.setTransform(17.7,13,0.328,0.328);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgnAoIBPAAIAAhPIhPAAIAABP").cp();
	this.shape_4.setTransform(-19.5,11.8,0.328,0.328);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADxDEInhAAIAAmGIHhAAIAAGG").cp();
	this.shape_5.setTransform(-16.1,13,0.328,0.328);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhKBLICVAAIAAiVIiVAAIAACV").cp();
	this.shape_6.setTransform(-6.3,30.2,0.328,0.328);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhKCoICVAAIAAlPIiVAAIAAFP").cp();
	this.shape_7.setTransform(0.5,33.2,0.328,0.328);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhKBLICVAAIAAiVIiVAAIAACV").cp();
	this.shape_8.setTransform(7.3,30.2,0.328,0.328);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Agg6vIhQGEIotAAIAABqIiqAAIAABpIisAAMAAAAo/QAABTA7A6QA6A8BUAAQBTAAA6g8QA8g6AAhTITEAAQAABTA7A6QA7A8BTAAQBTAAA6g8QA7g6AAhTMAAAgo/IirAAIAAhpIirAAIAAhqIotAAIhPmEIhCAA").cp();
	this.shape_9.setTransform(0.5,0.5,0.328,0.328);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAognIhPAAIAABPIBPAAIAAhP").cp();
	this.shape_10.setTransform(23.6,13,0.328,0.328);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_3},{t:this.shape_10},{t:this.shape_5},{t:this.shape_4}]},79).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-32.7,-62.4,66.5,119.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;