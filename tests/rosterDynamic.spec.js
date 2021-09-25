const LoginPage = require('../pages/login.page')
const RosterPage = require('../pages/roster.page')
const assert = require('assert')

describe('Dynamic Roster Test Suite', () => {

    it('should create single item', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        RosterPage.addHero('The Flash')

        assert.equal(RosterPage.getItems[5].getText(), 'The Flash', 'New roster item not correct')
    })

    it('should have default list of heros', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        const heros = ['Wolverine','Iron Man','Deadpool','Thor','Spider-Man']

        const defaults = RosterPage.getItems

        for(var i=0; i<defaults.length; i++) {
            assert.equal(defaults[i].getText(), heros[i], `Roster item ${defaults[i].getText()} not correct`)
        }
    })

    it('should create multiple items', () => {

        browser.url('/')

        LoginPage.login('1@2.com', 'password')
        assert.equal(LoginPage.overlay.isDisplayed(), false, 'not logged in')

        const heros = ['Daredevil','Billy Bob','Horse shoe','Cosmic']

        for(var i=0; i<heros.length; i++) {
            RosterPage.addHero(heros[i])
        }

        const heroList = RosterPage.getItems

        for(var i=0; i<heros.length; i++) {
            // no need to check the defaults this time
            assert.equal(heroList[i+5].getText(), heros[i], `Roster item ${heroList[i+5].getText()} not correct`)
        }
    })
})