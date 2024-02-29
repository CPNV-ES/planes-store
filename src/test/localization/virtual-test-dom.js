const {strToDom} = require('../../helpers')

module.exports = class {

    constructor(title = 'Mon super titre', label = 'Nom de famille', placeholder = 'Nom', value = 'Rutz') {
        this.vDOM = new Document()
        this.vDOM.append(strToDom(`<html lang="fr">
    <head>
        <title data-lang-text="head.title">${title}</title>
    </head>
    <body>
        <h1 data-lang-text="title">${title}</h1>
        <label data-lang-text="input.label">${label}</label>
        <input data-lang-attr="placeholder:input.placeholder" placeholder="${placeholder}" value="${value}"/>
    </body>
</html>`))
    }

    getInputValue() {
        return this.vDOM.querySelector('input').value
    }

    getInputPlaceholder() {
        return this.vDOM.querySelector('input').getAttribute('placeholder')
    }

    getLabelContent() {
        return this.vDOM.querySelector('label')
    }

    getH1Content() {
        return this.vDOM.querySelector('h1')
    }

    getTitleContent() {
        return this.vDOM.querySelector('title')
    }

    querySelector(selector) {
        return this.vDOM.querySelector(selector)
    }

    querySelectorAll(selector) {
        return this.vDOM.querySelectorAll(selector)
    }

}