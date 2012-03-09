$(document).ready(function(){
	getTwitterFeed();
	getLastfmFeed();
	getFourSquareFeed();
	getFourSquareBadgeJson();
	$("#content #mainmenu li").click(function(){
		$('#content #submenu ul').html('');
		var id = $(this).attr('id');
		$('#content #mainmenu li').removeClass('selected');
		$(this).addClass('selected');	
		$("#content #submenu #title").html($(this).html());
		switch(id){
			case 'twitter':
				formatTwitterJson(window.twitterJson);
			break;
			case 'blogroll':
				getBlogRoll();
			break;
			case 'foursquare':
				var fsspan = '<span id="fsoptions"><span id="fscheckin">checkins</span> | <span id="fsbadge" class="unselected">badges</span></span>';
				$("#content #submenu #title").append(fsspan);	
				formatFourSquareJson(window.foursquareJson);
			break;
			case 'games':
				getGames();
			break;
			case 'lastfm':
				formatLastfmJson(window.lastfmJson);
			break;
			case 'contactme':
				getContactMe();
			break;
			default:
				return false;
		}
		fadeIn();
	});
	$('#content #submenu #fsbadge').live('click',function(){
		//if($(this).hasClass('unselected'))
		$('#content #submenu ul').html('');
		$('#content #submenu #fsbadge').removeClass('unselected');
		$('#content #submenu #fscheckin').addClass('unselected');
		formatFourSquareBadgeJson(window.foursquarebadgeJson);
		fadeIn();
	});
	$('#content #submenu #fscheckin').live('click',function(){
		$('#content #submenu ul').html('');
		$('#content #submenu #fscheckin').removeClass('unselected');
		$('#content #submenu #fsbadge').addClass('unselected');
		formatFourSquareJson(window.foursquareJson);
		fadeIn();
	});
	$("#content #submenu #title").html('contact me');
	getContactMe();
	fadeIn();
});
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
