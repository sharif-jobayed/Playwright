import { Page } from "@playwright/test"

type pageType = {
	page: Page;
	pageURL: string;
}

interface pageInterface {
	page: Page;
	pageURL: string;

	getPage(): Page;
	getPageURL(): string;
}

export { pageType, pageInterface }
