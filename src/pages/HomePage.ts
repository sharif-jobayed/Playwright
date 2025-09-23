import { Page, expect } from '@playwright/test';
import { pageType } from '../types/index';
import { BasePage } from './BasePage';

class HomePage extends BasePage {
	constructor({ page }: pageType) {
		super({
			page,
			pageURL: `https://store.steampowered.com/`
		});
	}

	async goto() {
		return this.page.goto(`https://store.steampowered.com`);
	}

	async assertTitle() {
		return expect(this.page).toHaveTitle(/Steam/);
	}
}

export { HomePage }
