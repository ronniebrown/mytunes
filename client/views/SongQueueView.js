// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({



  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on( 'ended', this.ended, this );
  },

  setCollection: function(collection) {
    this.collection = collection;
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on( 'ended', this.ended, this );

  },

  render: function() {

    this.$el.html('<tr><th>Artist</th><th>Song</th></tr>');
    
    return this.$el;
    
  }

});
