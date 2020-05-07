/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('https://qa-enouvo-demo.web.app/')
      cy.eyesOpen({
      appName: 'QA Enouvo Demo',
      testName: `Demo visual testing`
    })
      cy.wait(1000)
    })

    afterEach(() => {
        cy.eyesClose();
      })

    it('Take the snapshot to verifying', () => {
      // cy.eyesCheckWindow('Team members screen');
    })

    it('Take the element', () => {
      cy.get(':nth-child(5) > .row > .col-12 > .display-4').scrollIntoView();
      cy.eyesCheckWindow({
            sizeMode: 'selector', //mode
            selector: ':nth-child(5) > .row > .col-12 > .display-4' //CSS Selector
          })
    })
})