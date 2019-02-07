import { element, browser, by, Key } from 'protractor';

export class HomePage {
	getPage() {
		return browser.get('/');
	}

	getPageTitle() {
		return browser.getTitle();
	}

	getHomePageTag() {
		return element(by.tagName('home-page'));	  
	}

	globalFeedTab() {
		return element(by.css('.feed-toggle .nav-pills li.nav-item:nth-of-type(2) a.nav-link'));
	}
}