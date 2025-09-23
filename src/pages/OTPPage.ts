import { Page, Locator, expect, BrowserContext } from '@playwright/test';
import { pageType } from '../types';
import { HomePage } from '../pages/HomePage';
import { EmailPage } from './EmailPage';
import { BasePage } from './BasePage';

class OTPPage extends BasePage {
	private aNewTab: BrowserContext;
	private otpFields: Locator;


	constructor({ page }: pageType) {
		super({
			page,
			pageURL: `https://store.steampowered.com/login/?redir=&redir_ssl=1`
		});
		this.aNewTab = this.page.context();
		this.otpFields = this.page.locator(`//div[@class='responsive_page_frame with_header']//input`);

	}

	async areOTPFiledsDisplayed() {
		let isVisible: boolean;
		const fields = await this.otpFields.all();

		for (let i = 0; i < fields.length; i++) {
			isVisible = await fields[i].isVisible();

			return expect(isVisible).toBeTruthy();
		}
	}

	async gotoGoogleAccountLogin() {
		const newPage = await this.page.context().newPage();
		const emailPage = new EmailPage(this.page);

		return newPage.goto(await emailPage.getPageURL());
	}
}

export { OTPPage }
