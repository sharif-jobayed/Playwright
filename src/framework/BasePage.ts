
import {Page} from "@playwright/test";

class BasePage {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	public async getPage() {
		return this.page;
	}

	public async isPageOpen(): Promise<boolean> {
		return true;
	}

	public async isPageLoaded(): Promise<boolean> {
		return true;
	}
}

export { BasePage }
