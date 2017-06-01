require('babel-core/register');

import webDriver from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

const buildChromeDriver = () => {
  const options = new chrome.Options();
  options.addArguments('--start-maximized');

  return new webDriver.Builder()
    .withCapabilities(options.toCapabilities())
    .build();
};

const buildDriver = () => {
  const options = new chrome.Options();
  options.addArguments('--start-maximized');

  let _driver = new webDriver.Builder()
                .withCapabilities(options.toCapabilities())
                .build();

  const manage = _driver.manage();
  const timeouts = manage.timeouts();

  manage.window().maximize();
  manage.deleteAllCookies();

  // timeouts.pageLoadTimeout(selenium.pageLoadTimeout);
  // timeouts.setScriptTimeout(selenium.setScriptTimeout);

  return _driver;
};

let driver = buildDriver();

const getDriver = () => driver;

const getWebDriver = () => webDriver;

module.exports = {
  driver,
  webDriver,
  getWebDriver,
  getDriver,
  rebuild() {
    driver = buildDriver();
    return driver;
  },
  maximize: () => {
    const win = driver.manage().window(); // eslint-disable-line
    win.maximize();
  },
};
