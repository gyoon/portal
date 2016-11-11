// Gets called when running npm start

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.dev.config');

console.log('Starting server...\n');

new WebpackDevServer(webpack(config), { // Start a server
  publicPath: config.output.publicPath,
  hot: true,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  },
  inline: true,
  quiet: false,
  historyApiFallback: true
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
    console.log('Listening at localhost:3000');
  }
});



{
   /* passport.use(new TumblrStrategy({
            consumerKey: TUMBLR_CONSUMER_KEY,
            consumerSecret: TUMBLR_SECRET_KEY,
            callbackURL: "http://172.21.81.189:3000/auth/tumblr/callback"
        },
        function(token, tokenSecret, profile, done) {
            console.log("token:" + token); // 인증 이후 auth token을 출력할 것이다.
            console.log("token secret:" + tokenSecret); // 인증 이후 auto token secret을 출력할 것이다.
            process.nextTick(function () {
                return done(null, profile);
            });
        }
    ));

    app.get('/auth/tumblr',
        passport.authenticate('tumblr'),
        function(req, res){
            // The request will be redirected to Tumblr for authentication, so this
            // function will not be called.
        });

    app.get('/auth/tumblr/callback',
        passport.authenticate('tumblr', { failureRedirect: '/' }),
        function(req, res) {
            res.redirect('/');
        });
*/
}