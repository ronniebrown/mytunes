// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on( 'add', this.enqueue, this );
    this.on( 'ended', this.ended, this );
    this.on( 'dequeue', this.dequeue, this );
  },

  ended: function() {
    this.dequeue();
    this.enqueue(); 
  },

  enqueue: function() {
    if (this.models.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {
    this.models[0].play();
  },

  dequeue: function(song) {
    if (song) {
      this.remove(song);
    } else {
      this.shift();
    }
  },

  
});