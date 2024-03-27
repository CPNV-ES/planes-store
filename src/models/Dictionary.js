

export default class Dictionary {

    /**
     * @type {Record<string, Object>}
     */
    languages

    static createFromObject = (json) => {
        const dictionary = new Dictionary();
        dictionary.languages = json.languages;
        return dictionary;
    }

    static createFromStorage = async () => {
        const content = await import('../dictionary.json')
        const dictionary = new Dictionary();
        dictionary.languages = content.default.languages;
        return dictionary;
    }

    isEmpty = () => {
        return !this.languages;
    }

}