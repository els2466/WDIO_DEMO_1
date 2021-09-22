class HeaderPage {

    get logoutLink() {
        return $('#navbarSupportedContent > ul > li:nth-child(4) > a')
    }

    get linkLink() {
        return $('#navbarSupportedContent > ul > li:nth-child(2) > a')
    }

    get heroFactsLink() {
        return $('#navbarDropdown')
    }

    get wolverineOption() {
        return $('#navbarSupportedContent > ul > li.nav-item.dropdown > div > a:nth-child(1)')
    }

    get spidermanOption() {
        return $('#navbarSupportedContent > ul > li.nav-item.dropdown > div > a:nth-child(2)')
    }

    get searchField() {
        return $('#search-box')
    }

    get searchButton() {
        return $('#search-form > button')
    }

    // Modal
    get wolverineModalWindow() {
        $('#wolverineModal > div > div')
    }

    get wolverineModalTitleText() {
        $('#wolverineModalLabel')
    }

    get wolverineModalContentText() {
        $('#wolverineModal > div > div > div.modal-body')
    }

    get wolverineModalCloseButton() {
        $('#wolverineModal > div > div > div.modal-header > button')
    }

    get spidermanModalWindow() {
        $('#spidermanModal > div > div')
    }

    get spidermanModalTitleText() {
        $('#spidermanModalLabel')
    }

    get spidermanModalContentText() {
        $('#spidermanModal > div > div > div.modal-body')
    }

    get spidermanModalCloseButton() {
        $('#spidermanModal > div > div > div.modal-header > button')
    }
}

module.exports = new HeaderPage
