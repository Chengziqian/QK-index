//Animate_Logo
    var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
        function init() {
            canvas = document.getElementById("canvas");
            anim_container = document.getElementById("animation_container");
            dom_overlay_container = document.getElementById("dom_overlay_container");
            handleComplete();
        }
        function handleComplete() {
            //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
            exportRoot = new lib.Logo();
            stage = new createjs.Stage(canvas);
            stage.addChild(exportRoot);	
            //Registers the "tick" event listener.
            fnStartAnimation = function() {
                createjs.Ticker.setFPS(lib.properties.fps);
                createjs.Ticker.addEventListener("tick", stage);
            }	    
            //Code to support hidpi screens and responsive scaling.
            function makeResponsive(isResp, respDim, isScale, scaleType) {		
                var lastW, lastH, lastS=1;		
                window.addEventListener('resize', resizeCanvas);		
                resizeCanvas();		
                function resizeCanvas() {			
                    var w = lib.properties.width, h = lib.properties.height;			
                    var iw = window.innerWidth, ih=window.innerHeight;			
                    var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
                    if(isResp) {                
                        if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
                            sRatio = lastS;                
                        }				
                        else if(!isScale) {					
                            if(iw<w || ih<h)						
                                sRatio = Math.min(xRatio, yRatio);				
                        }				
                        else if(scaleType==1) {					
                            sRatio = Math.min(xRatio, yRatio);				
                        }				
                        else if(scaleType==2) {					
                            sRatio = Math.max(xRatio, yRatio);				
                        }			
                    }			
                    canvas.width = w*pRatio*sRatio;			
                    canvas.height = h*pRatio*sRatio;
                    canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';				
                    canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
                    stage.scaleX = pRatio*sRatio;			
                    stage.scaleY = pRatio*sRatio;			
                    lastW = iw; lastH = ih; lastS = sRatio;		
                }
            }
            makeResponsive(false,'both',false,1);	
            fnStartAnimation();
        }
//mousewheel_func
    $(function(){
            $('.container').on('mousewheel',function(event){
                var $this=$(this);
                var settimeId=$this.data('settimeId');
                if(settimeId){
                    clearTimeout(settimeId);
                }
                $this.data('settimeId',setTimeout(function() {

                    console.log(event.deltaX,event.deltaY,event.deltaFactor);
                    var nowpage=parseInt($('.active').attr('data-page'));
                    if(event.deltaY>0){
                        var prepage=nowpage-1;
                        if(prepage>=0){
                            $('.page'+nowpage).removeClass('active');
                            $('.page'+prepage).addClass('active');
                            $('.wrapaper').css('transform','translate(0,'+(prepage* -100)+'%)');
                        }
                    }
                    else{
                        var nextpage=nowpage+1;
                        if(nextpage<5){
                            $('.page'+nowpage).removeClass('active');
                            $('.page'+nextpage).addClass('active');
                            $('.wrapaper').css('transform','translate(0,'+(nextpage* -100)+'%)');
                        }
                    }

                $this.removeData('settimeId');
                $this=null;
                }, 100));
            })
        })
//Logo_size_control
    $(function(){
            var body_width=$(document.body).width();
            if(body_width<800){
                $("#canvas").css({
                    'width':610*0.8,
                    'height':400*0.8
                })
                $("#animation_container").css({
                    'width':610*0.8,
                    'height':400*0.8
                })
            }
        })
//Section_functions
    //Section0
    $(function(){
        setTimeout(function() {
                $('#title_fir').css('opacity','1');
                $('#title_sec').css('opacity','1');
                $('.line').css('width','300px');
            }, 2500);
        setTimeout(function() {
            $('#s1_bg').css('backgroundColor','rgba(0,0,0,0)')
        }, 3500);
    })
        
    //Section1,Section2,Section3
        $(function(){
            $('.container').on('mousewheel',function(event){
                    setTimeout(function() {
                        var nowpage_action=parseInt($('.active').attr('data-page'));
                        setTimeout(function() {
                            if(nowpage_action==1){
                                $('.p1').css('opacity','1');
                                $('.p2').css('opacity','1');
                                $('.t1').css('opacity','1');
                                $('.t2').css('opacity','1');
                            }
                            if(nowpage_action==2){
                                $('.s2_title').css('opacity','1');
                                setTimeout(function() {
                                    $('.picture_1_0').css('opacity','1');
                                    $('.picture_2_0').css('opacity','1');
                                }, 1000);
                                setTimeout(function() {
                                    $('.picture_1_1').css('opacity','1');
                                    $('.picture_2_1').css('opacity','1');
                                }, 1500);
                            }
                            if(nowpage_action==3){
                                $('.left_title').css({
                                    'opacity':'1',
                                    'transform':'translate(0,0)'
                                })
                                setTimeout(function() {
                                    $('.left_p').css({
                                    'opacity':'1',
                                    'transform':'translate(0,0)'
                                    })
                                }, 500);
                                setTimeout(function() {
                                    $('.right_title').css({
                                    'opacity':'1',
                                    'transform':'translate(0,0)'
                                    })
                                    setTimeout(function() {
                                        $('.right_p').css({
                                        'opacity':'1',
                                        'transform':'translate(0,0)'
                                        })
                                    }, 500);
                                }, 1000);
                            }
                        }, 1500);
                    }, 100);
            })
        })