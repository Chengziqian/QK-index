(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7870A").s().p("AhBBCQgcgcAAgmQAAgmAcgcQAcgbAlAAQAnAAAbAbQAcAcAAAmQAAAmgcAcQgbAcgnAAQglAAgcgcg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.4,-9.4,18.8,18.8);


(lib.元件8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgBAAgCgKQgCgNABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJ2ktQgIgigbg1QgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZIAFANQgQAjg9AcQg0AYgwAEIgBAAQgGAAgDgJg");
	this.shape.setTransform(92,104.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,244,244,0.043)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_1.setTransform(92,104.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,234,234,0.082)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_2.setTransform(92,104.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,223,223,0.125)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_3.setTransform(92,104.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(254,212,212,0.169)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_4.setTransform(92,104.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(254,202,202,0.208)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_5.setTransform(92,104.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(254,191,191,0.251)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_6.setTransform(92,104.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(254,181,181,0.29)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_7.setTransform(92,104.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(254,170,170,0.333)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_8.setTransform(92,104.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(254,159,159,0.376)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_9.setTransform(92,104.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(254,149,149,0.416)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_10.setTransform(92,104.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(254,138,138,0.459)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_11.setTransform(92,104.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(254,128,128,0.502)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_12.setTransform(92,104.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(253,117,117,0.541)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_13.setTransform(92,104.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(253,106,106,0.584)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_14.setTransform(92,104.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(253,96,96,0.624)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_15.setTransform(92,104.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(253,85,85,0.667)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_16.setTransform(92,104.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(253,74,74,0.71)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_17.setTransform(92,104.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(253,64,64,0.749)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_18.setTransform(92,104.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(253,53,53,0.792)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_19.setTransform(92,104.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(253,43,43,0.831)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_20.setTransform(92,104.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(252,32,32,0.875)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_21.setTransform(92,104.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(252,21,21,0.918)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_22.setTransform(92,104.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(252,11,11,0.957)").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgFgXABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJTmEQgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZQgLAwg9AcQg0AYgwAEQgSgrgbg1g");
	this.shape_23.setTransform(92,104.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FC0000").s().p("ADWNlQhSALhDABQhMAChHgJIgygJIgjgHQgBAAgCgKQgCgNABgUQACgiABg1IABhWQFDAgDbg5QEXhJCUjhQAggxAghKIA1iAIgJBlQgHA6gNAoQgOAtgXA0QgOAfgfA/IBnBYIiuDMIhkhTQgqAlgnAbQgrAeguAVIAdBpIkBBOgAm3LhQgZgSg+g7QgogmgogxQgegmgpg4Ih9AuIhkj6IB4gtQgMhYgEhKQgDhUAHhNIh9guIBYj5IB0AqQAig+AfguQAkg2AoguQARA+AfBJIALAcIALAcQAMAWgDASQgBALgKAVQhNCCgaCMQg6E6CEDsQAlBEA1BBQAtA5A/A/QgsAAg6gtgAJ2ktQgIgigbg1QgXgvgXghQhFhlhHg9QhShEhwgnQhbggh8gRQg8gHg3gCQhCgBgvAKQAygiBVgLQAVgDB5gGIA2AAIAxh8ID6BgIgiBXQBOAeBQA4IBThfIDICrIhQBfIAtA/QAdAoAJAZIAFANQgQAjg9AcQg0AYgwAEIgBAAQgGAAgDgJg");
	this.shape_24.setTransform(92,104.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,7.9,183.9,193);


(lib.元件7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7870A").s().p("AhBBCQgcgbAAgnQAAgmAcgbQAcgcAlAAQAnAAAbAcQAcAbAAAmQAAAngcAbQgbAcgnAAQglAAgcgcg");
	this.shape.setTransform(9.4,9.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7870A").s().p("AhBA3QgcgXAAggQAAgfAcgXQAcgXAlAAQAnAAAbAXQAcAXAAAfQAAAggcAXQgbAXgnAAQglAAgcgXg");
	this.shape_1.setTransform(9.4,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7870A").s().p("AhBArQgcgRAAgaQAAgYAcgSQAcgTAlAAQAnAAAbATQAcASAAAYQAAAagcARQgbATgnAAQglAAgcgTg");
	this.shape_2.setTransform(9.4,5.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7870A").s().p("AhBAgQgcgNAAgTQAAgRAcgOQAcgNAlAAQAnAAAbANQAcAOAAARQAAATgcANQgbAOgnAAQglAAgcgOg");
	this.shape_3.setTransform(9.4,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F7870A").s().p("AhBAxQgcgUAAgdQAAgcAcgUQAcgVAlAAQAnAAAbAVQAcAUAAAcQAAAdgcAUQgbAVgnAAQglAAgcgVg");
	this.shape_4.setTransform(9.4,6.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.8,18.8);


// stage content:
(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_60 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(60).call(this.frame_60).wait(1));

	// 图层 6
	this.instance = new lib.补间11("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(275,31.5);

	this.instance_1 = new lib.元件7();
	this.instance_1.parent = this;
	this.instance_1.setTransform(275,340.3,1,1,0,0,0,9.4,9.4);
	this.instance_1._off = true;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7870A").s().p("AhBBCQgcgbAAgnQAAgmAcgbQAcgcAlAAQAnAAAbAcQAcAbAAAmQAAAngcAbQgbAcgnAAQglAAgcgcg");
	this.shape.setTransform(275,259);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F7870A").s().p("Ah3CjQgHgGgIgOIgDgFIgEgHIgHgNQgNgdgGgZQgGgeABgdIAAgBQADgfANgYQAOgaAYgSQAKgIAMgGQANgHAOgFQAUgKAkgGQAegGAYgCIADgBIBAgGQAfgFAQgFIACAFQAEAHADAKQAEAGACAUQACALAAANQABAMgBANQgDAVgJAUQgKAZgUAVQgaAdgiAUQgNAHgOAFQgVAJgaAJIgaAHQgNAEgLAEIgIADQgWAJgMANQgHAFgFAIQgFAJgFAAIgBAAg");
	this.shape_1.setTransform(283,253.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F7870A").s().p("AjQDfIgEgIIgFgLIgJgVQgQgsgIgnQgIguAFgoIAAgCQAFguAWgjQAXgkAmgYQAQgKASgIQAUgJAXgGQAdgLA5gIIBQgLIAFgBQA5gKAlgKQAugPATgZIADAJQAFAMACAPQADAHAAAgQACARgCAUQgCASgFATQgHAhgRAbQgVAjgiAbQgvAng1AXQgUAJgVAHQgfAKgqALIgmAMQgUAGgPAIIgJAFQgfASgLAfQgHALgEATQgDAYgEADQgLgIgKgXg");
	this.shape_2.setTransform(291.3,247.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7870A").s().p("AkbEvIgFgMIgGgPIgLgbQgUg+gIgyQgKg+AHg2IAAgBQAIg8AfgvQAgguA0geQAVgNAagKQAbgKAfgIQAmgLBNgJIBsgQIAGgBQBMgOAvgTQA+gbAWgrIAEANQAFAQABAVQADAHgBAuQABAXgFAbQgEAYgIAZQgNAqgZAkQgfAtgxAiQhDAvhHAcQgbAKgdAIIhjAbQgfAIgSAHQgbAIgUAMIgLAIQgnAbgLAwQgGASgCAdQgCAmgDAHQgOgLgMgfg");
	this.shape_3.setTransform(299.7,241.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F8860B").s().p("AlnGAIgGgQIgHgTIgMgjQgYhOgJg9QgMhQAJhBIAAgBQALhNAog4QAog5BCglQAcgOAhgMQAigLAngJQAugMBjgMQBWgKAwgJIAIgBQBggUA5gaQBNgnAYg+IAGASQAFAUABAaQACAIgCA8QgBAbgHAiQgGAfgLAeQgSA1giAtQgpA1hAAqQhWA4haAfQgjANgiAIQg2AMhIAUQgnAKgXAIQghAMgYAPIgOAKQgvAlgLBCQgFAYAAAoQAAA0gDALQgQgNgPgog");
	this.shape_4.setTransform(308.2,235.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F8860B").s().p("AmzHQIgHgTIgIgXIgOgqQgbhegLhKQgNhgALhOIAAgBQAOhcAwhCQAyhFBQgqQAhgRApgNQApgNAvgLQA3gMB4gOQBogLA5gLIAJgCQBzgYBDgjQBdgxAbhSQAEAJACANQAGAXAAAhQACAIgEBKQgBAggKAqQgIAlgOAkQgXA/grA1QgzA/hPAvQhqBChsAkQgrAOgpAJQhAAOhYAXQgvANgbAIQgoAPgcATQgJAGgHAGQg3AvgKBSQgFAgABAzQACBBgCAPQgTgQgRgwg");
	this.shape_5.setTransform(316.7,229.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8860B").s().p("An/IfIgIgVIgJgbIgQgyQgehugMhWQgQhxAOhaIAAAAQAQhrA6hOQA7hPBegwQAngTAwgQQAvgPA5gLQA/gMCOgQQB5gNBBgNIALgCQCGgdBOgrQBsg9AehmIAHAbQAGAcAAAmQABAJgFBXQgCAmgNAwQgKArgRAqQgcBKgzA8Qg+BJheA3Qh+BLh+AnQgyAQgxAKQhLAPhnAbQg3AOgfALQguARghAXIgSAPQg/A3gKBkQgEAmADA+QADBPgBATQgWgRgTg7g");
	this.shape_6.setTransform(325.2,223.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F8860B").s().p("A2JXeIguiHQgbhSgPg3QhSkxgejsQgpk4Amj2QAtkpCgjVQCjjZEFiAQDXhpE6g7QCsgfGKgrQFrgnCzgnQFzhRDVh8QEoitBOkjQAlBigCCfQAAAYgQDxQgGBpgkCGQgfB0gwB0QiyG5nhEUQnsEcnkBcQjMAmkdBKQiZAohSAdQiCAwhYBAQjZCegaFBQgIBrAJCwQAMDgAAA2Qg7gwg1igg");
	this.shape_7.setTransform(333.7,217.7,0.415,0.415);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance_1}]},3).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},4).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:9.4,regY:9.4,y:340.3,mode:"independent"},10).wait(7).to({_off:false,regX:0,regY:0,y:339.8,mode:"synched",startPosition:0},0).to({y:259.8},4).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},10).to({x:274.4,y:349.2},3).to({x:275,y:340.3},3).to({_off:true},1).wait(44));

	// 图层 9
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F7870A").s().p("AhBBCQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAcAbQAbAcAAAmQAAAngbAbQgcAcgnAAQgmAAgbgcg");
	this.shape_8.setTransform(287,204.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F7870A").s().p("AARBwQgKgCgKgEQgTgFgSgMQgUgNgRgVQgGgIgEgJQgSggABgiIAAgEQABgUAGgTQAIgTAMgPQACgCAEgBIANgDQAOgCARABQAOAAAQAEIAFABQAWAGAPAHQAVAMAPAUQAIALAFAMQAPAfgFAiIgBAIQgCALgEAKQgDAJgGALQgHAMgGAIQgHAIgHAGIgBABIgTAEQgLAAgNgCg");
	this.shape_9.setTransform(285.7,199);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F7870A").s().p("AAlCSQgJgHgOgHIgUgMQgUgLgWgSQgWgSgSgbIgMgXQgTgpADgrIAAgDQACgYAJgXQAJgZAPgRIAFADIAMAFIAjAMQAPADATAIIAHACIAqAVQAZAQAQAbQAJANAFAQQAOAmgKArIgCAJQgDAMgGAOQgEAJgJAPIgQAXQgJAKgIAHIgDABQgHgGgJgCg");
	this.shape_10.setTransform(284.4,193.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F7870A").s().p("AAhC0QgIgNgOgMIgWgUQgVgQgYgYQgZgXgTgiQgHgNgFgPQgVgzAFgyIAAgDQAEgcAKgbQAMgeARgUQAAAEADAFQAEAGAIAIQAPALAXAMQAQAHAXAMIAHAEIAxAbQAdAWARAgQAJARAFATQAOAvgOAxIgEALQgFAOgIAQQgEAJgMATIgUAbQgLANgJAHIgDABQgGgOgIgGg");
	this.shape_11.setTransform(283.1,187.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F7870A").s().p("AAdDWQgHgUgOgQIgXgbIgxgzQgcgdgTgoQgIgQgGgRQgWg+AHg5IAAgCQAFghAMggQAOgiATgXQgBAHADAJQADAJAJAMQAPATAaARIAsAbIAIAEIA2AjQAhAaATAmQAJAUAFAWQANA4gSA5IgFAMQgGAQgKASQgFAKgPAWIgXAfQgNAPgLAIIgEABQgEgWgHgKg");
	this.shape_12.setTransform(281.9,181.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F8870B").s().p("AAZD4QgGgbgPgVIgYghIg1g/QgegjgUguQgJgSgGgUQgXhIAJhAIAAgCQAFglAPgkQAQgoAWgZQgDAKACAMQADAOAJAPQAQAaAdAXIAwAiIAJAFIA9ArQAlAeATAsQAKAXAFAZQANBCgYA/IgFAOQgIASgMAUQgFAKgTAaIgaAjQgPARgNAIIgEADQgDgfgFgOg");
	this.shape_13.setTransform(280.7,175.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F8860B").s().p("AAUEaQgFghgPgZQgJgTgQgXQgYghgggpQghgogWg1QgJgUgGgWQgYhTALhHIAAgCQAGgpAQgoQATgtAYgdQgEAOACAQQACARAKAUQAQAgAfAdQAVARAgAYIAKAHIBDAxQApAkAUAxQALAbAFAcQAMBLgcBFIgHAQQgJAUgPAWQgFAKgWAeIgdAnQgRAUgPAJIgEACQgCgngEgSg");
	this.shape_14.setTransform(279.5,169.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F8860B").s().p("AAQE8QgEgngOgfQgLgWgQgaQgZgngjgvQgjgtgXg7QgKgXgHgZQgZhdANhOIAAgBQAHguASgtQAVgyAbgfQgGARACATQABAVAKAYQARAoAiAiQAWAUAkAdIALAHQA3ApASAQQAsAoAWA4QALAcAFAhQALBTggBNIgIARQgKAVgRAZQgGALgZAhIggArQgUAXgQAJIgFACQAAgvgDgWg");
	this.shape_15.setTransform(278.2,163.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8860B").s().p("AALFfQgCgvgOgjQgLgagSgeQgagsgmg1QgmgzgYhBQgKgZgHgcQgbhmAPhWIAAgBQAJgxAUgyQAXg3AdgiQgHAUABAWQABAaALAcQARAuAlAnQAXAYAoAhIALAJQA8AuATARQAxAtAWA+QAMAfAEAlQAMBcglBTIgKAUQgLAWgTAbQgHALgbAlIgkAwQgWAYgRAKIgGACQABg2gCgag");
	this.shape_16.setTransform(277,157.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8860B").s().p("AAGGBQAAg2gPgoQgLgdgSgiQgbgxgqg7Qgog4gZhHQgKgcgIggQgchwARhdQAJg1AXg2QAZg9AfgkQgIAXABAZQAAAdALAhQASA1AnAtQAZAcArAkIANAJQBBA2ATARQA1AyAXBEQAMAiAFAoQALBlgqBbIgKAUQgNAZgVAdIgmA1IgnAzQgYAbgTAKIgGACQACg+gBgeg");
	this.shape_17.setTransform(275.8,152.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8860B").s().p("AACGiQAAg7gPgsQgchShKhtQg8hXgch0Qgeh6AThlQALg6AYg6QAchBAignQgUA3AVBFQATA9AqAyQAeAjA4AvQBHA7AUATQBVBTANB+QAMB6g8BrQgOAagXAhIgqA4IgqA2QgfAjgVAIQAChGABgjg");
	this.shape_18.setTransform(274.6,146.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8860B").s().p("AACGjQAAg8gPgtQgchRhKhtQg8hXgch1Qgeh5AThlQALg5AYg7QAchBAignQgUA4AVBEQATA9AqAxQAeAkA4AvQBHA6AUAUQBVBTANB+QAMB6g8BsQgOAagXAfIgqA5IgqA3QgfAigVAIQAChHABghg");
	this.shape_19.setTransform(274.6,146.2);
	this.shape_19._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_8}]},27).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(38).to({_off:false},0).wait(21).to({_off:true},1).wait(1));

	// 图层 10
	this.instance_2 = new lib.元件8();
	this.instance_2.parent = this;
	this.instance_2.setTransform(305.9,198.3,1,1,0,0,0,92,104.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({rotation:360},24,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(570.6,222.1,18.8,18.8);
// library properties:
lib.properties = {
	width: 610,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;