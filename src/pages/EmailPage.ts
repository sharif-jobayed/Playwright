import { Page, Locator, expect } from '@playwright/test';
import { pageType } from '../types';
import { BasePage } from './BasePage';

class EmailPage extends BasePage {
	private signInLinkAtTop: Locator;
	private emailField: Locator;
	private passwordField: Locator;
	private nextButton: Locator;

	constructor({ page }: pageType) {
		super({
			page,
			pageURL: `https://workspace.google.com/intl/en-US/gmail/`
		});
		this.signInLinkAtTop = this.page.locator('(//a[@data-g-action="sign in"])[3]');
		this.emailField = this.page.locator(`(//input[@type='email'])`);
		this.passwordField = this.page.locator(`(//input[@type='password'])`);
		this.nextButton = this.page.locator(`(//span[text()='Next'])`);
	}

	async loginToEmail(email: string, password: string) {
		await this.signInLinkAtTop.click();
		await this.emailField.waitFor({
			state: `visible`,
			timeout: 5000
		});
		await this.nextButton.click();
	}

}

export { EmailPage }
