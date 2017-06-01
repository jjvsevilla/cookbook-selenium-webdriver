require('babel-core/register');
'use strict';

import BasePage from '../lib/BasePage';

export default class HelloWorld extends BasePage {
  
  // cucumber = {
  //   page: '',
  //   domain: ''
  // };

  constructor() {
    super();
    this.url = `http://elcomercio.pe/`;
  }

  openWithUrl(url) {
    console.log(url)
  }

}
