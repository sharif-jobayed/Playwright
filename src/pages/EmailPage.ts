import { Page, Locator } from '@playwright/test';

class EmailPage {

	private page: Page;
	private emailField: Locator;
	private passwordField: Locator;
	private nextButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.emailField = this.page.locator(`(//input[@type='email'])`);
		this.passwordField = this.page.locator(`//input[@type='password']`);
		this.nextButton = this.page.locator(`//span[text()='Next']`);
	}

	async isPageLoaded(timeout: number = 10000) {
		return this.page.waitForLoadState(`load`), { timeout: timeout }
	}

	async loginToGoogleAccount() {
		await this.emailField.fill(`globalgamer2017@gmail.com`);
		await this.nextButton.click();
		await this.passwordField.fill(`@73450Rox`);
		await this.nextButton.click();
	}

}

export { EmailPage }
