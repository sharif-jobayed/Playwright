
import { test, expect } from "@playwright/test";
import {UserCreds} from "../resources/testData.json";
import { LoginPage } from "../pages/LoginPage";

test(`Login Test`, async ({ page }) => {
	const loginPage = new LoginPage(page);

	await loginPage.goto();
	await loginPage.login(UserCreds.Standard.Username, UserCreds.Standard.Password);
});
