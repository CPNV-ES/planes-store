const Localization = require('../../Localization')
const VirtualDom = require('./virtual-test-dom')
const i18next = require('i18next')

jest.mock('../../Localization')

const vDOM = new VirtualDom()

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
                'input.placeholder': 'name'
            }
        },
        de: {
            translation: {
                'head.title': 'Mein toller Titel',
                'title': 'Mein toller Titel',
                'input.label': 'Nachname',
                'input.placeholder': 'Name'
            }
        },
    }
})

Localization.mockImplementation(() => {
    return {
        language: 'fr',
        context: vDOM.vDOM,
        setLanguage: (language) => {
            this.language = language
            i18next.changeLanguage(language)
            console.log(this)
        },
    }
})

describe("When change language from FR to EN", () => {
    it('should translate the page to english', () => {
        const loc = new Localization()
        loc.setLanguage('en')
        expect(loc.context.getTitleContent().textContent).toBe('My awesome title')
        expect(loc.context.getLabelContent().textContent).toBe('Lastname')
        expect(loc.context.getInputPlaceholder()).toBe('name')
    });
})
