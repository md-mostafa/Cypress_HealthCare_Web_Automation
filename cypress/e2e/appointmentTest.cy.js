import AppointmentPage from "../pages/appointmentPage";
import LoginPage from "../pages/loginPage";

describe("Appointment test", () => {
    const loginPage = new LoginPage();
    const appointmentPage = new AppointmentPage();

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://katalon-demo-cura.herokuapp.com/');
        loginPage.doLogin("John Doe", "ThisIsNotAPassword");
    });

    it('Book an appointment', () => {
        let comment = "This is urgent";
        let program = 'Medicaid';
        let facility = 'Seoul CURA Healthcare Center';
        let readmission = 'Yes';
        let date = '12/04/2023';
        
        appointmentPage.bookAnAppointment(facility, readmission, program, date, comment);
        appointmentPage.verifyAppointment(facility, readmission, program, date, comment);
    });


});