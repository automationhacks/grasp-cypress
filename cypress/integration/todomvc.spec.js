/// <reference types="cypress"/>

it('should be able to wait for specified delay', function() {
    cy.visit("http://todomvc-app-for-testing.surge.sh/?delay-new-todo=5000")
    cy.get('.new-todo', {timeout: 6000})
})

it('should be able to add a new todo to the list', () => {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")
    cy.get('.new-todo').type("Do chores{enter}")
    cy.get('.toggle').click()
})
