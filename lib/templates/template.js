define(['jquery','underscore','backbone','text!lib/templates/list.html'], function($,_,Backbone,tmpl) {
	var App = Backbone.View.extend({
		initialize: function(){
		    var temp = _.template(tmpl);
   			$("body").html(temp({name: "LEd"}));
		}
	})
	return App;
});