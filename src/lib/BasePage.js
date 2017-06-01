require('babel-core/register');

import { webDriver, getDriver, rebuild } from './driver';
import { elements } from 'selenium-pageobject';

const MAX_ATTEMPTS_PER_METHOD = 10;
const WAIT_BEFORE_NEXT_ATTEMPT = 1000;

export default class BasePage {
  constructor() {
    this.baseURL = `https://www.google.com.pe`;
  }

  get _driver() {
    return getDriver();
  }

  open() {
    return this.visit(this.url);
  }

  visit(url) {
    let attemptsLeft = MAX_ATTEMPTS_PER_METHOD;
    console.log(`visit(${url}): start`);

    while (attemptsLeft > 0) {
      try {
        const currentURL = this._driver.getCurrentUrl();
        console.log(`visit(${url}): from ${currentURL}`);
        _driver.get(url);
        break;
      } catch (err) {
        console.log({ err }, `visit(${url}): failed, attemptsLeft "${attemptsLeft}"`);

        rebuild();
        attemptsLeft--;
        console.log(`Retry visit to ${url}`);
        attemptsLeft && sleep(WAIT_BEFORE_NEXT_ATTEMPT);
      }
    }

    if (attemptsLeft === 0) {
      throw new Error(`visit(${url}): failed, no more attempts left`);
    }
  }

  navigateTo(url) {
    const theUrl = `${this.baseURL}${url}`;
    return this.visit(theUrl);
  }

  back() {
    return this._driver.navigate().back();
  }

  forward() {
    return this._driver.navigate().forward();
  }

  refresh() {
    return this._driver.navigate().refresh();
  }

}
