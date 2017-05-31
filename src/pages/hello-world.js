'use strict';

export default class HelloWorld {
  
  cucumber = {
    page: '',
    domain: ''
  };

  constructor() {
    this.url = `https://${cucumber.page}.${cucumber.domain}`;
  }

  openWithUrl(url) {
    console.log(url)
  }

}
