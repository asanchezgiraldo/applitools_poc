import { Selector } from 'testcafe';

fixture `Click Started`
.page `https://insurance.qantas.com/`;

// Page elements
    const termslink = Selector('span').filter('[class*="disclaimerModalLink"]');


//then create a test and place your code there
    test('My Click on Terms', async t => {
    await t
        .click(termslink);
});