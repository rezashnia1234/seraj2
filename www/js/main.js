  function setwidth(){
	$(".akhbar_content_main").css("height","auto");
    var screen_height = $( window ).height();
    var content_height = $('.akhbar_content_main').height();
    if(screen_height -300 > content_height){
      $(".akhbar_content_main").height(screen_height - 380);
    }


    var content_height = $('.akhbar_inner_scroll').height();
    if(screen_height -300 > content_height){
      $(".akhbar_inner_scroll").height(screen_height - 480);
    }


    var content_height = $('.ghorfe_content').height();
    if(screen_height -300 > content_height){
      $(".ghorfe_content").height(screen_height - 580);
    }

    var content_height = $('.multi_content').height();
    if(screen_height -300 > content_height){
      $(".multi_content").height(screen_height - 600);
    }


  }
$(document).ready(function(){

  setTimeout(function(){
		//alert($( window ).height());
		var main_width = $(".akhbar_hader").delay(2000).width()/2;
		var main_width = $(".about_hader").delay(2000).width()/2;
		var akhbar_width = $(".akhbar_row").delay(2000).width();
		$(".header_left.about").delay(2000).width(main_width - 133);
		$(".header_left").delay(2000).width(main_width - 133);
		$(".header_right.about").delay(2000).width(main_width - 136);
		$(".header_right").delay(2000).width(main_width - 136);
		$(".akhbar_matn").delay(2000).width(akhbar_width - 75);

		setwidth();
  }, 100);
});
