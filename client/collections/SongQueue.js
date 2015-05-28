// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on( 'add', this.playFirst, this );
    this.on( 'dequeue', this.dequeue, this );
  },

  playFirst: function(song) {
    if (this.models.length === 1) {
      this.models[0].play();
    } 
  },

  dequeue: function(song) {
    this.shift();
  },
});