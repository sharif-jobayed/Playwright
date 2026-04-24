import { Locator, Page } from "@playwright/test";

class LoginPage {
	private page: Page;
	private usernameFld: () => Locator;

	constructor(page: Page) {
		this.page = page;

		this.usernameFld = () => {
			return this.page.locator(`xpath=(//input[@data-test="username"])`);
		}
	}

	public goto = async (url: string): Promise<void> => {
		await this.page.goto(url);
	}

	public fillUsername = async (username: string): Promise<void> => {
		return this.usernameFld().fill(username);
	}

	public fillPassword = async (password: string): Promise<void> => {
		const passwordFld = this.page.locator(`xpath=(//input[@id='password'])`);
		return passwordFld.fill(password);
	}

	public pressLogin = async (): Promise<void> => {
		const
	}

	public login = async (username: string, password: string): Promise<void> => {
		await this.fillUsername(username);
		await this.fillPassword(password);
		return this.pressLogin();
	}

}

export { LoginPage }
