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
                    if(nextpage<3){
                        $('.page'+nowpage).removeClass('active');
                        $('.page'+nextpage).addClass('active');
                        $('.wrapaper').css('transform','translate(0,'+(nextpage* -100)+'%)');
                    }
                }
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
        setTimeout(function() {
                $('#title_fir').fadeIn(1000);
                $('#title_sec').fadeIn(2000);
            }, 2500);
    //Section1
        $(function(){
            $('.container').on('mousewheel',function(event){
                if(event.deltaY!=0){
                    var nowpage_action=parseInt($('.active').attr('data-page'));
                    setTimeout(function() {
                        if(nowpage_action==1){
                            $('#s1_0').fadeIn(50);
                            $('#s1_1').fadeIn(150);
                            $('#s1_2').fadeIn(250);
                            $('#s1_3').fadeIn(350);
                            $('#s1_4').fadeIn(450);
                            $('#s1_6').fadeIn(550);
                            $('#s1_7').fadeIn(650);
                            $('#s1_8').fadeIn(750);
                            $('#s1_9').fadeIn(850);
                            $('#s1_10').fadeIn(950);
                            $('#s1_11').fadeIn(1050);
                            $('#s1_out1').fadeIn(2050);
                            $('#s1_out2').fadeIn(2050);
                    }
                    }, 1500);
                }
            })
        })