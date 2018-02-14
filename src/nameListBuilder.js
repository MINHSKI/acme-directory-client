const faker = require('faker');

var names = [];
function nameListBuilder(){

  while(names.length < 10){
    names.push(faker.name.firstName());
  }
  return names;
}

module.exports = nameListBuilder;
