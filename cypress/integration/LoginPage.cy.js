import LoginPage from "../support/pageObjects/loginPage";

describe('Login Page Suit',() => {
    const loginPage = new LoginPage();
    it('Test Case 1: Login bank as customer', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsUser('Harry Potter');
    });

    it('Test Case 2: Login bank as manager', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsManager();
    });

    it('Test Case 3: User log out as customer', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsUser('Ron Weasly');
        loginPage.logout();
    });

    it('Test Case 4: Go to Home Page as customer', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsUser('Harry Potter');
        loginPage.clickHomeBtn();
    });

    it('Test Case 5: Go to Home Page as manager', ()=>{
        loginPage.goToLoginPage();
        loginPage.loginAsManager();
        loginPage.clickHomeBtn();
    });
});