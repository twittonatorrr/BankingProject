import LoginPage from "../support/pageObjects/loginPage";
describe('Manager-Page Test Suit', ()=>{

    const loginPage = new LoginPage;
    const firstName = 'Draco';
    const lastName = 'Malfoy';
    const postCode = 111111;
    const fullName = 'Draco Malfoy';
    const dollar = 'Dollar';

    it('Test-Case 13: Manager add new customer', ()=>{
        loginPage.goToLoginPage();
        const managerPage = loginPage.loginAsManager();

        managerPage.addAccount(firstName, lastName, postCode);
        managerPage.showCustomers();
        cy.get('.table.table-bordered.table-striped > tbody > tr')
            .should('contain', firstName)
            .and('contain', lastName);
    });

    it('Test-case 14: Open account for new customer', ()=>{
        loginPage.goToLoginPage();
        const managerPage = loginPage.loginAsManager();

        managerPage.addAccount(firstName, lastName, postCode);
        managerPage.openAccount(fullName, dollar);

        cy.on('window:alert', (text)=>{
            expect(text).to.contain('Account created successfully with account Number');
        });
    });
    
    it('Test-case 15: Delete customer', ()=>{
        loginPage.goToLoginPage();
        const managerPage = loginPage.loginAsManager();

        managerPage.addAccount(firstName, lastName, postCode);
        managerPage.showCustomers();

        cy.get('.table.table-bordered.table-striped > tbody > tr').each(($row) => {
            if ($row.text().includes(firstName)) {
            cy.wrap($row).contains('Delete').click();
            }
        });

        cy.get('.table.table-bordered.table-striped > tbody > tr')
            .should('not.contain', firstName)
            .and('not.contain', lastName);
    });
})
