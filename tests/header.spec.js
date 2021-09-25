const LoginPage = require('../pages/login.page')
const HeaderPage = require('../pages/header.page')
const assert = require('assert')

describe('Header Test Suite', () => {

    it('should redirect to new site', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.linkLink.click()

        assert.equal(browser.getUrl(), 'https://glitchitsystem.com/')
    })

    it('should open Wolverine modal', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.heroFactsLink.click()
        HeaderPage.wolverineOption.click()

        browser.pause(1000)
        //assert.equal($('').isDisplayed(), true, 'modal is not displayed')
        assert.equal($('#wolverineModalLabel').getText(), 'Wolverine Fact')
        assert.equal($('#wolverineModal > div > div > div.modal-body').getText(), 'Wolverine made his first comic book appearance in 1974.')
    })

    it('should open Spiderman modal', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.heroFactsLink.click()
        HeaderPage.spidermanOption.click()

        browser.pause(1000)
        //assert.equal($('').isDisplayed(), true, 'modal is not displayed')
        assert.equal($('#spidermanModalLabel').getText(), 'Spider-Man Fact')
        assert.equal($('#spidermanModal > div > div > div.modal-body').getText(), 'Spider-man was created by Stan Lee and Steve Ditko and first appeared in 1962.')
    })

    it.skip('should close Wolverine modal', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        browser.pause(1000)
        //assert.equal($('').isDisplayed(), true, 'modal is not displayed')

        $('#wolverineModal > div > div > div.modal-footer > button').click()
        browser.pause(5000)
    })

    it.skip('should close spiderman modal', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.heroFactsLink.click()
        HeaderPage.spidermanOption.click()

        browser.pause(1000)
        //assert.equal($('').isDisplayed(), true, 'modal is not displayed')

        HeaderPage.spidermanModalCloseButton.click()
        browser.pause(5000)
    })

    it('should search for wolverine', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.searchField.setValue('wolverine')
        HeaderPage.searchButton.click()

        assert(browser.isAlertOpen(), true, 'Alert is not open')
        assert.equal(browser.getAlertText(), 'Wolverine is awesome!', 'alert text is not equal')
    })

    it('should error becuse did not search for wolverine', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.searchField.setValue('catwoman')
        HeaderPage.searchButton.click()

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open')
        assert.equal(browser.getAlertText(), 'Your search for catwoman returned 0 reults. Try something else.', 'alert text is not equal')
    })

    it('should close the alert', () => {
        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        HeaderPage.searchField.setValue('wolverine')
        HeaderPage.searchButton.click()

        assert.equal(browser.isAlertOpen(), true, 'Alert is not open')
        browser.acceptAlert()
        assert.equal(browser.isAlertOpen(), false, 'Alert is still open')
    })
})