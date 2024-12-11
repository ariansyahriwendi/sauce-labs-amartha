import { When, Then } from '@wdio/cucumber-framework'
import dashboardPage from '../../src/pages/dashboard.page'

When('User click add to cart {string}', async (a) => {
    if (a === 'sauce labs backpack') {
        await dashboardPage.add_to_cart_sauce_labs_backpack.click()

    } else if (a === 'sauce labs bike light') {
        await dashboardPage.add_to_cart_sauce_labs_bike_light.click()
    }
})

Then('User should see the cart is added badge number 1', async () => {
    await dashboardPage.cart_badge_number_1.waitForDisplayed()
})

When('User click cart', async () => {
    await dashboardPage.cart.click()
})

Then('User should see an item is added to cart {string}', async (a) => {
    if (a === 'sauce labs backpack') {
        await dashboardPage.cart_item.waitForDisplayed()
        const item = await dashboardPage.cart_item.getText()
        expect(item).toBe('Sauce Labs Backpack')

    } else if (a === 'sauce labs bike light') {
        await dashboardPage.cart_item.waitForDisplayed()
        const item = await dashboardPage.cart_item.getText()
        expect(item).toBe('Sauce Labs Bike Light')
    }
})

When('User click option', async () => {
    await dashboardPage.burger_menu.click()
})

When('User click about', async () => {
    await dashboardPage.about.click()
})

Then('User should see the about page', async () => {
        await dashboardPage.about_page.waitForDisplayed()
        const text = await dashboardPage.about_page.getText()
        expect(text).toBe('The world relies on your code. Test on thousands of different device, browser, and OS configurations–anywhere, any time.')
})

