import TranslationStore from "./TranslationStore";
import AlpineI18n from "alpinejs-i18n";
import Alpine from "alpinejs";

export default class Internationalization {

    #store

    #locale

    /**
     * @type {HTMLSelectElement}
     */
    $selector


    initialize(locale) {
        this.$selector = document.querySelector('#language-selector');

        this.$selector.addEventListener('change', (event) => {
            this.locale = this.$selector.value;
        });

        this.locale = locale
        try {
            this.#store = new TranslationStore('main');
        } catch (e) {
            alert("Failed to load translations. Please try again later. \n Error details: " + e.message);
        }

        document.addEventListener("alpine-i18n:ready", () => {
            // ... scroll to Usage to see where locale and messages came from
            window.AlpineI18n.create(locale, this.#store.dictionary, {debug: false})
        });

        Alpine.plugin(AlpineI18n);
        Alpine.start();
    }

    set locale(locale) {
        document.documentElement.lang = locale;
        this.#selectLanguage(locale);
        this.#locale = locale;
    }

    #selectLanguage(locale) {
        this.$selector.value = locale;
    }

    get dictionary() {
        return this.#store.dictionary;
    }

}