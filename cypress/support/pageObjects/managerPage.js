class ManagerPage{
    addAccount(firstName, secondName, postCode){
        cy.get("button[ng-click='addCust()']").click();
        cy.url().should('contain','addCust');
        cy.get("input[ng-model='fName']").type(firstName);
        cy.get("input[ng-model='lName']").type(secondName);
        cy.get("input[ng-model='postCd']").type(postCode);
        cy.get("button[type='submit']").contains('Add Customer').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Customer added successfully with customer id');
        });
    }

    showCustomers(){
        cy.get("button[ng-click='showCust()']").click();
    }

    openAccount(fullName, currency){
        cy.get("button[ng-click='openAccount()']").click();
        cy.get('#userSelect').select(fullName);
        cy.get('#currency').select(currency);
        cy.get('button').contains('Process').click();
    }
}
export default ManagerPage;