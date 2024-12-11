import { $ } from '@wdio/globals'

export default new class loginPage {

    get username () {
        return $('#user-name')
    }

    get password () {
        return $('#password')
    }

    get login () {
        return $('#login-button')
    }

    get logo () {
        return $('//*[@id="header_container"]/div[1]/div[2]/div')
    }

    get error_message () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3')
    }

}