export default class LocalStorageUnsupportedException extends Error {
    constructor() {
        super('Local storage is not supported by your browser');
    }
}