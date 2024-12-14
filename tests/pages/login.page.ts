import { expect, Page } from "@playwright/test";

export default class LoginPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators
    userLogin = () => this.page.locator('[data-test="username"]');
    passwordLogin = () => this.page.locator('[data-test="password"]');
    buttonLogin = () => this.page.locator('[data-test="login-button"]');
    txtHeader = () => this.page.locator('.header_secondary_container > span');

    public async goto() {
        await this.page.goto('https://www.saucedemo.com/');
        await expect(await this.page.title()).toBe('Swag Labs')
    }

    public async loginSuccessful() {
        await this.userLogin().fill('standard_user');
        await this.passwordLogin().fill('secret_sauce');
        await this.buttonLogin().click()
        await expect(await this.txtHeader()).toHaveText('Products')
    }
}