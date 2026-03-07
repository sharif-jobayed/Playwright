
import {Page} from "@playwright/test";
import { BasePage} from "../framework/BasePage";
import {BaseURL} from "../resources/testData.json";

class LoginPage extends BasePage {

	constructor(page: Page) {
		super(page);
	}

	async goto() {
		return (await this.getPage()).goto(BaseURL);
	}

	async login(username: string, password: string) {
		const usernameFld = (await this.getPage()).locator(`xpath=(//input[@id='user-name'])`);
		await usernameFld.fill(username);

		const passwordFld = (await this.getPage()).locator(`xpath=(//input[@id='password'])`);
		await passwordFld.fill(password);

		const submitBtn = (await this.getPage()).locator(`xpath=(//input[@id='login-button'])`);
		await submitBtn.click();
	}

}

export { LoginPage }
