const LoginPage = require('../pages/login.page')
const VotePage = require('../pages/vote.page')
const assert = require('assert')

describe('Vote Test Suite', () => {

    it('should have correct default values', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        assert.equal(VotePage.voteTitle.getText(), 'Vote for your favorite Superhero movie', 'Vote title not correct')

        let orignalValue = Number(VotePage.voteItemVal1.getText())

        VotePage.submitButton.click()

        assert.equal(VotePage.voteItemVal1.getText(), orignalValue + 1, 'Vote count not correct')

        assert.equal(VotePage.thanksAlert.isDisplayed(), true, 'vote alert not display')
        assert.equal(VotePage.thanksAlert.getText(), 'Thanks for voting!', 'Vote alert not correct')
    })
})
