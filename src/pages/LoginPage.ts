import { expect, Locator, Page } from '@playwright/test';
import { pageType } from '../types/index';
import { HomePage } from './HomePage';
import { BasePage } from './BasePage';

class LoginPage extends BasePage {
	private usernameField: Locator;
	private passwordFiled: Locator;
	private signinButton: Locator;

	constructor({ page }: pageType) {
		super({
			page,
			pageURL: `https://store.steampowered.com/login/?redir=&redir_ssl=1`
		});
		this.usernameField = this.page.locator(`//div[@class='_3BkiHun-mminuTO-Y-zXke']//input[@type='text']`);
		this.passwordFiled = this.page.locator(`//input[@type='password']`);
		this.signinButton = this.page.locator(`//button[@type='submit']`);
	}

	async goto() {
		this.page.goto(`https://store.steampowered.com`);
	}

	async clickLoginLink() {
		return this.page.click(`//a[@class='global_action_link']`);
	}

	async login(username: string, password: string) {
		await this.usernameField.fill(username);
		await this.passwordFiled.fill(password);
		return this.signinButton.click();
	}
}

export { LoginPage }
