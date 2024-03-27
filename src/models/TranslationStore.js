import LocalStorageUnsupportedException from "../exceptions/LocalStorageUnsupportedException";
import Dictionary from "./Dictionary";

export default class TranslationStore {

    constructor() {
        if (!window.localStorage) throw new LocalStorageUnsupportedException();
        this.dictionary = this.getDictionary();
        if (this.dictionary.isEmpty()) {
            this.dictionary = new Dictionary();
            this.storeDictionary();
        }
    }

    storeDictionary = (dictionary) => {
        window.localStorage.setItem('dictionary', JSON.stringify(dictionary ?? this.dictionary));
    }

    get dictionary() {
        return this.getDictionary;
    }

    set dictionary(dictionary) {
        this.storeDictionary(dictionary);
    }

    /**
     * @return {Dictionary}
     */
    getDictionary = () => {
        return Dictionary.createFromObject(JSON.parse(window.localStorage.getItem('dictionary') ?? '{}'));
    }

}