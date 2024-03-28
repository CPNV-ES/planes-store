const {By, Builder, Select} = require('selenium-webdriver');

const APP_URL = 'http://localhost:5173/'


// TODO: Ajouter le given when then

describe("When user change the language of the page", () => {
    /**
     * @type {WebDriver}
     */
    let driver;

    const testedElement = 'h1.subtitle'

    let selector;
    let element;

    beforeEach(async () => {
        driver = await new Builder().forBrowser('chrome').build();

        await driver.get(APP_URL);

        setTimeout(async () => {
            await haveLanguageSelector(driver);
        }, 5000)

        selector = new Select(await driver.findElement(By.id('language-selector')));

        element = await driver.findElement(By.css(testedElement))
    })

    it('should translate the page to english', async () => {
        // Given
        await selector.selectByValue('fr')
        const testedText = 'The future of private aviation is already here'

        await isNotTranslated(driver, testedText)

        // When
        await selector.selectByValue('en')

        // Then
        let recievedText = await element.getText();
        expect(recievedText).toBe(testedText)
    });

    it('should translate the page to french', async () => {
        // Given
        const testedText = 'Le futur de l\'aviation privée est déjà là'

        // When
        await selector.selectByValue('fr')

        // Then
        let recievedText = await element.getText();
        expect(recievedText).toBe(testedText)

    });

    it('should translate the page to german', async () => {
        // Given
        const testedText = 'Die Zukunft der Privatfliegerei ist bereits da'

        await isNotTranslated(driver, testedText)

        // When
        await selector.selectByValue('de')

        // Then
        let recievedText = await element.getText();
        expect(recievedText).toBe(testedText)
    });

    it("should'nt whipe input data while translating page", async () => {
        let input = await driver.findElement(By.css('input[type="text"]'));
        expect(input).toBeDefined();

        // Given
        const inputContent = "Test input content"
        await input.sendKeys(inputContent)

        // When
        await selector.selectByValue('fr')

        // Then
        expect(await input.getAttribute("value")).toBe(inputContent)
    });

    afterEach(async () => {
        await driver.quit();
    })
})


const haveLanguageSelector = async (driver) => {
    let languageSelector = await driver.findElement(By.id('language-selector'));
    expect(languageSelector).toBeDefined();
}

const isNotTranslated = async (driver, exceptedText) => {
    let receivedText = await driver.findElement(By.css('h1.subtitle')).getText();
    expect(receivedText).not.toBe(exceptedText)
}