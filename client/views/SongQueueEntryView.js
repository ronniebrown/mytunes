// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function() {
    this.render();
  },

  tagName: 'tr',

  template: _.template('<td>(<%= Artist %>)</td><td><%= Song %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      this.model.play();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
