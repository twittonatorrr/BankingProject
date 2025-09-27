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
}

export default UserAccountPage;