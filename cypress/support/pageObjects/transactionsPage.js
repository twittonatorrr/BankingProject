class TransactionPage{
    resetTransactions(){
        cy.get("button[ng-click='reset()']").click();
        cy.get('#anchor0').should('not.exist');
    }
}

export default TransactionPage;