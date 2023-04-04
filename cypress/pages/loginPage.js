class LoginPage{
    doLogin(username, password){
        this.clickOnMenuToggleBtn();
        this.clickOnLogin();
        this.enterUserName(username);
        this.enterPassword(password);
        this.clickOnBtnLogin();
    }


    clickOnMenuToggleBtn(){
        cy.get('#menu-toggle').click();
    }

    clickOnLogin(){
        cy.get('.sidebar-nav > :nth-child(4) > a').click();
    }

    clickOnBtnLogin(){
        cy.get('#btn-login').click();
    }
    enterPassword(password){
        cy.get('#txt-password').type(password);
    }

    enterUserName(username){
        cy.get('#txt-username').type(username);
    }

    loginSuccessfulAssertion(){
        cy.get('h2').should('have.text', 'Make Appointment');
    }

    loginUnsuccessfulAssertion(){
        cy.get('.text-danger').should('contain', 'Login failed');
    }

};


export default LoginPage;