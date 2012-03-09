function getTwitterFeed(){
	var twitterapi = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=nbprithv&count=9&callback=storeTwitterJson";
	var newEl = document.createElement('script');
	newEl.id = 'twitterjson';
	newEl.src=twitterapi;
	document.getElementsByTagName('body')[0].appendChild(newEl);
}
function storeTwitterJson(data){
	window.twitterJson = data;
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
			$('#content #submenu ul').append(text);
		}
	}else{
	for(var i=0;i < data.length;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var tweet = data[i];
		var statusurl = "http://twitter.com/nbprithv/status/"
		var finaltext = '<a href="'+statusurl+tweet.id_str+'" target="blank"><li style="background-color:'+twittercolor[randomnumber]+';color:#000">'+tweet.text+'</li></a>';
		$('#content #submenu ul').append(finaltext);
	};
	}
}
function getLastfmFeed(){
	var lastfmapi = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nbprithv&api_key=aaf415a4b8f5917e0f6527203bc4f048&format=json&callback=storeLastfmJson";
	var newEl = document.createElement('script');
	newEl.id = 'lasfmjson';
	newEl.src=lastfmapi;
	document.getElementsByTagName('body')[0].appendChild(newEl);
}
function storeLastfmJson(data){
	window.lastfmJson = data;
}
function formatLastfmJson(data){
	var lastfmcolor = ['#D01F3C','#D8455D','#929396','#CCCCCC'];
	var recenttracks = data.recenttracks.track;
	for(var i=0;i <9;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var recenttrack = recenttracks[i];
		var finaltext = '<a href="'+recenttrack.url+'" target="blank">'+
				'<li style="background-color:'+lastfmcolor[randomnumber]+';color:#000;">'+
				'<img src="'+recenttrack.image[1]['#text']+'" style="border:2px solid #FFF;float:left;"/>'+
				'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;">'+recenttrack.name+'</div></li>'+
				'</a>';
		$('#content #submenu ul').append(finaltext);
	};
}
function getFourSquareFeed(){
	var fsurl = "https://api.foursquare.com/v2/users/self/checkins?oauth_token=WBIGHYBXUYZDYXHCTTDA5VDXQGOSYFMKSQWQVP55B2DDCQEV&limit=9&callback=storeFourSquareJson";
	var newEl = document.createElement('script');
	newEl.id = 'foursquarejs';
	newEl.src=fsurl;
	document.getElementsByTagName('body')[0].appendChild(newEl);
}
function storeFourSquareJson(data){
	window.foursquareJson = data;
}
function formatFourSquareJson(data){
	var fscolor = ['#17649A','#40B3DF','#A8CB17','#FAAA00'];
	var recentcheckins = data.response.checkins.items;
	for(var i=0;i < recentcheckins.length;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var checkin = recentcheckins[i];
		var finaltext = '<li style="background-color:'+fscolor[randomnumber]+'">'+
		'<img src="'+checkin.venue.categories[0].icon+'" style="float:left" />'+
		'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+checkin.venue.name+'</div></li>';
		$('#content #submenu ul').append(finaltext);
	};
}
function getFourSquareBadgeJson(){
		var fsbadgeurl = "https://api.foursquare.com/v2/users/self/badges?oauth_token=QQUAF43HGEPHMEZFOHAHAXI5RTUO1F1KOMSSY1LO31HM13E2&v=20120308&callback=storeFSBadgeJson";
		var newEl = document.createElement('script');
		newEl.id = 'foursquarebadgejs';
		newEl.src=fsbadgeurl;
		document.getElementsByTagName('body')[0].appendChild(newEl);
}
function storeFSBadgeJson(data){
	window.foursquarebadgeJson = data;
}
function formatFourSquareBadgeJson(data){
	var fscolor = ['#17649A','#40B3DF','#A8CB17','#FAAA00'];
	var allbadges = data.response.sets.groups[0].items;
	for(var i=0;i<allbadges.length;i++){
		var randomnumber=Math.floor(Math.random()*4);
		var badgeid = allbadges[i];
		var badgehash = data.response.badges[badgeid];
		var badgeimg = badgehash.image.prefix+badgehash.image.sizes[0]+badgehash.image.name;
		var finaltext = '<li style="background-color:'+fscolor[randomnumber]+'">'+
		'<img src="'+badgeimg+'" style="float:left"/>'+
		'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+badgehash.name+'</div></li>';
		$('#content #submenu ul').append(finaltext);
	}	
}
function getBlogRoll(){
	var contactme = [
		{
			"name": "TechCrunch",
			"link": "http://techcrunch.com",
			"style":"background-color:#000000;color:#FFF;",
			"img":"img/techcrunch.png"
		},
		{
			"name": "Mashable",
			"link": "http://mashable.com",
			"style":"background-color:#5E88B4;color:#000"
		},
		{
			"name": "SitePoint",
			"link": "http://sitepoint.com",
			"style":"background-color:#FFFFFF;color:#000000",
			"img":"img/sitepoint.jpg"
		},
		{
			"name": "FoodNetwork",
			"link": "http://foodnetwork.com",
			"style":"background-color:#CC0000;"
		},
		{
			"name": "allthingsd",
			"link": "http://allthingsd.com",
			"style":"background-color:#38698E",
			"img":"img/allthingsd.png"
		},
		{
			"name": "AutoBlog",
			"link": "https://autoblog.com",
			"style":"background-color:#D50F0F",
		},
	];
	for(var i=0;i<contactme.length;i++){
		var data = contactme[i];
		var text = '';
		if(data.img)
			text =  '<img src="'+data.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		else
			text = '<div>'+data.name+'</div>';
		var finaltext = '<a href="'+data.link+'" target="blank"><li style="'+data.style+'">'+
		text+
		'</li></a>';
		$('#content #submenu ul').append(finaltext);
	}
}
function getGames(){
	var contactme = [
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
			"img":"img/angrybirds.png"
		},
		{
			"name": "Cut the rope",
			"link": "http://www.cuttherope.ie/",
			"style":"background-color:#FEBA19;color:#000000;",
			"img":"img/cuttherope.png"
		},
		{
			"name": "Plants VS Zombies",
			"link": "https://chrome.google.com/webstore/detail/mmcegpfdgcoclcdfkjahiimlikdpnina",
			"style":"background-color:#6EDA14;color:#000000;",
			"img":"img/plantsvszombies.png"

		}
	];
	for(var i=0;i<contactme.length;i++){
		var data = contactme[i];
		var text = '';
		if(data.img)
			text =  '<img src="'+data.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		else
			text = '<div>'+data.name+'</div>';
		var finaltext = '<a href="'+data.link+'" target="blank"><li style="'+data.style+'">'+
		text+
		'</li></a>';
		$('#content #submenu ul').append(finaltext);
	}
}
function getContactMe(){
	var contactme = [
		{
			"name": "gmail",
			"link": "mailto:niranjan.prithviraj@gmail.com",
			"style":"background-color:#1878C0;color:#000;",
			"img":"img/gmail.png"
		},
		{
			"name": "pintrest",
			"link": "http://pinterest.com/nbprithv/",
			"style":"background-color:#CC0000;",
			"img":"http://passets-cdn.pinterest.com/images/big-p-button.png" 
		},
		{
			"name": "quora",
			"link": "http://www.quora.com/Niranjan-B-Prithviraj",
			"style":"background-color:#A82400;color:#000000",
			"img":"img/quora.png"
		},
		{
			"name": "google plus",
			"link": "https://plus.google.com/u/0/107223123319047956323/posts",
			"style":"background-color:#D50F0F",
			"img":"img/gplus.png"
		},
		{
			"name": "twitter",
			"link": "http://twitter.com/nbprithv",
			"style":"background-color:#4099FF;color:#000",
			"img":"img/tweet.png"
		},
		{
			"name": "facebook",
			"link": "http://facebook.com/niranjanprithviraj",
			"style":"background-color:#335795;color:#000",
			"img":"img/facebook.png"
		},
		{
			"name": "linkedin",
			"link": "http://in.linkedin.com/in/nbprithviraj",
			"style":"background-color:#247BA7;color:#000",
			"img":"img/linkedin.png"
		},
		{
			"name": "foursquare",
			"link": "http://facebook.com/niranjanprithviraj",
			"style":"background-color:#40B3DF;color:#000",
			"img":"img/foursquare.png",
		},
		{
			"name": "last.fm",
			"link": "http://facebook.com/niranjanprithviraj",
			"style":"background-color:#C91B4A",
			"img":"img/lastfm.png"
		},
		{
			"name": "skype",
			"link": "niranjan.prithviraj",
			"style":"background-color:#C91B4A",
			"img":"img/skype.png"
		}
	];
	for(var i=0;i<contactme.length;i++){
		var data = contactme[i];
		var text = '';
		if(data.img)
			text =  '<img src="'+data.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+data.name+'</div>'; 
		else
			text = '<div>'+data.name+'</div>';
		var finaltext = '<a href="'+data.link+'" target="blank"><li style="'+data.style+'">'+
		text+
		'</li></a>';
		$('#content #submenu ul').append(finaltext);
	}
}
