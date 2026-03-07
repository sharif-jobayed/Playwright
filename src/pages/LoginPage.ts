
import { Page, defineConfig } from "@playwright/test";

class LoginPage {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto() {
		await this.page.goto(`https://www.saucedemo.com`);
	}

	async login(username: string, password: string) {
		await this.page.locator(`xpath=(//input[@id='user-name'])`).fill(username);
		await this.page.locator(`xpath=(//input[@id='password'])`).fill(password);
		await this.page.locator(`xpath=(//input[@id='login-button'])`).click();
	}
}

export { LoginPage }
