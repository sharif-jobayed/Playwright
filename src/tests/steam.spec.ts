import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { OTPPage } from '../pages/OTPPage';

test(
	`Steam homepage loads`,
	async ({page}) => {
		const homePage = new HomePage(page);

		await homePage.goto();
		return homePage.assertTitle();
	}
);

test(
	`Login to Steam`,
	async({page}) => {
		const loginPage = new LoginPage(page);

		await loginPage.goto();
		await loginPage.clickLoginLink();
		await loginPage.login(`globalgamer2017`, `Hit_The_Game`);
		await loginPage.areOTPFiledsDisplayed();

		const otpPage = new OTPPage(page);
		await otpPage.gotoEmail();
		await otpPage.clickSignInButtonAtTop();
		// return otpPage.isHomePageDisplayed();
	}
);
