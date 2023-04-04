class LoginPage{
    doLogin(username, password){
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
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


};


export default LoginPage;