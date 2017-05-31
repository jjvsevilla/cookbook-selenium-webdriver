'use strict';
import HelloWorld from '../pages/hello-world';

// var HelloWorld = require('../pages/hello-world');

module.exports = function helloWorldStepDefs() {

  console.log('loading')
  const helloWorld = new HelloWorld();

  When('I click the search button', function (callback) {
    console.log('method 1')
  });

  When('I click the search button', function (callback) {
    console.log('method 2')
  });
                                                                                    
 Then('something happens', function (callback) {       
    console.log('method 3')                                                
 }); 

};
