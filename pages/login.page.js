class LoginPage {

    get headingText() {
        return $('#login-title')
    }

    get emailLabel() {
        return $('#form-login > div:nth-child(1) > label')
    }

    get emailField() {
        return $('#loginEmail')
    }

    get passwordLabel() {
        return $('#form-login > div:nth-child(2) > label')
    }

    get passwordField() {
        return $('#loginPassword')
    }

    get rememberLoginLabel() {
        return $('#form-login > div.form-check > label')
    }

    get rememberLoginCheckbox() {
        return $('#rememberLoginChk')
    }

    get submitButton() {
        return $('#form-login > button')
    }

    get overlay() {
        return $('#overlay')
    }
}

module.exports = new LoginPage
