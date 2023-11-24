$(function(){

    console.log("ready");
    $(".Slideshow1").hide();
    $(".Slideshow2").hide();
    $(".Slideshow3").hide();
    $(".Slideshow4").hide();


    let viewing1 = false;
    let viewing2 = false;
    let viewing3 = false;
    let viewing4 = false;


    $("#button1").click(function(){

        if(!viewing1){
            $(".fullSlideshow").hide();
            $(".Slideshow1").show()
            $(".Slideshow2").hide()
            $(".Slideshow3").hide()
            $(".Slideshow4").hide()
            viewing1 = true;
            viewing2 = false;
            viewing3 = false;
            viewing4 = false;
        } else {
            $(".Slideshow1").hide();
            $(".Slideshow2").hide()
            $(".Slideshow3").hide()
            $(".Slideshow4").hide()
            $(".fullSlideshow").show();
            viewing1 = false;
            viewing2 = false;
            viewing3 = false;
            viewing4 = false;
        }
        
    });

    $("#button2").click(function(){
        
        if(!viewing2){
            $(".fullSlideshow").hide();
            $(".Slideshow1").hide()
            $(".Slideshow2").show()
            $(".Slideshow3").hide()
            $(".Slideshow4").hide()
            viewing1 = false;
            viewing2 = true;
            viewing3 = false;
            viewing4 = false;
        } else {
            $(".Slideshow1").hide()
            $(".Slideshow2").hide()
            $(".Slideshow3").hide()
            $(".Slideshow4").hide()
            $(".fullSlideshow").show();
            viewing1 = false;
            viewing2 = false;
            viewing3 = false;
            viewing4 = false;
        }

    });

    $("#button3").click(function(){
        console.log("button 3 click");

        if(!viewing3){
            $(".fullSlideshow").hide();
            $(".Slideshow1").hide()
            $(".Slideshow2").hide()
            $(".Slideshow3").show()
            $(".Slideshow4").hide()
            viewing1 = false;
            viewing2 = false;
            viewing3 = true;
            viewing4 = false;
        } else {
            $(".Slideshow1").hide()
            $(".Slideshow2").hide()
            $(".Slideshow3").hide()
            $(".Slideshow4").hide()
            $(".fullSlideshow").show();
            viewing1 = false;
            viewing2 = false;
            viewing3 = false;
            viewing4 = false;
        }
    });

    $("#button4").click(function(){
        console.log("button 4 click");

        if(!viewing4){
            $(".fullSlideshow").hide();
            $(".Slideshow1").hide();
            $(".Slideshow2").hide();
            $(".Slideshow3").hide();
            $(".Slideshow4").show();
            viewing1 = false;
            viewing2 = false;
            viewing3 = false;
            viewing4 = true;
            
        } else {
            $(".Slideshow1").hide()
            $(".Slideshow2").hide()
            $(".Slideshow3").hide()
            $(".Slideshow4").hide()
            $(".fullSlideshow").show();
            viewing1 = false;
            viewing2 = false;
            viewing3 = false;
            viewing4 = false;
        }
    });

});