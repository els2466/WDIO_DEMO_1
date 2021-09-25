const LoginPage = require('../pages/login.page')
const IntroPage = require('../pages/intro.page')
const assert = require('assert')

describe('Intro Test Suite', () => {

    it('should display the correct title', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        assert.equal(IntroPage.titleText.getText(), 'Superhero Roster', 'Intro title not correct')
    })

    it('should display correct image', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        assert.equal(IntroPage.mainImage.getAttribute('alt'), 'Superhero Image', 'Intro image not correct')
        assert.equal(IntroPage.mainImage.getAttribute('src'), './images/superhero.png', 'Intro image not correct')
    })
})