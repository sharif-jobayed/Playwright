import { Page, expect } from '@playwright/test';

class HomePage {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async goto() {
		return this.page.goto(`https://store.steampowered.com`);
	}

	async assertTitle() {
		return expect(this.page).toHaveTitle(/Steam/);
	}
}

export { HomePage }
