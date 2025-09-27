import UserAccountPage from "./userAccountPage";
import TransactionPage from "./transactionsPage";

class LoginPage{
    goToLoginPage(){
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
    }

    loginAsUser(username){
        cy.get('button').contains('Customer Login').click();
        cy.get('#userSelect').select(username);
        cy.get('button').contains('Login').click();
        cy.get('span').contains(username).should('be.visible');
        return new UserAccountPage;
    }

    loginAsManager(){
        cy.get('button').contains('Bank Manager Login').click();
        cy.get('button').contains('Add Customer').should('be.visible');
        cy.get('button').contains('Open Account').should('be.visible');
        cy.get('button').contains('Customers').should('be.visible');  
    }

    logout(){
        cy.get('.btn.logout').click();
        cy.get('#userSelect').should('be.visible');
        cy.get('label').contains('Your Name :').should('be.visible');
    }

    clickHomeBtn(){
        cy.get('.btn.home').click();
        cy.get('button').contains('Customer Login').should('be.visible');
        cy.get('button').contains('Bank Manager Login').should('be.visible');
    }
}
export default LoginPage;