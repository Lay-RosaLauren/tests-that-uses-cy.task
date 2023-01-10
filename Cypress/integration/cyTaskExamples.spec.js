// https://docs.cypress.io/api/commands/task

describe('cy.task("examples")', () => {
    it('runs a task that returns "Hello world!"', () => {
      cy.task('helloWorld').then(result => {
        expect(result).to.equal('Hello world!')
      })
    })
  
    it('runs a task that reads a fixture', () => {
      cy.task('readExampleFixture').then(data => {
        expect(typeof(data)).to.equal('object')
        expect(data.email).to.equal('hello@cypress.io')
        expect(data).deep.equal(
          {
            "name": "Using fixtures to represent data",
            "email": "hello@cypress.io",
            "body": "Fixtures are a great way to mock data for responses to routes"
          }        
        )
      })
    })
  
    it('runs a task that generates a number between 1 and 10', () => {
      cy.task('generateRandomNumberBewteenOneAndTen').then(result => {
        expect(result).to.be.a('number')
        expect(result).to.be.within(1, 10)
      })
    })
  
    it('runs a task that greets based on the received string argument', () => {
      cy.task('greeting', 'Lay').then(result => {
        expect(result).to.equal('Hello Lay! How are you doing today?')
      })
    })
  
    it('runs a task that receives an object as argument', () => {
      const myObject = {
        name: 'Lay',
        age: '63',
        sex: 'f'
      }
  
      cy.task('getMyObjectWith', myObject).then(result => {
        expect(result).deep.equal(myObject)
      })
    })
  
    it('runs a task that returns a uuid using faker', () => {
      cy.task('generateUuidUsingFaker').then(result => {
        console.log(result)
      })
    })
  
    it('runs a task that returns a modified uuid', () => {
      cy.task('generate_/\_modified_/\_uuid').then(result => {
        console.log(result)
      })
    })
  
    it('runs a task without logging it to the commnad log', () => {
      cy.task('helloWorld', null, { log: false })
    })
  
    it('runs a task changing the command timeout', () => {
      cy.task('helloWorld', null, { timeout: 10000 })
    })
  
    it('runs a task without logging it to the commnad log, and changing the command timout', () => {
      cy.task('helloWorld', null, {
        log: false,
        timeout: 2000
      })
    })
  
    it('runs a task that does some stuff', () => {
      cy.task('doStuff').then(stuff => {
        console.log(stuff)
      })
    })
  })
  
