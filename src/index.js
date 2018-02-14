const $ = require('jquery');

const nameListBuilder = require('./nameListBuilder');

var names = nameListBuilder();

var ul = $('#myList');

names.forEach(function(name){
  ul.append(`<li>${name}</li>`);
});
