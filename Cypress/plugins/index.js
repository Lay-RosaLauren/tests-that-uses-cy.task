/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const faker = require('faker')

module.exports = (on, config) => {
  on('task', {
    helloWorld() {
      return 'Hello world!'
    },
    readExampleFixture() {
      return require('../fixtures/example.json')
    },
    generateRandomNumberBewteenOneAndTen() {
      return Math.floor(Math.random() * (10 - 1 + 1)) + 1
    },
    greeting(name) {
      return `Hello ${name}! How are you doing today?`
    },
    getMyObjectWith({ name, age, sex}) {
      return { name, age, sex }
    },
    generateUuidUsingFaker() {
      return faker.datatype.uuid()
    },
    'generate_/\_modified_/\_uuid': () => {
      return faker.datatype.uuid().replace(/-/g, '_/\\_')
    },
    doStuff() {
      let verb = faker.hacker.verb()
      verb = verb.charAt(0).toUpperCase() + verb.slice(1)

      const cat = `${faker.hacker.abbreviation()} ${faker.animal.cat()}`
      const dog = `${faker.hacker.adjective()} ${faker.animal.dog()}`
      const ingVerb = faker.hacker.ingverb()

      let phoneNumber = faker.phone.phoneNumber()

      if (phoneNumber.includes('9')) {
        phoneNumber = '911'
      }

      return `${verb}! ${cat} and ${dog} are ${ingVerb}. Call ${phoneNumber}.`
    },
  })

  return config
}
