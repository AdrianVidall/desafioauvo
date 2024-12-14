import { expect, test } from "@playwright/test";
import LoginPage from "./pages/login.page";
import HomePage from "./pages/home.page";

test('Teste de fluxo com sucesso', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();

    await loginPage.loginSuccessful();

    await homePage.filterProducts();

    await homePage.products();

    await homePage.addToCart();

    await homePage.finish();
});