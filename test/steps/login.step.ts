import { Given, When, Then } from '@wdio/cucumber-framework'
import loginPage from '../../src/pages/login.page'


Given('User on the login page', async () => {
    await browser.url(`https://www.saucedemo.com/`)
})

When('User login with {string} and {string}', async (a:string, b:string) => {
    await loginPage.username.setValue(a)
    await loginPage.password.setValue(b)
})

When('User click login', async () => {
    await loginPage.login.click()
})

Then('User should see the dashboard page', async () => {
    await loginPage.logo.waitForDisplayed()
})

Then('User should see an error message {string}', async (a) => {
    if (a === 'locked_out_user') {
        await loginPage.error_message.waitForDisplayed()
        const errorMessage = await loginPage.error_message.getText();
        expect(errorMessage).toBe('Epic sadface: Sorry, this user has been locked out.');

    } else if (a === '') {
    }
    
})

