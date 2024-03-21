const strToDom = require('../../helpers')

module.exports = class {

    constructor(title = 'Mon super titre', label = 'Nom de famille', placeholder = 'Nom', value = 'Rutz') {
        document.body.innerHTML = `<h1 data-lang-text="title">${title}</h1>
        <label data-lang-text="input.label">${label}</label>
        <input data-lang-attr="placeholder:input.placeholder" placeholder="${placeholder}" value="${value}"/>`
        document.querySelector('head').append(strToDom(`<title data-lang-text="head.title">${title}</title>`))
        document.querySelector('html').setAttribute('lang', 'fr')
    }

    getInputValue() {
        return document.querySelector('input').value
    }

    getInputPlaceholder() {
        return this.querySelector('input').getAttribute('placeholder')
    }

    getLabelContent() {
        return this.querySelector('label')
    }

    getH1Content() {
        return this.querySelector('h1')
    }

    getTitleContent() {
        return this.querySelector('title')
    }

    querySelector(selector) {
        return document.querySelector(selector)
    }

    querySelectorAll(selector) {
        return document.querySelectorAll(selector)
    }

}