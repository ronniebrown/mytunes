// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  
  tagName: 'div',
  template: _.template('<table class="table"></table>'),
  
  initialize: function() {
    this.render();
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on( 'ended', this.render, this );
  },

  setCollection: function() {
    this.collection = collection;
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    this.collection.on('ended', this.render, this );
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    this.$('.table').append(
      this.collection.map(function (song) {
        return new SongQueueEntryView({
          model: song
        }).render();
      })
    );
  }
});
   
