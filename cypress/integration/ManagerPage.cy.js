import LoginPage from "../support/pageObjects/loginPage";
describe('Manager-Page Test Suit', ()=>{
    const loginPage = new LoginPage;
    it('Test-Case 13: Manager add new customer', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsManager();
        cy.get("button[ng-click='addCust()']").click();
        cy.url().should('contain','addCust');
        cy.get("input[ng-model='fName']").type('Draco');
        cy.get("input[ng-model='lName']").type('Malfoy');
        cy.get("input[ng-model='postCd']").type(11111);
        cy.get("button[type='submit']").contains('Add Customer').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Customer added successfully with customer id');
        });
        cy.get("button[ng-click='showCust()']").click();
        cy.get('.table.table-bordered.table-striped > tbody > tr')
            .should('contain', 'Draco')
            .and('contain', 'Malfoy');
    });

    it.only('Test-case 14: Open account for new customer', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsManager();
        cy.get("button[ng-click='addCust()']").click();
        cy.url().should('contain','addCust');
        cy.get("input[ng-model='fName']").type('Draco');
        cy.get("input[ng-model='lName']").type('Malfoy');
        cy.get("input[ng-model='postCd']").type(11111);
        cy.get("button[type='submit']").contains('Add Customer').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Customer added successfully with customer id');
        });
        cy.get("button[ng-click='openAccount()']").click();
        cy.get('#userSelect').select('Draco Malfoy');
        cy.get('#currency').select('Dollar');
        cy.get('button').contains('Process').click();
        cy.on('window:alert', (text)=>{
            expect(text).to.contain('Account created successfully with account Number');
        });
    });
    
    it('Test-case 15: Delete customer', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsManager();
        cy.get("button[ng-click='addCust()']").click();
        cy.url().should('contain','addCust');
        cy.get("input[ng-model='fName']").type('Draco');
        cy.get("input[ng-model='lName']").type('Malfoy');
        cy.get("input[ng-model='postCd']").type(11111);
        cy.get("button[type='submit']").contains('Add Customer').click();
        cy.on('window:alert', (text) => {
            expect(text).to.contain('Customer added successfully with customer id');
        });
        cy.get("button[ng-click='showCust()']").click();
        cy.get('.table.table-bordered.table-striped > tbody > tr').each(($row) => {
            if ($row.text().includes('Draco')) {
            cy.wrap($row).contains('Delete').click();
            }
        });
        cy.get('.table.table-bordered.table-striped > tbody > tr')
            .should('not.contain', 'Draco')
            .and('not.contain', 'Malfoy');
    });
})
