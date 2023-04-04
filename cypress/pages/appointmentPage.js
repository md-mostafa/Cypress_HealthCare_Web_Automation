class ApointmentPage {

    selectFacility(facility){
        cy.get('#combo_facility').select(facility);
    }

    checkOnHospitalReAdmission(){
        cy.get('#chk_hospotal_readmission').check();
    }

    selectProgram(program){
        if(program.toLowerCase() == 'medicaid'){
            cy.get('#radio_program_medicaid').check();
        }else if(program.toLowerCase() == 'none') {
            cy.get('#radio_program_none').check();
        }
    }

    clickOnCalendarIcon(){
        cy.get('.input-group-addon').click();
    }

    enterDate(date){
        cy.get('#txt_visit_date').type(date);
        cy.get('strong').click();
    }
    
    selectVisitingDate(){
        cy.get('tbody > :nth-child(3) > :nth-child(4)').click();
        cy.get('strong').click();
    }

    enterComment(comment){
        cy.get('#txt_comment').type(comment);
    }

    clickOnBookAppointment(){
        cy.get('#btn-book-appointment').click();
    }

    verifyAppointment(facility, readmission, program, date, comment){
        cy.get('#facility').should('have.text', facility);
        cy.get('#program').should('have.text', program);
        cy.get('#comment').should('have.text', comment);
        cy.get('#hospital_readmission').should('have.text', readmission);
        cy.get('#visit_date').should('have.text', date);
    }

    bookAnAppointment(facility, readmission, program, date, comment){
        this.selectFacility(facility);
        
        if(readmission.toLowerCase() == 'yes'){
            this.checkOnHospitalReAdmission();
        }

        this.selectProgram(program);
        this.enterDate(date);
        this.enterComment(comment);

        this.clickOnBookAppointment();
    }

    
}

export default ApointmentPage;