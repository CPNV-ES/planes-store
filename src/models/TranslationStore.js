import LocalStorageUnsupportedException from "../exceptions/LocalStorageUnsupportedException";

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
        return this.#getDictionary;
    }

    set dictionary(dictionary) {
        this.#storeDictionary(dictionary);
    }

    /**
     * @return {Dictionary}
     */
    #getDictionary = () => {
        return JSON.parse(window.localStorage.getItem('dictionary') ?? '{}');
    }

}