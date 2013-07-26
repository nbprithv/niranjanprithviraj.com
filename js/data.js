function init(funcCall){
	$('#loader').show();
	$(window.cardContentDiv).html('');
	funcCall();
}
function getTwitterFeed(){
	var twitterapi = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=nbprithv&count=9&callback=formatTwitterJson";
	$.ajax({url:twitterapi,dataType:'jsonp', jsonpCallback:'formatTwitterJson',
		success: 
		function(data) {
			$('#loader').hide();
			fadeIn();
		},
	});	
}
function formatTwitterJson(data){
	var twittercolor = ['#C3F0F2','#B3ECEF','#9AE4E8','#30D8F0'];
	if(!data){
		for(var i=0;i < 9;i++){
			var randomnumber=Math.floor(Math.random()*4);
			if(i==0)
			var text = '<li style="background-color:'+twittercolor[randomnumber]+';color:#000">Twitter screwed me over. Can\'t display tweets now!</li>';
			else
			var text = '<li style="background-color:'+twittercolor[randomnumber]+';color:#000"></li>';
			$(window.cardContentDiv).append(text);
		}
	}else{
	for(var i=0;i < data.length;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var tweet = data[i];
		var statusurl = "http://twitter.com/nbprithv/status/";
		var finaltext = '<a href="'+statusurl+tweet.id_str+'" target="blank"><li style="background-color:'+twittercolor[randomnumber]+';color:#000">'+tweet.text+'</li></a>';
		$(window.cardContentDiv).append(finaltext);
	};
	}
}
function getLastfmFeed(){
	var lastfmapi = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nbprithv&api_key=aaf415a4b8f5917e0f6527203bc4f048&format=json&callback=storeLastfmJson";
	$.ajax({url:lastfmapi,dataType:'jsonp', jsonpCallback:'formatLastfmJson',
		success: 
		function(data) {
			$('#loader').hide();
			fadeIn();
		},
	});	
}
function formatLastfmJson(data){
	var lastfmcolor = ['#D01F3C','#D8455D','#929396','#CCCCCC'];
	var recenttracks = data.recenttracks.track;
	for(var i=0;i <9;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var recenttrack = recenttracks[i];
		var finaltext = '<a href="'+recenttrack.url+'" target="blank">'+
				'<li style="background-color:'+lastfmcolor[randomnumber]+';">'+
				'<img src="'+recenttrack.image[1]['#text']+'" style="border:2px solid #FFF;float:left;"/>'+
				'<div style="float:left;overflow:none;width:10em;overflow:hidden;white-space:nowrap;margin-left:5px;">'+recenttrack.name+'</div></li>'+
				'</a>';
		$(window.cardContentDiv).append(finaltext);
	};
}
function getFourSquareFeed(){
	var fsurl = "https://api.foursquare.com/v2/users/self/checkins?oauth_token=WBIGHYBXUYZDYXHCTTDA5VDXQGOSYFMKSQWQVP55B2DDCQEV&limit=9&callback=storeFourSquareJson";
	$.ajax({url:fsurl,dataType:'jsonp', jsonpCallback:'formatFourSquareJson',
		success: 
		function(data) {
			if(data.meta.code == 500){
				for(var i=0;i < 9;i++){
					var randomnumber=Math.floor(Math.random()*4);
					if(i==0)
					var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000">FourSquare doesn\'t want to respond. Try reloading.</li>';
					else
					var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000"></li>';
					$(window.cardContentDiv).append(text);
				}
			}else{
				formatFourSquareJson(data);
				fadeIn();
			}
		},
		error:function(data){
		},
	});	
}
function formatFourSquareJson(data){
	var fscolor = ['#17649A','#40B3DF','#A8CB17','#FAAA00'];
	if(!data){
		for(var i=0;i < 9;i++){
			var randomnumber=Math.floor(Math.random()*4);
			if(i==0)
			var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000">FourSquare doesn\'t want to respond. Try reloading.</li>';
			else
			var text = '<li style="background-color:'+fscolor[randomnumber]+';"></li>';
			$(window.cardContentDiv).append(text);
		}
	}else{
	var recentcheckins = data.response.checkins.items;
	for(var i=0;i < recentcheckins.length;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var checkin = recentcheckins[i];
		var icon = ''; 
		if(checkin.venue.categories[0])
			icon = '<img src="'+checkin.venue.categories[0].icon+'" style="float:left" />'; 
		var finaltext = '<li style="background-color:'+fscolor[randomnumber]+'">'+
		icon+
		'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+checkin.venue.name+'</div></li>';
		$(window.cardContentDiv).append(finaltext);
	};
	}
}
function getFourSquareBadgeJson(){
	var fsbadgeurl = "https://api.foursquare.com/v2/users/self/badges?oauth_token=QQUAF43HGEPHMEZFOHAHAXI5RTUO1F1KOMSSY1LO31HM13E2&v=20120308&callback=storeFSBadgeJson";
	$.ajax({url:fsbadgeurl,dataType:'jsonp', jsonpCallback:'formatFourSquareBadgeJson',
		success: 
		function(data) {
			$('#loader').hide();
			if(data.meta.code == 500){
				for(var i=0;i < 9;i++){
					var randomnumber=Math.floor(Math.random()*4);
					if(i==0)
					var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000">FourSquare doesn\'t want to respond. Try reloading.</li>';
					else
					var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000"></li>';
					$(window.cardContentDiv).append(text);
				}
			}else{
				formatFourSquareBadgeJson(data);
			}
			fadeIn();
		},
		error: function(){
			console.log('ddd');
		}
	});	
}
function formatFourSquareBadgeJson(data){
	var fscolor = ['#17649A','#40B3DF','#A8CB17','#FAAA00'];
	if(data.meta.code == 500){
		for(var i=0;i < 9;i++){
			var randomnumber=Math.floor(Math.random()*4);
			if(i==0)
			var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000">FourSquare doesn\'t want to respond. Try reloading.</li>';
			else
			var text = '<li style="background-color:'+fscolor[randomnumber]+';color:#000"></li>';
			$(window.cardContentDiv).append(text);
		}
	}else{
	var allbadges = data.response.sets.groups[0].items;
	for(var i=0;i<allbadges.length;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var badgeid = allbadges[i];
		var badgehash = data.response.badges[badgeid];
		var badgeimg = badgehash.image.prefix+badgehash.image.sizes[0]+badgehash.image.name;
		var finaltext = '<li style="background-color:'+fscolor[randomnumber]+'">'+
		'<img src="'+badgeimg+'" style="float:left"/>'+
		'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+badgehash.name+'</div></li>';
		$(window.cardContentDiv).append(finaltext);
	}	
	}
}
function getBlogRoll(){
	var contactme = [
		{
			"name": "TechCrunch",
			"link": "http://techcrunch.com",
			"style":"background-color:#000000;color:#FFF;",
			"logo":"background-position: 0 -1349px;"
		},
		{
			"name": "Mashable",
			"link": "http://mashable.com",
			"style":"background-color:#5E88B4;color:#000",
			"logo":"background-position: 0 -1349px;"
		},
		{
			"name": "SitePoint",
			"link": "http://sitepoint.com",
			"style":"background-color:#FFFFFF;color:#000000",
			"logo":"background-position: 0 -1349px;"
		},
		{
			"name": "FoodNetwork",
			"link": "http://foodnetwork.com",
			"style":"background-color:#CC0000;",
			"logo":"background-position: 0 -1349px;"
		},
		{
			"name": "allthingsd",
			"link": "http://allthingsd.com",
			"style":"background-color:#38698E",
			"logo":"background-position: 0 -1349px;"
		},
		{
			"name": "AutoBlog",
			"link": "https://autoblog.com",
			"style":"background-color:#D50F0F",
			"logo":"background-position: 0 -1349px;"
		},
	];
	for(var i=0;i<contactme.length;i++){
		var data = contactme[i];
		//var text =  '<img src="img/rss.png" style="float:left;" />'+'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		var text =  '<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+data.logo+'"></div>'+
				'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		var finaltext = '<a href="'+data.link+'" target="blank"><li style="'+data.style+'">'+
		text+
		'</li></a>';
		$(window.cardContentDiv).append(finaltext);
	}
}
function getGames(){
	var games = [
		{
			"name": "Canabalt",
			"link": "http://adamatomic.com/canabalt/",
			"style":"background-color:#2d2d2d;color:#FFFFFF;",
			"img":"img/canabalt.png"
		},
		{
			"name": "Angry Birds",
			"link": "https://chrome.google.com/webstore/detail/aknpkdffaafgjchaibgeefbgmgeghloj",
			"style":"background-color:#D7002E;",
			"logo":"background-position: 0 0;"
		},
		{
			"name": "Cut the rope",
			"link": "http://www.cuttherope.ie/",
			"style":"background-color:#FEBA19;color:#000000;",
			"logo":"background-position: 0 -114px;"
		},
		{
			"name": "Plants VS Zombies",
			"link": "https://chrome.google.com/webstore/detail/mmcegpfdgcoclcdfkjahiimlikdpnina",
			"style":"background-color:#6EDA14;color:#000000;",
			"logo":"background-position: 0 -1121px;"
		}
	];
	$('#loader').hide();
	for(var i=0;i<games.length;i++){
		var data = games[i];
		var text = '';
		if(data.img)
			text =  '<img src="'+data.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		else
			text = '<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+data.logo+'"></div>'+
				'<div>'+data.name+'</div>';
		var finaltext = '<a href="'+data.link+'" target="blank"><li style="'+data.style+'">'+
		text+
		'</li></a>';
		$(window.cardContentDiv).append(finaltext);
	}
	fadeIn();
}
function getContactMe(){
	var contactme = [
		{
			"name": "gmail",
			"link": "mailto:niranjan.prithviraj@gmail.com",
			"style":"background-color:#1878C0;color:#FFF;",
			"logo":"background-position: 0 -570px;"
		},
		{
			"name": "github",
			"link": "http://github.com/nbprithv",
			"style":"background-color:#F6F6F6;color:#000",
			"img":"img/github_icon.png"
		},
		{
			"name": "twitter",
			"link": "http://twitter.com/nbprithv",
			"style":"background-color:#4099FF;color:#FFF",
			"logo":"background-position: 0 -1577px;"
		},
		{
			"name": "quora",
			"link": "http://www.quora.com/Niranjan-B-Prithviraj",
			"style":"background-color:#A82400;color:#FFF",
			"logo":"background-position: 0 -1235px;"
		},
		{
			"name": "linkedin",
			"link": "http://in.linkedin.com/in/nbprithviraj",
			"style":"background-color:#247BA7;color:#FFF",
			"logo":"background-position: 0 -896px;"
		},
		{
			"name": "skype",
			"link": "skype:niranjan.prithviraj",
			"style":"background-color:#C91B4A",
			"logo":"background-position: 0 -1463px;"
		}
	];
	$('#loader').hide();
	for(var i=0;i<contactme.length;i++){
		var data = contactme[i];
		var text = '';
		if(data.img)
			text =  '<img src="'+data.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		else
			text = '<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+data.logo+'"></div>'+
				'<div>'+data.name+'</div>';
		var finaltext = '<a href="'+data.link+'" target="blank"><li style="'+data.style+'">'+
		text+
		'</li></a>';
		$(window.cardContentDiv).append(finaltext);
	}
	fadeIn();
}
function getNikePlusFeed(){
	var nikeplusapi = "getdata.php?callback=storeNikePlusJson";
	var newEl = document.createElement('script');
	newEl.id = 'nikeplusjson';
	newEl.src=nikeplusapi;
	document.getElementsByTagName('body')[0].appendChild(newEl);
}
function storeNikePlusJson(data){
	window.nikeplusJson = data;
}
function formatNikePlusJson(data){
	var nikepluscolor = ['#DC442F','#0073FF','#17649A','#6DABAC'];
	if(!data){
		for(var i=0;i < 9;i++){
			var randomnumber=Math.floor(Math.random()*4);
			if(i==0)
			var text = '<li style="background-color:'+nikepluscolor[randomnumber]+';color:#000">Nike+ is too slow. Can\'t display my runs now!</li>';
			else
			var text = '<li style="background-color:'+nikepluscolor[randomnumber]+';color:#000"></li>';
			$(window.cardContentDiv).append(text);
		}
	}else{
	var runs = data.runList.run;
	var i = runs.length-1;
	var j = 0;
	var totaldistance = '<li style="background-color:#FFF;color:#000">'+
			'<img src="img/route.gif" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/>'+
			'<div style="margin-left:5px;float:left"><div>total distance</div><div>'+Math.round(data.runListSummary.distance*10)/10+' km</div></div></li>';
	var y = data.runListSummary.runDuration/1000;

	y /= 60;
	y /= 60;
	var totalminutes = y;
	totalminutes = Math.round(totalminutes*10)/10;
	var totaltime = '<li style="background-color:#FFF;color:#000">'+
			'<img src="img/stopwatch.gif" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/>'+
			'<div style="margin-left:5px;float:left"><div>total hours</div><div>'+totalminutes+'</div></div></li>';
	var totalcalories = '<li style="background-color:#FFF;color:#000">'+
			'<img src="img/fire.png" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/>'+
			'<div style="margin-left:5px;float:left"><div>calories burnt</div><div>'+data.runListSummary.calories+'</div></div></li>';
	$(window.cardContentDiv).append(totaldistance);
	$(window.cardContentDiv).append(totaltime);
	$(window.cardContentDiv).append(totalcalories);
	while(j<6){
		var randomnumber=Math.floor(Math.random()*4);
		var run = runs[i];
		var x  = run.duration/1000;
		x /= 60;
		var minutes = x % 60;
		minutes = Math.round(minutes*10)/10;
		var distance = run.distance;
		distance = Math.round(distance*10)/10;
		var finaltext = '<li style="background-color:'+nikepluscolor[randomnumber]+';color:#000">'+
				'<img src="img/nikeplus.png" style="float:left;"/>'+
				'<div style="margin-left:5px;float:left"><div>'+distance+' km</div><div>'+minutes+' minutes</div></div></li>';
		$(window.cardContentDiv).append(finaltext);
		i--;
		j++;
	};
	}
}
function getBlogFeed(){
	var blogapi = "http://niranjanprithviraj.com/blog/?feed=json&jsonp=formatBlogJson";
	$.ajax({url:blogapi,dataType:'jsonp', jsonpCallback:'formatBlogJson',
		success: 
		function(data) {
			$('#loader').hide();
			fadeIn();
		},
	});	
}
function formatBlogJson(data){
	//var lastfmcolor = ['#B0B0B0','#929396','#CCCCCC'];
	var blogcolor = ['#17649A','#40B3DF','#A8CB17','#FAAA00'];
	if(!data){
		for(var i=0;i < 9;i++){
			var randomnumber=Math.floor(Math.random()*4);
			if(i==0)
			var text = '<li style="background-color:'+blogcolor[randomnumber]+';color:#000">Blog is too slow. Can\'t display my recent posts now!</li>';
			else
			var text = '<li style="background-color:'+blogcolor[randomnumber]+';"></li>';
			$(window.cardContentDiv).append(text);
		}
	}else{
		var recentposts = data;
		for(var i=0;i <9;i++){
			var randomnumber=Math.floor(Math.random()*4);
			var recentpost = recentposts[i];
			var finaltext = '<a href="'+recentpost.permalink+'" target="blank">'+
					'<li style="background-color:'+blogcolor[randomnumber]+';color:#000;">'+
					'<div style="float:left;overflow:none;margin-left:5px;">'+recentpost.title+'</div></li>'+
					'</a>';
			$(window.cardContentDiv).append(finaltext);
		}
	}
}
function getGitHub(){
	var blogapi = "http://niranjanprithviraj.com/getdata.php?action=github";
	$.ajax({url:blogapi,dataType:'jsonp', jsonpCallback:'formatGitHubJson',
		success: 
		function(data) {
			$('#loader').hide();
			fadeIn();
		},
	});	
}
function formatGitHubJson(data){
	var githubcolor = ['#F6F6F6'];
	var githubicons = ['img/github.png','img/github_icon.png','img/github_logo.png'];
	if(!data){
		for(var i=0;i < 9;i++){
			var randomnumber=0;//Math.floor(Math.random()*3);
			if(i==0)
			var text = '<li style="background-color:'+githubcolor[randomnumber]+';color:#000">Blog is too slow. Can\'t display my recent posts now!</li>';
			else
			var text = '<li style="background-color:'+githubcolor[randomnumber]+';color:#000"></li>';
			$(window.cardContentDiv).append(text);
		}
	}else{
		var recentposts = data;
		for(var i=0;i <9;i++){
			var randomnumber=0;//Math.floor(Math.random()*3);
			var randomnumber_1=Math.floor(Math.random()*3);
			var recentpost = recentposts[i];
			var finaltext = '<a href="'+recentpost.permalink+'" target="blank">'+
					'<li style="background-color:'+githubcolor[randomnumber]+';color:#000;">'+
					'<div style="float:left;overflow:none;margin-left:5px;">'+recentpost.title+'</div></li>'+
					'</a>';
			var finaltext = '<a href="'+recentpost.link+'" target="_blank">'+
				'<li style="background-color:'+githubcolor[randomnumber]+';color:#000;">'+
				'<img src="'+githubicons[randomnumber_1]+'" style="border:2px solid #FFF;float:left;height:64px;width:64px;"/>'+
				'<div style="float:left;width:175px;margin-left:5px;">'+recentpost.title+'</div></li>'+
				'</a>';
			$(window.cardContentDiv).append(finaltext);
		}
	}
}
