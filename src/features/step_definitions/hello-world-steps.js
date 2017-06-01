require('babel-core/register');
'use strict';

console.log('helloWorldSteps')
var HelloWorld = require('../../pages/hello-world');
console.log(HelloWorld)

module.exports = function helloWorldSteps() {

  console.log('loading helloWorldSteps')
  const helloWorld = new HelloWorld();
  console.log(helloWorld)

  Given('I open the web browser', function (callback) {
    console.log('Given')
    helloWorld.openWithUrl('https://www.facebook.com/');
  });

  When('I click the search button', function (callback) {
    console.log('When')
  });
                                                                                    
  Then('something happens', function (callback) {
    console.log('Then')                                                
 }); 

};
