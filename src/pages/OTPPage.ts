import { Page, Locator, expect, BrowserContext } from '@playwright/test';
import { pageType } from '../types';
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
		this.aNewTab = this.getPage().context();
		this.otpFields = this.getPage().locator(`//div[@class='responsive_page_frame with_header']//input`);

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
		const aNewPage = await this.aNewTab.newPage();
		const emailPage = new EmailPage({ page: aNewPage });

		return aNewPage.goto(emailPage.getPageURL());
	}
}

export { OTPPage }
