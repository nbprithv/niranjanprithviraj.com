(function($,e,b){var c="hashchange",h=document,f,g=$.event.special,i=h.documentMode,d="on"+c in e&&(i===b||i>7);function a(j){j=j||location.href;return"#"+j.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[c]=function(j){return j?this.bind(c,j):this.trigger(c)};$.fn[c].delay=50;g[c]=$.extend(g[c],{setup:function(){if(d){return false}$(f.start)},teardown:function(){if(d){return false}$(f.stop)}});f=(function(){var j={},p,m=a(),k=function(q){return q},l=k,o=k;j.start=function(){p||n()};j.stop=function(){p&&clearTimeout(p);p=b};function n(){var r=a(),q=o(m);if(r!==m){l(m=r,q);$(e).trigger(c)}else{if(q!==m){location.href=location.href.replace(/#.*/,"")+q}}p=setTimeout(n,$.fn[c].delay)}$.browser.msie&&!d&&(function(){var q,r;j.start=function(){if(!q){r=$.fn[c].src;r=r&&r+a();q=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){r||l(a());n()}).attr("src",r||"javascript:0").insertAfter("body")[0].contentWindow;h.onpropertychange=function(){try{if(event.propertyName==="title"){q.document.title=h.title}}catch(s){}}}};j.stop=k;o=function(){return a(q.location.href)};l=function(v,s){var u=q.document,t=$.fn[c].domain;if(v!==s){u.title=h.title;u.open();t&&u.write('<script>document.domain="'+t+'"<\/script>');u.close();q.location.hash=v}}})();return j})()})(jQuery,this);
$(document).ready(function(){if(!location.hash){$("#content #mainmenu #contactme").addClass("selected");$("#content #submenu #title").html("contact me");getContactMe();fadeIn()}else{var a=location.hash;tabDisplay(a.substring(1))}$("#content #mainmenu li").click(function(){var b=$(this).attr("id");tabDisplay(b)});$("#content #submenu #fsbadge").live("click",function(){$("#content #submenu ul").html("");$("#content #submenu #fsbadge").removeClass("unselected");$("#content #submenu #fscheckin").addClass("unselected");init(getFourSquareBadgeJson);fadeIn()});$("#content #submenu #fscheckin").live("click",function(){$("#content #submenu ul").html("");$("#content #submenu #fscheckin").removeClass("unselected");$("#content #submenu #fsbadge").addClass("unselected");init(getFourSquareFeed);fadeIn()})});function tabDisplay(b){$("#content #submenu ul").html("");$("#content #mainmenu li").removeClass("selected");$("#"+b).addClass("selected");$("#content #submenu #title").html($("#"+b).html());switch(b){case"twitter":init(getTwitterFeed);break;case"blogroll":init(getBlogRoll);break;case"foursquare":break;case"github":init(getGitHub);break;case"games":init(getGames);break;case"lastfm":var a='<span id="fsoptions" style="text-decoration:underline;"><a href="/tools/lastfm.php?userid=nbprithv">lastfm collage</a></span>';$("#content #submenu #title").append(a);init(getLastfmFeed);break;case"nikeplus":break;case"contactme":init(getContactMe);break;case"blog":var a='<span id="fsoptions" style="text-decoration:underline;"><a href="/blog">go to blog >></a></span>';$("#content #submenu #title").append(a);init(getBlogFeed);break;default:return false}}function fadeIn(){var b=0;var a="#content #submenu li";$(a).hide().each(function(){$(this).delay(b).fadeIn("slow");b+=200});$(a).click(function(){$(a).stop(true,true).fadeIn()})};function init(a){$("#loader").show();$("#content #submenu ul").html("");a()}function getTwitterFeed(){var a="https://api.twitter.com/1/statuses/user_timeline.json?screen_name=nbprithv&count=9&callback=formatTwitterJson";$.ajax({url:a,dataType:"jsonp",jsonpCallback:"formatTwitterJson",success:function(b){$("#loader").hide();fadeIn()},})}function formatTwitterJson(e){var a=["#C3F0F2","#B3ECEF","#9AE4E8","#30D8F0"];if(!e){for(var c=0;c<9;c++){var h=Math.floor(Math.random()*4);if(c==0){var g='<li style="background-color:'+a[h]+";color:#000\">Twitter screwed me over. Can't display tweets now!</li>"}else{var g='<li style="background-color:'+a[h]+';color:#000"></li>'}$("#content #submenu ul").append(g)}}else{for(var c=0;c<e.length;c++){var h=Math.floor(Math.random()*4);var f=e[c];var b="http://twitter.com/nbprithv/status/";var d='<a href="'+b+f.id_str+'" target="blank"><li style="background-color:'+a[h]+';color:#000">'+f.text+"</li></a>";$("#content #submenu ul").append(d)}}}function getLastfmFeed(){var a="http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=nbprithv&api_key=aaf415a4b8f5917e0f6527203bc4f048&format=json&callback=storeLastfmJson";$.ajax({url:a,dataType:"jsonp",jsonpCallback:"formatLastfmJson",success:function(b){$("#loader").hide();fadeIn()},})}function formatLastfmJson(e){var b=["#D01F3C","#D8455D","#929396","#CCCCCC"];var f=e.recenttracks.track;for(var a=0;a<9;a++){var g=Math.floor(Math.random()*4);var d=f[a];var c='<a href="'+d.url+'" target="blank"><li style="background-color:'+b[g]+';color:#000;"><img src="'+d.image[1]["#text"]+'" style="border:2px solid #FFF;float:left;"/><div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;">'+d.name+"</div></li></a>";$("#content #submenu ul").append(c)}}function getFourSquareFeed(){var a="https://api.foursquare.com/v2/users/self/checkins?oauth_token=WBIGHYBXUYZDYXHCTTDA5VDXQGOSYFMKSQWQVP55B2DDCQEV&limit=9&callback=storeFourSquareJson";$.ajax({url:a,dataType:"jsonp",jsonpCallback:"formatFourSquareJson",success:function(c){if(c.meta.code==500){for(var b=0;b<9;b++){var e=Math.floor(Math.random()*4);if(b==0){var d='<li style="background-color:'+fscolor[e]+";color:#000\">FourSquare doesn't want to respond. Try reloading.</li>"}else{var d='<li style="background-color:'+fscolor[e]+';color:#000"></li>'}$("#content #submenu ul").append(d)}}else{formatFourSquareJson(c);fadeIn()}},error:function(b){},})}function formatFourSquareJson(c){var h=["#17649A","#40B3DF","#A8CB17","#FAAA00"];if(!c){for(var d=0;d<9;d++){var e=Math.floor(Math.random()*4);if(d==0){var g='<li style="background-color:'+h[e]+";color:#000\">FourSquare doesn't want to respond. Try reloading.</li>"}else{var g='<li style="background-color:'+h[e]+';color:#000"></li>'}$("#content #submenu ul").append(g)}}else{var a=c.response.checkins.items;for(var d=0;d<a.length;d++){var e=Math.floor(Math.random()*4);var j=a[d];var f="";if(j.venue.categories[0]){f='<img src="'+j.venue.categories[0].icon+'" style="float:left" />'}var b='<li style="background-color:'+h[e]+'">'+f+'<div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+j.venue.name+"</div></li>";$("#content #submenu ul").append(b)}}}function getFourSquareBadgeJson(){var a="https://api.foursquare.com/v2/users/self/badges?oauth_token=QQUAF43HGEPHMEZFOHAHAXI5RTUO1F1KOMSSY1LO31HM13E2&v=20120308&callback=storeFSBadgeJson";$.ajax({url:a,dataType:"jsonp",jsonpCallback:"formatFourSquareBadgeJson",success:function(c){$("#loader").hide();if(c.meta.code==500){for(var b=0;b<9;b++){var e=Math.floor(Math.random()*4);if(b==0){var d='<li style="background-color:'+fscolor[e]+";color:#000\">FourSquare doesn't want to respond. Try reloading.</li>"}else{var d='<li style="background-color:'+fscolor[e]+';color:#000"></li>'}$("#content #submenu ul").append(d)}}else{formatFourSquareBadgeJson(c)}fadeIn()},error:function(){console.log("ddd")}})}function formatFourSquareBadgeJson(d){var k=["#17649A","#40B3DF","#A8CB17","#FAAA00"];if(d.meta.code==500){for(var e=0;e<9;e++){var f=Math.floor(Math.random()*4);if(e==0){var j='<li style="background-color:'+k[f]+";color:#000\">FourSquare doesn't want to respond. Try reloading.</li>"}else{var j='<li style="background-color:'+k[f]+';color:#000"></li>'}$("#content #submenu ul").append(j)}}else{var h=d.response.sets.groups[0].items;for(var e=0;e<h.length;e++){var f=Math.floor(Math.random()*4);var c=h[e];var b=d.response.badges[c];var g=b.image.prefix+b.image.sizes[0]+b.image.name;var a='<li style="background-color:'+k[f]+'"><img src="'+g+'" style="float:left"/><div style="float:left;overflow:none;width:40px;white-space:nowrap;margin-left:5px;color:#000">'+b.name+"</div></li>";$("#content #submenu ul").append(a)}}}function getBlogRoll(){var a=[{name:"TechCrunch",link:"http://techcrunch.com",style:"background-color:#000000;color:#FFF;",logo:"background-position: 0 -1349px;"},{name:"Mashable",link:"http://mashable.com",style:"background-color:#5E88B4;color:#000",logo:"background-position: 0 -1349px;"},{name:"SitePoint",link:"http://sitepoint.com",style:"background-color:#FFFFFF;color:#000000",logo:"background-position: 0 -1349px;"},{name:"FoodNetwork",link:"http://foodnetwork.com",style:"background-color:#CC0000;",logo:"background-position: 0 -1349px;"},{name:"allthingsd",link:"http://allthingsd.com",style:"background-color:#38698E",logo:"background-position: 0 -1349px;"},{name:"AutoBlog",link:"https://autoblog.com",style:"background-color:#D50F0F",logo:"background-position: 0 -1349px;"},];for(var b=0;b<a.length;b++){var d=a[b];var e='<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+d.logo+'"></div><div style="float:left;margin-left:5px;">'+d.name+"</div>";var c='<a href="'+d.link+'" target="blank"><li style="'+d.style+'">'+e+"</li></a>";$("#content #submenu ul").append(c)}}function getGames(){var e=[{name:"Canabalt",link:"http://adamatomic.com/canabalt/",style:"background-color:#2d2d2d;color:#FFFFFF;",img:"img/canabalt.png"},{name:"Angry Birds",link:"https://chrome.google.com/webstore/detail/aknpkdffaafgjchaibgeefbgmgeghloj",style:"background-color:#D7002E;",logo:"background-position: 0 0;"},{name:"Cut the rope",link:"http://www.cuttherope.ie/",style:"background-color:#FEBA19;color:#000000;",logo:"background-position: 0 -114px;"},{name:"Plants VS Zombies",link:"https://chrome.google.com/webstore/detail/mmcegpfdgcoclcdfkjahiimlikdpnina",style:"background-color:#6EDA14;color:#000000;",logo:"background-position: 0 -1121px;"}];$("#loader").hide();for(var a=0;a<e.length;a++){var c=e[a];var d="";if(c.img){d='<img src="'+c.img+'" style="float:left;" height="64px" width="64px"/><div style="float:left;margin-left:5px;">'+c.name+"</div>"}else{d='<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+c.logo+'"></div><div>'+c.name+"</div>"}var b='<a href="'+c.link+'" target="blank"><li style="'+c.style+'">'+d+"</li></a>";$("#content #submenu ul").append(b)}fadeIn()}function getContactMe(){var a=[{name:"gmail",link:"mailto:niranjan.prithviraj@gmail.com",style:"background-color:#1878C0;color:#000;",logo:"background-position: 0 -570px;"},{name:"github",link:"http://github.com/nbprithv",style:"background-color:#F6F6F6;color:#000",img:"img/github_icon.png"},{name:"twitter",link:"http://twitter.com/nbprithv",style:"background-color:#4099FF;color:#000",logo:"background-position: 0 -1577px;"},{name:"quora",link:"http://www.quora.com/Niranjan-B-Prithviraj",style:"background-color:#A82400;color:#000000",logo:"background-position: 0 -1235px;"},{name:"linkedin",link:"http://in.linkedin.com/in/nbprithviraj",style:"background-color:#247BA7;color:#000",logo:"background-position: 0 -896px;"},{name:"skype",link:"skype:niranjan.prithviraj",style:"background-color:#C91B4A",logo:"background-position: 0 -1463px;"}];$("#loader").hide();for(var b=0;b<a.length;b++){var d=a[b];var e="";if(d.img){e='<img src="'+d.img+'" style="float:left;" height="64px" width="64px"/><div style="float:left;margin-left:5px;">'+d.name+"</div>"}else{e='<div class="logo" style="background:url(\'img/sprites.png\') no-repeat;'+d.logo+'"></div><div>'+d.name+"</div>"}var c='<a href="'+d.link+'" target="blank"><li style="'+d.style+'">'+e+"</li></a>";$("#content #submenu ul").append(c)}fadeIn()}function getNikePlusFeed(){var a="getdata.php?callback=storeNikePlusJson";var b=document.createElement("script");b.id="nikeplusjson";b.src=a;document.getElementsByTagName("body")[0].appendChild(b)}function storeNikePlusJson(a){window.nikeplusJson=a}function formatNikePlusJson(k){var c=["#DC442F","#0073FF","#17649A","#6DABAC"];if(!k){for(var l=0;l<9;l++){var m=Math.floor(Math.random()*4);if(l==0){var q='<li style="background-color:'+c[m]+";color:#000\">Nike+ is too slow. Can't display my runs now!</li>"}else{var q='<li style="background-color:'+c[m]+';color:#000"></li>'}$("#content #submenu ul").append(q)}}else{var h=k.runList.run;var l=h.length-1;var g=0;var r='<li style="background-color:#FFF;color:#000"><img src="img/route.gif" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/><div style="margin-left:5px;float:left"><div>total distance</div><div>'+Math.round(k.runListSummary.distance*10)/10+" km</div></div></li>";var o=k.runListSummary.runDuration/1000;o/=60;o/=60;var b=o;b=Math.round(b*10)/10;var n='<li style="background-color:#FFF;color:#000"><img src="img/stopwatch.gif" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/><div style="margin-left:5px;float:left"><div>total hours</div><div>'+b+"</div></div></li>";var s='<li style="background-color:#FFF;color:#000"><img src="img/fire.png" style="border:2px solid #FFF;float:left;" height="64px" width="64px"/><div style="margin-left:5px;float:left"><div>calories burnt</div><div>'+k.runListSummary.calories+"</div></div></li>";$("#content #submenu ul").append(r);$("#content #submenu ul").append(n);$("#content #submenu ul").append(s);while(g<6){var m=Math.floor(Math.random()*4);var e=h[l];var p=e.duration/1000;p/=60;var f=p%60;f=Math.round(f*10)/10;var a=e.distance;a=Math.round(a*10)/10;var d='<li style="background-color:'+c[m]+';color:#000"><img src="img/nikeplus.png" style="float:left;"/><div style="margin-left:5px;float:left"><div>'+a+" km</div><div>"+f+" minutes</div></div></li>";$("#content #submenu ul").append(d);l--;g++}}}function getBlogFeed(){var a="http://niranjanprithviraj.com/blog/?feed=json&jsonp=formatBlogJson";$.ajax({url:a,dataType:"jsonp",jsonpCallback:"formatBlogJson",success:function(b){$("#loader").hide();fadeIn()},})}function formatBlogJson(d){var e=["#17649A","#40B3DF","#A8CB17","#FAAA00"];if(!d){for(var a=0;a<9;a++){var g=Math.floor(Math.random()*4);if(a==0){var f='<li style="background-color:'+e[g]+";color:#000\">Blog is too slow. Can't display my recent posts now!</li>"}else{var f='<li style="background-color:'+e[g]+';color:#000"></li>'}$("#content #submenu ul").append(f)}}else{var h=d;for(var a=0;a<9;a++){var g=Math.floor(Math.random()*4);var c=h[a];var b='<a href="'+c.permalink+'" target="blank"><li style="background-color:'+e[g]+';color:#000;"><div style="float:left;overflow:none;margin-left:5px;">'+c.title+"</div></li></a>";$("#content #submenu ul").append(b)}}}function getGitHub(){var a="http://niranjanprithviraj.com/getdata.php?action=github";$.ajax({url:a,dataType:"jsonp",jsonpCallback:"formatGitHubJson",success:function(b){$("#loader").hide();fadeIn()},})}function formatGitHubJson(e){var g=["#F6F6F6"];var a=["img/github.png","img/github_icon.png","img/github_logo.png"];if(!e){for(var f=0;f<9;f++){var h=0;if(f==0){var k='<li style="background-color:'+g[h]+";color:#000\">Blog is too slow. Can't display my recent posts now!</li>"}else{var k='<li style="background-color:'+g[h]+';color:#000"></li>'}$("#content #submenu ul").append(k)}}else{var j=e;for(var f=0;f<9;f++){var h=0;var b=Math.floor(Math.random()*3);var c=j[f];var d='<a href="'+c.permalink+'" target="blank"><li style="background-color:'+g[h]+';color:#000;"><div style="float:left;overflow:none;margin-left:5px;">'+c.title+"</div></li></a>";var d='<a href="'+c.link+'" target="_blank"><li style="background-color:'+g[h]+';color:#000;"><img src="'+a[b]+'" style="border:2px solid #FFF;float:left;height:64px;width:64px;"/><div style="float:left;width:175px;margin-left:5px;">'+c.title+"</div></li></a>";$("#content #submenu ul").append(d)}}};