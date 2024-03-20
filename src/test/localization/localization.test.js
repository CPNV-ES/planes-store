const {By, Builder, Select} = require('selenium-webdriver');

const APP_URL = 'http://localhost:5173/'

describe("When user change the language of the page", () => {
    /**
     * @type {WebDriver}
     */
    let driver;

    beforeAll(async () => {
        driver = await new Builder().forBrowser('chrome').build();
    })

    it('should translate the page to english', async () => {
        await driver.get(APP_URL);

        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('en')

        expect(driver.findElement(By.css('[data-lang-text="hero.tagline"]')).getText()).toBe('The future of private aviation is already here')
    });

    afterAll(async () => {
        await driver.quit();
    })
})
