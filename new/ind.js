const menBtn=$("#menu-btn");
const navbar=$("#navbar");
const menu=$(".menu");
const offset=50;
$(document).ready(function(){
    $("#menu-btn").click(function(){
      $(".menu").toggleClass("menu-open");
    });
  });
window.addEventListener("scroll",function(){
    if(this.scrollY>offset){
        navbar.addClass("navbar-active");
        $(".change").addClass("changecol");
    }
    else{
        navbar.removeClass("navbar-active");
        $(".change").removeClass("changecol");
    }
})  