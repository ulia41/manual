$("document").ready(function() {
    

$("#backtop").hide();
$(window).scroll(function(){
    if($ (this).scrollTop()>300){
        $("#backtop").fadeIn();
    }
    else{
        $("#backtop").fadeOut();  
    }
});

})