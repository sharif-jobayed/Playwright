import { defineConfig } from '@playwright/test';

export default defineConfig({
	testDir: 'tests',
	timeout: 30_000,
	use: {
		headless: false,
		viewport: { width: 1600, height: 900 },
		baseURL: 'https://www.saucedemo.com',
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure'
	},
	projects: [
		{ name: 'chromium', use: { browserName: 'chromium' } },
		{ name: 'firefox', use: { browserName: 'firefox' } },
		{ name: 'webkit', use: { browserName: 'webkit' } }
	],
	reporter: [['list'], ['html', { outputFolder: 'playwright-report' }]]
});
