// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('dequeue', this.removeSong, this);

    this.on('add', function(e) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function(e) {
      this.removeFirst();
      if(this.length !== 0) {
        this.playFirst();
      }
    });

  },

  playFirst: function() {
    this.at(0).play();
  },

  removeFirst: function() {
    this.remove(this.at(0));
  },

  removeSong: function(song) {
    this.remove(song);
  }

});
