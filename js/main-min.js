function fadeIn(){var a=0;var b="#content #submenu li";$(b).hide().each(function(){$(this).delay(a).fadeIn("slow");a+=200});$(b).click(function(){$(b).stop(true,true).fadeIn()})}function formatNikePlusJson(a){var b=["#DC442F","#0073FF","#17649A","#6DABAC"];if(!a){for(var c=0;c<9;c++){var d=Math.floor(Math.random()*4);if(c==0)var e='<li style="background-color:'+b[d]+";color:#000\">Nike+ is too slow. Can't display my runs now!</li>";else var e='<li style="background-color:'+b[d]+';color:#000"></li>';$("#content #submenu ul").append(e)}}else{var f=a.runList.run;var c=f.length-1;var g=0;var h='<li style="background-color:#FFF;color:#000">'+'<img src="img/route.gif" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/>'+'<div style="margin-left:5px;float:left"><div>total distance</div><div>'+Math.round(a.runListSummary.distance*10)/10+" km</div></div></li>";var i=a.runListSummary.runDuration/1e3;i/=60;i/=60;var j=i%24;j=Math.round(j*10)/10;var k='<li style="background-color:#FFF;color:#000">'+'<img src="img/stopwatch.gif" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/>'+'<div style="margin-left:5px;float:left"><div>total hours</div><div>'+j+"</div></div></li>";var l='<li style="background-color:#FFF;color:#000">'+'<img src="img/fire.png" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/>'+'<div style="margin-left:5px;float:left"><div>calories burnt</div><div>'+a.runListSummary.calories+"</div></div></li>";$("#content #submenu ul").append(h);$("#content #submenu ul").append(k);$("#content #submenu ul").append(l);while(g<6){var d=Math.floor(Math.random()*4);var m=f[c];var n=m.duration/1e3;n/=60;var o=n%60;o=Math.round(o*10)/10;var p=m.distance;p=Math.round(p*10)/10;var q='<li style="background-color:'+b[d]+';color:#000">'+'<img src="img/nikeplus.png" style="float:left;"/>'+'<div style="margin-left:5px;float:left"><div>'+p+" km</div><div>"+o+" minutes</div></div></li>";$("#content #submenu ul").append(q);c--;g++}}}function storeNikePlusJson(a){window.nikeplusJson=a}function getNikePlusFeed(){var a="getdata.php?callback=storeNikePlusJson";var b=document.createElement("script");b.id="nikeplusjson";b.src=a;document.getElementsByTagName("body")[0].appendChild(b)}function getContactMe(){var a=[{name:"gmail",link:"mailto:niranjan.prithviraj@gmail.com",style:"background-color:#1878C0;color:#000;",logo:"background-position: 0 -570px;"},{name:"pintrest",link:"http://pinterest.com/nbprithv/",style:"background-color:#CC0000;",logo:"background-position: 0 -1010px;"},{name:"quora",link:"http://www.quora.com/Niranjan-B-Prithviraj",style:"background-color:#A82400;color:#000000",logo:"background-position: 0 -1235px;"},{name:"google plus",link:"https://plus.google.com/u/0/107223123319047956323/posts",style:"background-color:#D50F0F",logo:"background-position: 0 -668px;"},{name:"twitter",link:"http://twitter.com/nbprithv",style:"background-color:#4099FF;color:#000",logo:"background-position: 0 -1577px;"},{name:"facebook",link:"http://facebook.com/niranjanprithviraj",style:"background-color:#335795;color:#000",logo:"background-position: 0 -342px;"},{name:"linkedin",link:"http://in.linkedin.com/in/nbprithviraj",style:"background-color:#247BA7;color:#000",logo:"background-position: 0 -896px;"},{name:"foursquare",link:"https://foursquare.com/nbprithv",style:"background-color:#40B3DF;color:#000",logo:"background-position: 0 -456px;"},{name:"last.fm",link:"http://www.last.fm/user/nbprithv",style:"background-color:#C91B4A",logo:"background-position: 0 -782px;"},{name:"skype",link:"skype:niranjan.prithviraj",style:"background-color:#C91B4A",logo:"background-position: 0 -1463px;"}];for(var b=0;b<a.length;b++){var c=a[b];var d="";if(c.img)d='<img src="'+c.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+c.name+"</div>";else d='<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+c.logo+'"></div>'+"<div>"+c.name+"</div>";var e='<a href="'+c.link+'" target="blank"><li style="'+c.style+'">'+d+"</li></a>";$("#content #submenu ul").append(e)}}function getGames(){var a=[{name:"Canabalt",link:"http://adamatomic.com/canabalt/",style:"background-color:#2d2d2d;color:#FFFFFF;",img:"img/canabalt.png"},{name:"Angry Birds",link:"https://chrome.google.com/webstore/detail/aknpkdffaafgjchaibgeefbgmgeghloj",style:"background-color:#D7002E;",logo:"background-position: 0 0;"},{name:"Cut the rope",link:"http://www.cuttherope.ie/",style:"background-color:#FEBA19;color:#000000;",logo:"background-position: 0 -114px;"},{name:"Plants VS Zombies",link:"https://chrome.google.com/webstore/detail/mmcegpfdgcoclcdfkjahiimlikdpnina",style:"background-color:#6EDA14;color:#000000;",logo:"background-position: 0 -1121px;"}];for(var b=0;b<a.length;b++){var c=a[b];var d="";if(c.img)d='<img src="'+c.img+'" style="float:left;" height="64px" width="64px"/>'+'<div style="float:left;margin-left:5px;">'+c.name+"</div>";else d='<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+c.logo+'"></div>'+"<div>"+c.name+"</div>";var e='<a href="'+c.link+'" target="blank"><li style="'+c.style+'">'+d+"</li></a>";$("#content #submenu ul").append(e)}}function getBlogRoll(){var a=[{name:"TechCrunch",link:"http://techcrunch.com",style:"background-color:#000000;color:#FFF;",logo:"background-position: 0 -1349px;"},{name:"Mashable",link:"http://mashable.com",style:"background-color:#5E88B4;color:#000",logo:"background-position: 0 -1349px;"},{name:"SitePoint",link:"http://sitepoint.com",style:"background-color:#FFFFFF;color:#000000",logo:"background-position: 0 -1349px;"},{name:"FoodNetwork",link:"http://foodnetwork.com",style:"background-color:#CC0000;",logo:"background-position: 0 -1349px;"},{name:"allthingsd",link:"http://allthingsd.com",style:"background-color:#38698E",logo:"background-position: 0 -1349px;"},{name:"AutoBlog",link:"https://autoblog.com",style:"background-color:#D50F0F",logo:"background-position: 0 -1349px;"}];for(var b=0;b<a.length;b++){var c=a[b];var d='<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+c.logo+'"></div>'+'<div style="float:left;margin-left:5px;">'+c.name+"</div>";var e='<a href="'+c.link+'" target="blank"><li style="'+c.style+'">'+d+"</li></a>";$("#content #submenu ul").append(e)}}function formatFourSquareBadgeJson(a){var b=["#17649A","#40B3DF","#A8CB17","#FAAA00"];if(!a){for(var c=0;c<9;c++){var d=Math.floor(Math.random()*4);if(c==0)var e='<li style="background-color:'+b[d]+";color:#000\">FourSquare doesn't want to respond. Try reloading.</li>";else var e='<li style="background-color:'+b[d]+';color:#000"></li>';$("#content #submenu ul").append(e)}}else{var f=a.response.sets.groups[0].items;for(var c=0;c<f.length;c++){var d=Math.floor(Math.random()*4);var g=f[c];var h=a.response.badges[g];var i=h.image.prefix+h.image.sizes[0]+h.image.name;var j='<li style="background-color:'+b[d]+'">'+'<img src="'+i+'" style="float:left"/>'+'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+h.name+"</div></li>";$("#content #submenu ul").append(j)}}}function storeFSBadgeJson(a){window.foursquarebadgeJson=a}function getFourSquareBadgeJson(){var a="https://api.foursquare.com/v2/users/self/badges?oauth_token=QQUAF43HGEPHMEZFOHAHAXI5RTUO1F1KOMSSY1LO31HM13E2&v=20120308&callback=storeFSBadgeJson";var b=document.createElement("script");b.id="foursquarebadgejs";b.src=a;document.getElementsByTagName("body")[0].appendChild(b)}function formatFourSquareJson(a){var b=["#17649A","#40B3DF","#A8CB17","#FAAA00"];if(!a){for(var c=0;c<9;c++){var d=Math.floor(Math.random()*4);if(c==0)var e='<li style="background-color:'+b[d]+";color:#000\">FourSquare doesn't want to respond. Try reloading.</li>";else var e='<li style="background-color:'+b[d]+';color:#000"></li>';$("#content #submenu ul").append(e)}}else{var f=a.response.checkins.items;for(var c=0;c<f.length;c++){var d=Math.floor(Math.random()*4);var g=f[c];var h='<li style="background-color:'+b[d]+'">'+'<img src="'+g.venue.categories[0].icon+'" style="float:left" />'+'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+g.venue.name+"</div></li>";$("#content #submenu ul").append(h)}}}function storeFourSquareJson(a){window.foursquareJson=a}function getFourSquareFeed(){var a="https://api.foursquare.com/v2/users/self/checkins?oauth_token=WBIGHYBXUYZDYXHCTTDA5VDXQGOSYFMKSQWQVP55B2DDCQEV&limit=9&callback=storeFourSquareJson";var b=document.createElement("script");b.id="foursquarejs";b.src=a;document.getElementsByTagName("body")[0].appendChild(b)}function formatLastfmJson(a){var b=["#D01F3C","#D8455D","#929396","#CCCCCC"];var c=a.recenttracks.track;for(var d=0;d<9;d++){var e=Math.floor(Math.random()*4);var f=c[d];var g='<a href="'+f.url+'" target="blank">'+'<li style="background-color:'+b[e]+';color:#000;">'+'<img src="'+f.image[1]["#text"]+'" style="border:2px solid #FFF;float:left;"/>'+'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;">'+f.name+"</div></li>"+"</a>";$("#content #submenu ul").append(g)}}function storeLastfmJson(a){window.lastfmJson=a}function getLastfmFeed(){var a="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nbprithv&api_key=aaf415a4b8f5917e0f6527203bc4f048&format=json&callback=storeLastfmJson";var b=document.createElement("script");b.id="lasfmjson";b.src=a;document.getElementsByTagName("body")[0].appendChild(b)}function formatTwitterJson(a){var b=["#C3F0F2","#B3ECEF","#9AE4E8","#30D8F0"];if(!a){for(var c=0;c<9;c++){var d=Math.floor(Math.random()*4);if(c==0)var e='<li style="background-color:'+b[d]+";color:#000\">Twitter screwed me over. Can't display tweets now!</li>";else var e='<li style="background-color:'+b[d]+';color:#000"></li>';$("#content #submenu ul").append(e)}}else{for(var c=0;c<a.length;c++){var d=Math.floor(Math.random()*4);var f=a[c];var g="http://twitter.com/nbprithv/status/";var h='<a href="'+g+f.id_str+'" target="blank"><li style="background-color:'+b[d]+';color:#000">'+f.text+"</li></a>";$("#content #submenu ul").append(h)}}}function storeTwitterJson(a){window.twitterJson=a}function getTwitterFeed(){var a="https://api.twitter.com/1/statuses/user_timeline.json?screen_name=nbprithv&count=9&callback=storeTwitterJson";var b=document.createElement("script");b.id="twitterjson";b.src=a;document.getElementsByTagName("body")[0].appendChild(b)}$(document).ready(function(){getTwitterFeed();getLastfmFeed();getFourSquareFeed();getFourSquareBadgeJson();getNikePlusFeed();$("#content #mainmenu li").click(function(){$("#content #submenu ul").html("");var a=$(this).attr("id");$("#content #mainmenu li").removeClass("selected");$(this).addClass("selected");$("#content #submenu #title").html($(this).html());switch(a){case"twitter":formatTwitterJson(window.twitterJson);break;case"blogroll":getBlogRoll();break;case"foursquare":var b='<span id="fsoptions"><span id="fscheckin">checkins</span> | <span id="fsbadge" class="unselected">badges</span></span>';$("#content #submenu #title").append(b);formatFourSquareJson(window.foursquareJson);break;case"games":getGames();break;case"lastfm":formatLastfmJson(window.lastfmJson);break;case"nikeplus":formatNikePlusJson(window.nikeplusJson);break;case"contactme":getContactMe();break;default:return false}fadeIn()});$("#content #submenu #fsbadge").live("click",function(){$("#content #submenu ul").html("");$("#content #submenu #fsbadge").removeClass("unselected");$("#content #submenu #fscheckin").addClass("unselected");formatFourSquareBadgeJson(window.foursquarebadgeJson);fadeIn()});$("#content #submenu #fscheckin").live("click",function(){$("#content #submenu ul").html("");$("#content #submenu #fscheckin").removeClass("unselected");$("#content #submenu #fsbadge").addClass("unselected");formatFourSquareJson(window.foursquareJson);fadeIn()});$("#content #submenu #title").html("contact me");getContactMe();fadeIn()})