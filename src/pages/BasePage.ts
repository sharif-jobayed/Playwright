import { Browser, Page, expect, Locator } from '@playwright/test';
import { pageType, pageInterface } from '../types/index';

class BasePage implements pageInterface {
	page: Page;
	pageURL: string;

	constructor({ page, pageURL }: pageType) {
		this.page = page;
		this.pageURL = pageURL;
	}

	getPage(): Page {
		return this.page;
	}

	getPageURL(): string {
		return this.pageURL;
	}
}

export { BasePage }
