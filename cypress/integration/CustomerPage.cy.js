import LoginPage from '../support/pageObjects/loginPage'
describe('Customer Page Test', ()=>{
    const loginPage = new LoginPage();
    it('Test Case 6: Check Transactions page', ()=>{
        loginPage.goToLoginPage();
        const accountPage = loginPage.loginAsUser('Harry Potter');
        accountPage.goToTransactionsPage();
    });

    it('Test Case 7: User make a deposit', ()=>{
        loginPage.goToLoginPage();
        const userAccountPage = loginPage.loginAsUser('Harry Potter');
        userAccountPage.makeDeposit(1000);
    });

    it('Test Case 8: User make a withdraw', ()=>{
        loginPage.goToLoginPage();
        const userAccountPage = loginPage.loginAsUser('Harry Potter');
        userAccountPage.makeDeposit(1000);
        userAccountPage.goToWithdrawlPage();
        cy.wait(500); //necessary because of too long rendering
        userAccountPage.makeWithdrawl(1000);
    });

    it('Test Case 9: User make a withdraw with no value on balance', ()=>{
        loginPage.goToLoginPage();
        const userAccountPage = loginPage.loginAsUser('Harry Potter');
        userAccountPage.goToWithdrawlPage();
        userAccountPage.makeWithdrawlWithoutMoney(1000);
    });

    

    it('Test Case 10: "User made a transaction and searching it in Transactions page', ()=>{
        function getTransactionTime(date = new Date()) {
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

            const month = months[date.getMonth()];
            const day = date.getDate();
            const year = date.getFullYear();

            let hours = date.getHours();
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12 || 12;

            return `${month} ${day}, ${year} ${hours}:${minutes} ${ampm}`;
        }

        const depositAmount = 1000;

        loginPage.goToLoginPage();
        const userAccountPage = loginPage.loginAsUser('Harry Potter');
        userAccountPage.makeDeposit(depositAmount);

        
        const transactionTime = getTransactionTime();
        cy.wrap(transactionTime).as('transactionTime');


        cy.wait(1000);
        userAccountPage.goToTransactionsPage();

        cy.get('@transactionTime').then(time => {
            cy.get('.table.table-bordered.table-striped > tbody > tr > td').eq(0).invoke('text').then(tableTime =>{
                const formattedTableTime = tableTime.replace(/:\d{2}(?=\sAM|\sPM)/, ''); 
                expect(formattedTableTime).to.contain(time);
            });
            cy.get('.table.table-bordered.table-striped > tbody > tr > td').eq(1).should('contain', depositAmount);
            cy.get('.table.table-bordered.table-striped > tbody > tr > td').eq(2).should('contain', 'Credit');
        });
    });

    it('Test Case 11: User reset all transactions', ()=>{
        loginPage.goToLoginPage();
        const userAccountPage = loginPage.loginAsUser('Harry Potter');
        userAccountPage.makeDeposit(1000);
        cy.wait(500);
        const transactionPage = userAccountPage.goToTransactionsPage();
        transactionPage.resetTransactions();
    });

    it('Test Case 12: User check pound balance', ()=>{
        loginPage.goToLoginPage();
        const userAccountPage = loginPage.loginAsUser('Harry Potter');
        userAccountPage.changeValue(1, 'Pound');
    });
});
    