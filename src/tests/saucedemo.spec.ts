import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test(`login and verify inventory`, async ({ page }) => {
	const loginPage = new LoginPage(page);
	await loginPage.goto(``);
	await loginPage.login(`sandard_user`, `secret_sauce`);
	await expect(page).toHaveURL(/inventory/);
});
