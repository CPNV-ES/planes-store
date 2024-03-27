const {By, Builder, Select} = require('selenium-webdriver');

const APP_URL = 'http://localhost:5173/'


// TODO: Ajouter le given when then

describe("When user change the language of the page", () => {
    /**
     * @type {WebDriver}
     */
    let driver;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();
        await haveLanguageSelector(driver);
    })

    it('should translate the page to english', async () => {
        await driver.get(APP_URL);

        // When
        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('en')

        // Then
        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();
        expect(recievedText).toBe('The future of private aviation is already here')
    });

    it('should translate the page to french', async () => {
        await driver.get(APP_URL);

        // When
        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('fr')

        // Then
        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();
        expect(recievedText).toBe('Le futur de l\'aviation privée est déjà là')
    });

    it('should translate the page to german', async () => {
        await driver.get(APP_URL);

        // When
        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('de')

        // Then
        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();
        expect(recievedText).toBe('Die Zukunft der Privatfliegerei ist bereits da')
    });

    it('should translate the page to italian', async () => {
        await driver.get(APP_URL);

        // When
        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('it')

        // Then
        let recievedText = await driver.findElement(By.css('h1.subtitle')).getText();
        expect(recievedText).toBe('Il futuro dell\'aviazione privata è già qui')
    });

    it("should'nt whipe input data while translating page", async () => {
        await driver.get(APP_URL);

        let input = await driver.findElement(By.css('input[type="text"]'));
        expect(input).toBeDefined();

        // Given
        const inputContent = "Test input content"
        await input.sendKeys(inputContent)

        // TODO: Ajouter le test que la traduction à bien fonctionner

        // When
        let languageSelector = new Select(await driver.findElement(By.id('language-selector')));
        await languageSelector.selectByValue('it')

        // Then
        expect(await input.getAttribute("value")).toBe(inputContent)
    });

    afterAll(async () => {
        await driver.quit();
    })
})


const haveLanguageSelector = async (driver) => {
    let languageSelector = await driver.findElement(By.id('language-selector'));
    expect(languageSelector).toBeDefined();
}