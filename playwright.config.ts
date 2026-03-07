
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  use: {
    headless: false,
    viewport: { width: 1440, height: 900 },
    baseURL: 'https://www.saucedemo.com/',
  },
});