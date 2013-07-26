$(document).ready(function(){
  window.cardContentDiv = "#content ul";
  $(".nav-menu-icon").click(function(){
    if($(this).hasClass("show")){
      $(this).removeClass("show");
      $("#menu-items").slideUp();//.css("display","none");
    }else{
      $(this).addClass("show");
      $("#menu-items").slideDown();//.css("display","block");
    }
  });
	if(!location.hash){
		$("#content #mainmenu #contactme").addClass('selected');	
		$("#content #submenu #title").html('contact me');
		getContactMe();
		fadeIn();
	}else{
		var hash = location.hash;
		tabDisplay(hash.substring(1));
	}
	$("#content #mainmenu li").click(function(){
		var id = $(this).attr('id');
		tabDisplay(id);
	});
	$(window).hashchange(function(){
		console.log('dddd');
		var hash = location.hash;
        tabDisplay(hash.substring(1));
	});
});
function tabDisplay(id){
	$('#content ul').html('');
	$('#menu-items li').removeClass('selected');
	$('#'+id).addClass('selected');	
	$("#main-content #content-title").html($('#'+id).html());
	switch(id){
		case 'twitter':
			init(getTwitterFeed);
		break;
		case 'blogroll':
			init(getBlogRoll);
		break;
		case 'foursquare':
//			var fsspan = '<span id="fsoptions"><span id="fscheckin">checkins</span> | <span id="fsbadge" class="unselected">badges</span></span>';
//			$("#content #submenu #title").append(fsspan);	
//			init(getFourSquareFeed);
		break;
		case 'github':
			init(getGitHub);
		break;
		case 'games':
			init(getGames);
		break;
		case 'lastfm':
			var blogspan = '<span id="fsoptions"><a href="/tools/lastfm.php?userid=nbprithv"><i class="icon-signout"></i></a></span>';
			$("#content #main-profile-title").append(blogspan);
			//formatLastfmJson(window.lastfmJson);
			init(getLastfmFeed);
		break;
		case 'nikeplus':
			//formatNikePlusJson(window.nikeplusJson);
		break;
		case 'contactme':
			init(getContactMe);
		break;
		case 'blog':
			var blogspan = '<span id="fsoptions"><a href="/blog"><i class="icon-signout"></i></a></span>';
			$("#main-content #content-title").append(blogspan);
			//formatBlogJson(window.blogJson);
			init(getBlogFeed);
		break;
		default:
			return false;
	}
}
function fadeIn(){
	var eT=0;
	var contentDiv = "#content li";
	$(contentDiv).hide().each(function() {
		$(this).delay(eT).fadeIn('slow');
		eT += 200;
	});
	$(contentDiv).click(function() {
		$(contentDiv).stop(true,true).fadeIn();
	});
}
