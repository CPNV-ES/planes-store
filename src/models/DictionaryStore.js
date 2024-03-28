import LocalStorageUnsupportedException from "../exceptions/LocalStorageUnsupportedException";
import dictionary from '../translations/messages';

export default class DictionaryStore {

    constructor(namespace) {
        if (!window.localStorage) throw new LocalStorageUnsupportedException();
        if (this.dictionary.length === 0) {
            this.dictionary = dictionary[namespace] ?? {}
        }
    }

    #storeDictionary = (dictionary) => {
        window.localStorage.setItem('dictionary', JSON.stringify(dictionary ?? this.dictionary));
    }

    get dictionary() {
        return this.#getDictionary();
    }

    set dictionary(dictionary) {
        this.#storeDictionary(dictionary);
    }

    /**
     * @return {Object}
     */
    #getDictionary = () => {
        return JSON.parse(window.localStorage.getItem('dictionary') ?? '{}');
    }

}