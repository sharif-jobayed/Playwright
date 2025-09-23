import { Page, Locator, expect, BrowserContext } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

class OTPPage {
	private page: Page;
	private aNewTab: BrowserContext;
	private otpFields: Locator;


	constructor(page: Page) {
		this.page = page;
		this.aNewTab = this.page.context();
		this.otpFields = this.page.locator(`//div[@class='responsive_page_frame with_header']//input`);

	}

	async gotoGoogleAccountLogin() {
		return (await this.aNewTab.newPage()).goto(`https://accounts.google.com/`);
	}

	async areOTPFiledsDisplayed() {
		let isVisible: boolean;
		const fields = await this.otpFields.all();
		
		for (let i = 0; i < fields.length; i++) {
			isVisible = await fields[i].isVisible();

			return expect(isVisible).toBeTruthy();
		}
	}
}

export { OTPPage }
