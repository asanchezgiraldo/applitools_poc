describe("Qantas Insurance Website", () => {

    it("Health", () => {
        cy.visit("health-insurance/review");
        cy.eyesOpen({
            appName: 'Insurance World!',
            testName: 'My first Insurance test!',
            browser: [
                {width: 800, height: 600, name: 'firefox'},
                {width: 1024, height: 768, name: 'chrome'}
                //Add more variations
            ],
        });
        cy.eyesCheckWindow('Online Health');
        process.env.APPTL = cy.eyesClose(true);
    });
});


