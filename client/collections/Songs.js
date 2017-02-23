// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  server: 'http://parse.hrr.hackreactor.com/mytunes/classes/songs',

  initialize: function() {
    var context = this;
    $.ajax({
    // This is the url you should use to communicate with the parse API server.
      url: this.server,
      type: 'GET',
      contentType: 'application/json',

      success: function(songs) {
        console.log('arguments: ', arguments);
        console.log('songs received');
        var songs = songs.results;
        console.log('songs: ', songs);
        songs.forEach(function(song) {
          context.add(song);
        });
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('MyTunes: Failed to receive songs', data);
      }
    });
  }

});
