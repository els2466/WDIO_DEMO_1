const LoginPage = require('../pages/login.page')
const HeaderPage = require('../pages/header.page')
const assert = require('assert')

describe('Login Test Suite', () => {

    // email: 1@2.com
    // password: password
    it('should display error when password is missing', () => {

        browser.url('/')

        LoginPage.emailField.setValue('ed@gmail.com')
        LoginPage.submitButton.click()

        assert.equal(browser.isAlertOpen(), true, 'alert is not open')
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'alert text is not equal')

        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'alert is still open')
    })

    it('should display error when email is missing', () => {

        browser.url('/')

        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(browser.isAlertOpen(), true, 'alert is not open')
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'alert text is not equal')

        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'alert is still open')
    })

    it('should display error when email and password is missing', () => {
        browser.url('/')

        LoginPage.submitButton.click()

        assert.equal(browser.isAlertOpen(), true, 'alert is not open')
        assert.equal(browser.getAlertText(), 'Please enter an email and password', 'alert text is not equal')

        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'alert is still open')
    })

    it('should display error when email is incorrect', () => {

        browser.url('/')

        LoginPage.emailField.setValue('ed@gmail.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(browser.isAlertOpen(), true, 'alert is not open')
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'alert text is not equal')

        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'alert is still open')
    })

    it('should display error when password is incorrect', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('pass')
        LoginPage.submitButton.click()

        assert.equal(browser.isAlertOpen(), true, 'alert is not open')
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'alert text is not equal')

        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'alert is still open')
    })
    it('should display error when password case is incorrect', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('Password')
        LoginPage.submitButton.click()

        assert.equal(browser.isAlertOpen(), true, 'alert is not open')
        assert.equal(browser.getAlertText(), 'Invalid email and password', 'alert text is not equal')

        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'alert is still open')
    })

    it('should login with valid email and password', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')
    })

    it('should remember login credentials', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.rememberLoginCheckbox.click()
        LoginPage.submitButton.click()

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'overlay is still displayed')

        HeaderPage.logoutLink.click()

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'overlay is not displayed')

        assert.equal(LoginPage.emailField.getValue(), '1@2.com', 'values not the same')
        assert.equal(LoginPage.passwordField.getValue(), 'password', 'values not the same')
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), true)
    })

    it('should not remember login credentials', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'overlay is still displayed')

        HeaderPage.logoutLink.click()

        assert.equal(LoginPage.overlay.isDisplayed(), true, 'overlay is not displayed')

        assert.equal(LoginPage.emailField.getValue(), '', 'values not the same')
        assert.equal(LoginPage.passwordField.getValue(), '', 'values not the same')
        assert.equal(LoginPage.rememberLoginCheckbox.isSelected(), false)
    })
})