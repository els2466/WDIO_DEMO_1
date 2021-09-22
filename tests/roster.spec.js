const LoginPage = require('../pages/login.page')
const RosterPage = require('../pages/roster.page')
const assert = require('assert')

describe.skip('Roster Test Suite', () => {

    it('should have correct default values', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        assert.equal(RosterPage.instructionText.getText(), 'Imagine that you are tasked with building a team of Superheros to save the world. We have given you a few heroes to start with. Add as many heroes as you would like to round out your dream team.', 'Roster instruction not correct')
        assert.equal(RosterPage.listTitle.getText(), 'Build Your Superhero Roster:', 'Roster title not correct')

        assert.equal(RosterPage.wolverineItem.getText(), 'Wolverine', 'Roster item label not correct')
        assert.equal(RosterPage.ironmanItem.getText(), 'Iron Man', 'Roster item label not correct')
        assert.equal(RosterPage.deadpoolItem.getText(), 'Deadpool', 'Roster item label not correct')
        assert.equal(RosterPage.thorItem.getText(), 'Thor', 'Roster item label not correct')
        assert.equal(RosterPage.spidermanItem.getText(), 'Spider-Man', 'Roster item label not correct')

        assert.equal(RosterPage.addHeroLabel.getText(), 'ADD A SUPERHERO', 'Roster label not correct')
        assert.equal(RosterPage.addHeroField.getAttribute('placeholder'), 'Enter Hero')
    })

    it('should enter new item in list', () => {

        browser.url('/')

        LoginPage.emailField.setValue('1@2.com')
        LoginPage.passwordField.setValue('password')
        LoginPage.submitButton.click()

        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        let newItem = 'Bob'

        RosterPage.addHeroField.setValue(newItem)
        RosterPage.submitButton.click()

        assert.equal(RosterPage.newItem.getText(), newItem, 'New roster item not correct')
    })
})