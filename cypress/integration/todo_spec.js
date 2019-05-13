var URLS = ['/#',
    '/app/',
    '/contact-us/',
    '/help-and-support/',
    '/terms-and-forms/',
    '/credit-cards/']

var eyes_vars = [
    {width: 1024, height: 768, name: 'chrome'},
    {width: 800, height: 600, name: 'firefox'},
    {width: 800, height: 600, name: 'ie11'},
    {width: 800, height: 600, name: 'edge'},
    {deviceName: 'iPhone X', screenOrientation: 'landscape'},
    {deviceName: 'iPhone 6/7/8', screenOrientation: 'landscape'},
    {deviceName: 'Galaxy S5', screenOrientation: 'landscape'},
    {deviceName: 'iPhone X', screenOrientation: 'portrait'},
    {deviceName: 'iPhone 6/7/8', screenOrientation: 'portrait'},
    {deviceName: 'Galaxy S5', screenOrientation: 'portrait'}
]


describe("Qantas Money Website", () => {

    beforeEach(function () {
        cy.on('uncaught:exception', (err) => {
            return false;
    });
});

URLS.forEach(path => {
    it(path, () => {
        cy.visit(path)
    cy.get('.d-block').should('be.visible')
//cy.percySnapshot('QMoney path '+path, { widths: widths_arr } );
cy.eyesOpen({
    appName: 'Qantas Money',
    batchName: 'Money',
    testName: 'QMoney path '+path,
    browser: eyes_vars,
});
cy.eyesCheckWindow({
        scriptHooks: {
            beforeCaptureScreenshot: "document.querySelector('#body').style.paddingTop = '0';document.querySelector('#global-header > header').style.position = 'static';"
        }},
    "page " + path);
cy.eyesClose();
});
});

it("Check Terms and Conditions Every Day", () => {
    cy.visit('/credit-cards/premier-everyday')
cy.get('.d-block').should('be.visible')
cy.get("#label-collapsible--disclaimer").click()
//cy.percySnapshot('QMoney Everyday T&Cs ', { widths: widths_arr } );
cy.eyesOpen({
    appName: 'Qantas Money',
    batchName: 'Money',
    testName: 'QMoney Everyday T&Cs',
    browser: eyes_vars,
});
cy.eyesCheckWindow({
        scriptHooks: {
            beforeCaptureScreenshot: "document.querySelector('#body').style.paddingTop = '0';document.querySelector('#global-header > header').style.position = 'static';"
        }},
    "page ");
cy.eyesClose();
});

it("Check Terms and Conditions Platinum", () => {
    cy.visit('/credit-cards/premier-platinum')
cy.get('.d-block').should('be.visible')
cy.get("#label-collapsible--disclaimer").click()
//cy.percySnapshot('QMoney Platinum T&Cs ', { widths: widths_arr } );
cy.eyesOpen({
    appName: 'Qantas Money',
    batchName: 'Money',
    testName: 'QMoney Platinum T&Cs',
    browser: eyes_vars,
});
cy.eyesCheckWindow({
        scriptHooks: {
            beforeCaptureScreenshot: "document.querySelector('#body').style.paddingTop = '0';document.querySelector('#global-header > header').style.position = 'static';"
        }},
    "page ");
cy.eyesClose();
});

it("Check Terms and Conditions Titanium", () => {
    cy.visit('/credit-cards/premier-titanium')
cy.get('.d-block').should('be.visible')
cy.get("#label-collapsible--disclaimer").click()
//cy.percySnapshot('QMoney Titanium T&Cs ', { widths: widths_arr } );
cy.eyesOpen({
    appName: 'Qantas Money',
    batchName: 'Money',
    testName: 'QMoney Titanium T&Cs',
    browser: eyes_vars,
});
cy.eyesCheckWindow({
        scriptHooks: {
            beforeCaptureScreenshot: "document.querySelector('#body').style.paddingTop = '0';document.querySelector('#global-header > header').style.position = 'static';"
        }},
    "page ");
cy.eyesClose();
});



it("Check My Account", () => {
    cy.visit('/account')
//cy.percySnapshot('QMoney Titanium T&Cs ', { widths: widths_arr } );
cy.eyesOpen({
    appName: 'Qantas Money',
    batchName: 'Money',
    testName: 'QMoney Login Page',
    browser: eyes_vars,
});
cy.eyesCheckWindow({
        scriptHooks: {
            beforeCaptureScreenshot: "document.querySelector('#body').style.paddingTop = '0';document.querySelector('#global-header > header').style.position = 'static';"
        }},
    "page ");
cy.eyesClose();
});

});
