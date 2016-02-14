var login = require("facebook-chat-api");


login({email: "sushantsusan39@gmail.com", password: "******"}, function callback (err, api) {
  if(err) return console.error(err);

  api.getFriendsList(function(err, data) {
    if(err) return console.error(err);

    console.log(data.length);
  });
});
