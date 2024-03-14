jest.mock('../../Localization')
const Localization = require('../../Localization')
const i18next = require('i18next')
const VirtualDom = require('./virtual-test-dom')

i18next.init({
    lng: 'fr',
    debug: true,
    resources: {
        fr: {
            translation: {
                'head.title': 'Mon super titre',
                'title': 'Mon super titre',
                'input.label': 'Nom de famille',
                'input.placeholder': 'Nom'
            }
        },
        en: {
            translation: {
                'head.title': 'My awesome title',
                'title': 'My awesome title',
                'input.label': 'Lastname',
                'input.placeholder': 'Name'
            }
        },
        de: {
            translations: {
                'head.title': 'Mein toller Titel',
                'title': 'Mein toller Titel',
                'input.label': 'Nachname',
                'input.placeholder': 'Name'
            }
        },
    }
})

Localization.mockImplementation(() => {
    this.i18n = i18next

    this.update = () => {
        document.querySelector('html').setAttribute('lang', this.language)
        document.querySelectorAll('[data-lang-text]').forEach(element => {
            element.textContent = this.i18n.t(element.getAttribute('data-lang-text'))
        })
        document.querySelectorAll('[data-lang-attr]').forEach(element => {
            const parts = element.getAttribute('data-lang-attr').split(':')
            element.setAttribute(parts[0], this.i18n.t(parts[1]))
        })
    }

    return {
        setLanguage: async (language) => {
            this.language = language
            await this.i18n.changeLanguage(language)
            this.update()
        },
    }})

const vDOM = new VirtualDom()

describe("When change language from FR to EN", () => {
    it('should translate the page to english', async () => {
        const loc = new Localization(document, i18next)
        await loc.setLanguage('en')
        expect(vDOM.getTitleContent().textContent).toBe('My awesome title')
        expect(vDOM.getLabelContent().textContent).toBe('Lastname')
        expect(vDOM.getInputPlaceholder()).toBe('Name')
    });
})
