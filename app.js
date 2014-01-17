require.config({
  config: {
    text: {
      useXhr: function (url, protocol, hostname, port) {
        // allow cross-domain requests
        // remote server allows CORS
        return true;
      }
    }
  }, 
  paths: {
    "jquery": "https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    "underscore": "lib/underscore",
    "backbone": "lib/backbone",
    "text":"lib/text"
  },
  shim: {
        jquery: {
          exports: '$'
        },
        underscore: {
          deps:["jquery"],
          exports: '_'
        },
        backbone: {
          deps:["jquery"],
          exports: 'Backbone'
        }
      }
});

require(['lib/templates/template'], function(template) {
	new template;
});
