module.exports = class Localization {
    language
    context

    constructor(context = document) {
    }

    update() {
        this.context.querySelector('html').setAttribute('lang', language)
        this.context.querySelectorAll('[data-lang-text]').forEach(element => {
            element.textContent = this.i18n.t(element.getAttribute('data-lang-text'))
        })
        this.context.querySelectorAll('[data-lang-attr]').forEach(element => {
            const parts = element.getAttribute('data-lang-attr').split(':')
            element.setAttribute(parts[0], this.i18n.t(parts[1]))
        })
    }

    setLanguage(language) {
    }

}