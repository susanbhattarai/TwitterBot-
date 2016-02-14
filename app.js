console.log("Hello World");

var TwitterPackage = require('twitter');
var secret = {
  consumer_key : '*****************',
  consumer_secret : '******************',
  access_token_key : '*************************',
  access_token_secret : '*********************************'
}

var Twitter = new TwitterPackage(secret);

Twitter.stream('statuses/filter', {track: '#SushilKoirala'}, function(stream) {

  // ... when we get tweet data...
  stream.on('data', function(tweet) {

    // print out the text of the tweet that came in
    console.log(tweet.text);
    var messages = ["Sushil Koirala will be truly missed as a leader. @"
    , "Sushil Koirala sacrified personal life for the sake of country and the political party. @"
    , "Sushil Koirala was the consensus building prime minister of Nepal. @",
    "Mr. Koirala was the patriarch of the leading political dynasty of Nepal. @",
    "The NC emerged as the largest party in the 2013 Constituent Assembly elections under Koirala's leadership. @",
    "Saddened at the passing away of former Nepal PM. My Condolences to his family & people of Nepal.May his soul rest in peace @",
    "Fmr PM of Nepal, Nepali Congress Prez #SushilKoirala passed away due to Pneumonia at his residence. @",
    "ForeignMin says he is shocked to hear #SushilKoirala's demise.@",
    "Nepal has lost a good leader #SushilKoirala. @",
    "Death of an honest politician. #SushilKoirala @",
    "RIP 37th Prime Minister of Nepal #SushilKoirala breath his last for heavnly abode. @",
    "That's such a sad news... Prayers to the family #Nepal #SushilKoirala. @",
    "The quake hit #Nepal 6 months ago but #SushilKoirala only got displaced today! @",
    "Former PM of Nepal Sushil Koirala passed away. RIP @",
    
    ]

    function getRandom(messages) {
    	var randomIndex = Math.floor(Math.random() * messages.length);
    	return messages[randomIndex];
    }
    //build our reply object
    var statusObj = {status: getRandom(messages) + tweet.user.screen_name}

    //call the post function to tweet something
    Twitter.post('statuses/update', statusObj,  function(error, tweetReply, response){

      //if we get an error print it out
      if(error){
        console.log(error);
      }

      //print the text of the tweet we sent out
      console.log(tweetReply.text);
    });
  });

  // ... when we get an error...
  stream.on('error', function(error) {
    //print out the error
    console.log(error);
  });
});
