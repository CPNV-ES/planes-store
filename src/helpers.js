
module.exports = function strToDom(str) {
    return (new Document()).createRange().createContextualFragment(str).firstChild;
}