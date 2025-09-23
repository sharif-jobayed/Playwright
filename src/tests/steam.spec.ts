import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { OTPPage } from '../pages/OTPPage';
import { EmailPage } from '../pages/EmailPage';

test(
	`Steam homepage loads`,
	async ({ page }) => {
		const homePage = new HomePage(page);

		await homePage.goto();
		return homePage.assertTitle();
	}
);

test(
	`Login to Steam`,
	async ({ page }) => {
		const loginPage = new LoginPage(page);

		await loginPage.goto();
		await loginPage.clickLoginLink();
		await loginPage.login(`globalgamer2017`, `Hit_The_Game`);

		const otpPage = new OTPPage(page);
		await otpPage.areOTPFiledsDisplayed();
		await otpPage.gotoGoogleAccountLogin();

		const emailPage = new EmailPage(page);
		await emailPage.isPageLoaded();
		await emailPage.loginToGoogleAccount();
	}
);
