import { $ } from '@wdio/globals'

export default new class dashboardPage {

    get cart () {
        return $('#shopping_cart_container')
    }

    get cart_badge_number_1 () {
        return $('//*[@id="shopping_cart_container"]/a/span')
    }

    get add_to_cart_sauce_labs_backpack () {
        return $('#add-to-cart-sauce-labs-backpack')
    }

    get add_to_cart_sauce_labs_bike_light () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }

    get cart_item () {
        return $('#item_4_title_link')
    }

    get burger_menu () {
        return $('#react-burger-menu-btn')
    }

    get about() {
        return $('#about_sidebar_link')
    }

    get about_page() {
        return $('//*[@id="__next"]/div[3]/div[1]/div/div/div[1]/div/div[3]/p/text()')
    }

    
}