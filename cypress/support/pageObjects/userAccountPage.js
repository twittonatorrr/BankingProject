import TransactionPage from "./transactionsPage";
class UserAccountPage{
    goToTransactionsPage(){
        cy.get('.btn.btn-lg.tab').eq(0).click();
        cy.url().should('contain', 'listTx');
        cy.get('.table.table-bordered.table-striped > thead > tr > td').eq(0).should('contain', 'Date-Time');
        cy.get('.table.table-bordered.table-striped > thead > tr > td').eq(1).should('contain', 'Amount');
        cy.get('.table.table-bordered.table-striped > thead > tr > td').eq(2).should('contain', 'Transaction Type');
        return new TransactionPage;
    }

    makeDeposit(value){
        cy.get('.btn.btn-lg.tab').eq(1).click();
        cy.get("input[placeholder='amount']").type(value);
        cy.get('.btn.btn-default').contains('Deposit').click();
        cy.get('span').contains('Deposit Successful').should('be.visible');
    }

    changeValue(index, value){
        cy.get('#accountSelect').select(index);
        cy.get("div[ng-hide='noAccount']").should('contain', value);
    }

    goToWithdrawlPage(){
        cy.get('.btn.btn-lg.tab').eq(2).click();
    }

    makeWithdrawl(value){
        cy.get("input[placeholder='amount']").clear().type(value);
        cy.get("input[placeholder='amount']").should('have.value', value);
        cy.get("button[type='submit']").contains('Withdraw').click();
        cy.get('.error.ng-binding').contains('Transaction successful').should('be.visible');
    }

    makeWithdrawlWithoutMoney(value){
        cy.get("input[placeholder='amount']").type(value);
        cy.get("button[type='submit']").contains('Withdraw').click();
        cy.get('.error.ng-binding').contains('Transaction Failed. You can not withdraw amount more than the balance.').should('be.visible');
    }
}

export default UserAccountPage;