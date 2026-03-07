
import { Page } from "@playwright/test";
import { BasePage } from "../framework/BasePage";

class InventoryPage extends BasePage {
	
	constructor(page: Page) {
		super(page);
	}

}

export { InventoryPage }