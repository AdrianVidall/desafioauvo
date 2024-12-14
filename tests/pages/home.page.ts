import { expect, Page } from "@playwright/test";

export default class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //locators
    filter = () => this.page.locator('[data-test="product-sort-container"]');
    itemProduct = () => this.page.locator('[data-test="item-5-title-link"]');
    txtBackToProducts = () => this.page.locator('[data-test="back-to-products"]');
    txtItemName = () => this.page.locator('[data-test="inventory-item-name"]');
    txtItemDesc = () => this.page.locator('[data-test="inventory-item-desc"]');
    txtItemPrice = () => this.page.locator('[data-test="inventory-item-price"]');
    btnAddToCart = () => this.page.locator('[data-test="add-to-cart"]');
    btnCart = () => this.page.locator('[data-test="shopping-cart-link"]');
    txtTitle = () => this.page.locator('[data-test="title"]');
    btnCheckout = () => this.page.locator('[data-test="checkout"]');
    firstName = () => this.page.locator('[data-test="firstName"]');
    lastName = () => this.page.locator('[data-test="lastName"]');
    postalCode = () => this.page.locator('[data-test="postalCode"]');
    btnContinue = () => this.page.locator('[data-test="continue"]');
    btnFinish = () => this.page.locator('[data-test="finish"]');
    txtComplete = () => this.page.locator('[data-test="complete-header"]');

    public async filterProducts() {
        await this.filter().selectOption('hilo')
    }

    public async products() {
        await this.itemProduct().click()
        await expect(await this.txtBackToProducts()).toContainText('Back to products')
        await expect(await this.txtItemName()).toHaveText('Sauce Labs Fleece Jacket')
        await expect(await this.txtItemDesc()).toContainText("It's not every day that you come across")
        await expect(await this.txtItemPrice()).toContainText('$49.99')
    }

    public async addToCart() {
        await this.btnAddToCart().click()
        await this.btnCart().click()
        await expect(await this.txtTitle()).toHaveText('Your Cart')
        await expect(await this.itemProduct()).toHaveText('Sauce Labs Fleece Jacket')
        await this.btnCheckout().click()
        await expect(await this.txtTitle()).toHaveText('Checkout: Your Information')   
    }

    public async finish() {
        await this.firstName().fill('QA')
        await this.lastName().fill('Test')
        await this.postalCode().fill('12345-678')
        await this.btnContinue().click()
        await expect(await this.txtTitle()).toHaveText('Checkout: Overview')
        await expect(await this.itemProduct()).toHaveText('Sauce Labs Fleece Jacket')
        await this.btnFinish().click()
        await expect(await this.txtTitle()).toHaveText('Checkout: Complete!')
        await expect(await this.txtComplete()).toHaveText('Thank you for your order!') 
    }

}