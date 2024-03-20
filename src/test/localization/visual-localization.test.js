const {By, Builder} = require('selenium-webdriver');

describe('First script', function () {
    /**
     * @type {WebDriver}
     */
    let driver;

    beforeAll(async function () {
        driver = new Builder().forBrowser('chrome').build();
    });

    it('First Selenium script with mocha', async function () {
        await driver.get('http://localhost:8080');

        let subtitle = "The future of private aviation is already here"

        let title = await driver.getTitle();
        assert.equal("Web form", title);

        await driver.manage().setTimeouts({implicit: 500});

        let textBox = await driver.findElement(By.name('my-text'));
        let submitButton = await driver.findElement(By.css('button'));

        await textBox.sendKeys('Selenium');
        await submitButton.click();

        let message = await driver.findElement(By.id('message'));
        let value = await message.getText();
        expect(value).toBe("Received!");
    });

    afterAll(async () => await driver.quit());
});