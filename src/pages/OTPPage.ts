import { Page, Locator, expect, BrowserContext } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

class OTPPage {
	private page: Page;
	private aNewTab: BrowserContext;
	private otpFields: Locator;
	private signInLinkAtTop: Locator;


	constructor(page: Page) {
		this.page = page;
		this.aNewTab = this.page.context();
		this.otpFields = this.page.locator(`//div[@class='responsive_page_frame with_header']//input`);
		this.signInLinkAtTop = this.page.locator(`//a[@aria-label="Open the Sign into Gmail page in a new tab"]`);
	}

	async gotoEmail() {
		return (await this.aNewTab.newPage()).goto(`https://workspace.google.com/intl/en-US/gmail/`);
	}

	async clickSignInButtonAtTop() {
		const links = await this.signInLinkAtTop.all();
		return links[1].click();
	}

	async isHomePageDisplayed() {
		const homePage = new HomePage(this.page);

		return expect(this.page).toHaveTitle(`Welcome to Steam`);
	}
}

export { OTPPage }
