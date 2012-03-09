$(document).ready(function(){
	console.log('locked and loaded');
	//call twitter
	callTwitter();
	//call blog roll
	//call foursquare
	//call lastfm
});

function callTwitter(){
	$.ajax({
		url:'ws/getFeed.php?action=twitterfeed',
		method:'GET',
		success:function(data){
			$.each(data,function(i){
				var tweet = data[i];
				var obj = {};
				obj.type = 'div';
				obj.id = 'tweet_'+tweet.id;
				obj.innerHTML = tweet.tweet;
				var tweetDiv = returnHTML(obj);
				$('#twitter_innercontent').append(tweetDiv);
			});
			
		}
	});
}


function returnHTML(obj){
	var element = '<'+obj.type;
	if(obj.id) element += ' id="'+obj.id+'"';
	if(obj.className) element += ' class="'+obj.className+'"';
	element += '>';
	if(obj.innerHTML)element += obj.innerHTML; 
	element += '</'+obj.type+'>'; 
	return element;
}
