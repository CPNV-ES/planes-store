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

        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();

        expect(recievedText).toBe('The future of private aviation is already here')
    });

    it('should translate the page to french', async () => {
        await driver.get(APP_URL);

        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('fr')

        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();

        expect(recievedText).toBe('Le futur de l\'aviation privée est déjà là')
    });

    it('should translate the page to german', async () => {
        await driver.get(APP_URL);

        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('de')

        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();

        expect(recievedText).toBe('Die Zukunft der Privatfliegerei ist bereits da')
    });

    it('should translate the page to italian', async () => {
        await driver.get(APP_URL);

        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('it')

        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();

        expect(recievedText).toBe('Il futuro dell\'aviazione privata è già qui')
    });

    it("should'nt whipe input data while translating page", async () => {
        await driver.get(APP_URL);

        const inputContent = "Test input content"

        let input = await driver.findElement(By.id('exampleInputEmail1'));

        await input.sendKeys(inputContent)

        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('it')

        expect(await input.getAttribute("value")).toBe(inputContent)
    });

    afterAll(async () => {
        await driver.quit();
    })
})
