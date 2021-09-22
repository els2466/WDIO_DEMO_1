const LoginPage = require('../pages/login.page')
const HeaderPage = require('../pages/header.page')
const IntroPage = require('../pages/intro.page')
const RosterPage = require('../pages/roster.page')
const VotePage = require('../pages/vote.page')
const assert = require('assert')

describe('Smoke Test Suite', () => {

    it('should verify static elements are present', () => {

        browser.url('/')

        // Verify login page
        assert.equal(LoginPage.headingText.isDisplayed(), true, 'LoginPage.headingText')
        assert.equal(LoginPage.emailLabel.isDisplayed(), true, 'LoginPage.emailLabel')
        assert.equal(LoginPage.emailField.isDisplayed(), true, 'LoginPage.emailField')
        assert.equal(LoginPage.passwordLabel.isDisplayed(), true, 'LoginPage.passwordLabel')
        assert.equal(LoginPage.passwordField.isDisplayed(), true, 'LoginPage.passwordField')
        assert.equal(LoginPage.rememberLoginLabel.isDisplayed(), true, 'LoginPage.rememberLoginLabel')
        assert.equal(LoginPage.rememberLoginCheckbox.isDisplayed(), true, 'LoginPage.rememberLoginCheckbox')
        assert.equal(LoginPage.submitButton.isDisplayed(), true, 'LoginPage.submitButton')

        // login
        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        // Verify header page
        assert.equal(HeaderPage.logoutLink.isDisplayed(), true, 'HeaderPage.logoutLink')
        assert.equal(HeaderPage.linkLink.isDisplayed(), true, 'HeaderPage.linkLink')
        assert.equal(HeaderPage.heroFactsLink.isDisplayed(), true, 'HeaderPage.heroFactsLink')

        HeaderPage.heroFactsLink.click()
        assert.equal(HeaderPage.wolverineOption.isDisplayed(), true, 'HeaderPage.wolverineOption')
        assert.equal(HeaderPage.spidermanOption.isDisplayed(), true, 'HeaderPage.spidermanOption')

        assert.equal(HeaderPage.searchField.isDisplayed(), true, 'HeaderPage.searchField')
        assert.equal(HeaderPage.searchButton.isDisplayed(), true, 'HeaderPage.searchButton')

        // Verify intro page
        assert.equal(IntroPage.titleText.isDisplayed(), true, 'IntroPage.titleText')
        assert.equal(IntroPage.mainImage.isDisplayed(), true, 'IntroPage.mainImage')

        // Verify roster page
        assert.equal(RosterPage.instructionText.isDisplayed(), true, 'RosterPage.instructionText')
        assert.equal(RosterPage.listTitle.isDisplayed(), true, 'RosterPage.listTitle')
        assert.equal(RosterPage.wolverineItem.isDisplayed(), true, 'RosterPage.wolverineItem')
        assert.equal(RosterPage.ironmanItem.isDisplayed(), true, 'RosterPage.ironmanItem')
        assert.equal(RosterPage.deadpoolItem.isDisplayed(), true, 'RosterPage.deadpoolItem')
        assert.equal(RosterPage.thorItem.isDisplayed(), true, 'RosterPage.thorItem')
        assert.equal(RosterPage.spidermanItem.isDisplayed(), true, 'RosterPage.spidermanItem')
        assert.equal(RosterPage.addHeroLabel.isDisplayed(), true, 'RosterPage.addHeroLabel')
        assert.equal(RosterPage.addHeroField.isDisplayed(), true, 'RosterPage.addHeroField')
        assert.equal(RosterPage.submitButton.isDisplayed(), true, 'RosterPage.submitButton')

        // Verify vote page
        assert.equal(VotePage.voteTitle.isDisplayed(), true, 'RosterPage.voteTitle')
        assert.equal(VotePage.voteItem1.isDisplayed(), true, 'RosterPage.voteItem1')
        assert.equal(VotePage.voteItem2.isDisplayed(), true, 'RosterPage.voteItem2')
        assert.equal(VotePage.voteItem3.isDisplayed(), true, 'RosterPage.voteItem3')
        assert.equal(VotePage.voteItem4.isDisplayed(), true, 'RosterPage.voteItem4')
        assert.equal(VotePage.voteItem5.isDisplayed(), true, 'RosterPage.voteItem5')
        assert.equal(VotePage.voteItemLabel1.isDisplayed(), true, 'RosterPage.voteItemLabel1')
        assert.equal(VotePage.voteItemLabel2.isDisplayed(), true, 'RosterPage.voteItemLabel2')
        assert.equal(VotePage.voteItemLabel3.isDisplayed(), true, 'RosterPage.voteItemLabel3')
        assert.equal(VotePage.voteItemLabel4.isDisplayed(), true, 'RosterPage.voteItemLabel4')
        assert.equal(VotePage.voteItemLabel5.isDisplayed(), true, 'RosterPage.voteItemLabel5')
        assert.equal(VotePage.submitButton.isDisplayed(), true, 'RosterPage.submitButton')
        assert.equal(VotePage.voteItemText1.isDisplayed(), true, 'RosterPage.voteItemText1')
        assert.equal(VotePage.voteItemText2.isDisplayed(), true, 'RosterPage.voteItemText2')
        assert.equal(VotePage.voteItemText3.isDisplayed(), true, 'RosterPage.voteItemText3')
        assert.equal(VotePage.voteItemText4.isDisplayed(), true, 'RosterPage.voteItemText4')
        assert.equal(VotePage.voteItemText5.isDisplayed(), true, 'RosterPage.voteItemText5')
        assert.equal(VotePage.voteItemVal1.isDisplayed(), true, 'RosterPage.voteItemVal1')
        assert.equal(VotePage.voteItemVal2.isDisplayed(), true, 'RosterPage.voteItemVal2')
        assert.equal(VotePage.voteItemVal3.isDisplayed(), true, 'RosterPage.voteItemVal3')
        assert.equal(VotePage.voteItemVal4.isDisplayed(), true, 'RosterPage.voteItemVal4')
        assert.equal(VotePage.voteItemVal5.isDisplayed(), true, 'RosterPage.voteItemVal5')
    })
})
