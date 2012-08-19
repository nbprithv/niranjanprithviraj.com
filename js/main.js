$(document).ready(function(){
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
	$('#content #submenu #fsbadge').live('click',function(){
		//if($(this).hasClass('unselected'))
		$('#content #submenu ul').html('');
		$('#content #submenu #fsbadge').removeClass('unselected');
		$('#content #submenu #fscheckin').addClass('unselected');
		//formatFourSquareBadgeJson(window.foursquarebadgeJson);
		init(getFourSquareBadgeJson);
		fadeIn();
	});
	$('#content #submenu #fscheckin').live('click',function(){
		$('#content #submenu ul').html('');
		$('#content #submenu #fscheckin').removeClass('unselected');
		$('#content #submenu #fsbadge').addClass('unselected');
		init(getFourSquareFeed);
		fadeIn();
	});
	
});
function tabDisplay(id){
	$('#content #submenu ul').html('');
	$('#content #mainmenu li').removeClass('selected');
	$('#'+id).addClass('selected');	
	$("#content #submenu #title").html($('#'+id).html());
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
			var blogspan = '<span id="fsoptions" style="text-decoration:underline;"><a href="/tools/lastfm.php?userid=nbprithv">lastfm collage</a></span>';
			$("#content #submenu #title").append(blogspan);
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
			var blogspan = '<span id="fsoptions" style="text-decoration:underline;"><a href="/blog">go to blog >></a></span>';
			$("#content #submenu #title").append(blogspan);
			//formatBlogJson(window.blogJson);
			init(getBlogFeed);
		break;
		default:
			return false;
	}
}
function fadeIn(){
	var eT=0;
	var contentDiv = "#content #submenu li";
	$(contentDiv).hide().each(function() {
		$(this).delay(eT).fadeIn('slow');
		eT += 200;
	});
	$(contentDiv).click(function() {
		$(contentDiv).stop(true,true).fadeIn();
	});
}
