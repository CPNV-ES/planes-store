const i18next = require('i18next')
module.exports = class Localization {
    language

    /**
     * @property {i18next}
     */
    i18n

    constructor(i18n) {
        this.language = 'fr'
        this.i18n = i18n
    }
}