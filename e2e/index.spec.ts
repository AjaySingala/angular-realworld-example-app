import { by, browser, element } from 'protractor';

import { HomePage } from './pages/home.page';

// E2E Testing Sample #1
describe('Conduit App E2E Test Suite', () => {
	const homePage = new HomePage();
	describe('home page should work fine', () => {
		beforeAll(() => {
			homePage.getPage();
		});

		it('should have right title', () => {
			homePage.getPageTitle()
				.then((title: string) => {
					expect(title).toEqual('Conduit');
				});
		});

		it('should return an tag name', () => {
			//browser.wait(homePage.getHomePageTag().getText(), 8000);
			const expected = 'home-page';
			const tag = homePage.getHomePageTag().getTagName()
				.then((tag: string) => {
					expect(tag).toEqual(expected);
				});
		});

		it('should return globalFeedTab', () => {
			const expected = 'Global Feed';
			homePage.globalFeedTab().getText()
				.then((tag: string) => {
					expect(tag).toEqual(expected);
				});
		})
	})
})

// // E2E Testing Sample #2
// describe('login page', function () {

// 	browser.get('https://app.bitrise.io/users/sign_in');

// 	it('should render login page', function () {
// 		// Checking the current url
// 		var currentUrl = browser.driver.getCurrentUrl();
// 		expect(currentUrl).toMatch('/sign_in');
// 	});

// 	it('should signin', function () {
// 		// Find page elements
// 		var userNameField = browser.driver.findElement(by.name('login'));
// 		var userPassField = browser.driver.findElement(by.name('password'));

// 		//finding button to sigin
// 		var loginForm = browser.driver.findElement(by.name("simpleSignInForm"));

// 		// Fill input fields
// 		console.log('entering username');
// 		userNameField.sendKeys('srividhya.pasupathy@imaginea.com');
// 		console.log('entering password');
// 		userPassField.sendKeys('Chittu@123');

// 		// Ensure fields contains what we've entered
// 		//expect(userNameField.getAttribute('value')).toEqual('srividhya.pasupathy@imaginea.com');
// 		//expect(userPassField.getAttribute('value')).toEqual('Chittu@123');		
// 		userNameField.getAttribute('value')
// 			.then((attribValue: string) => {
// 				expect(attribValue).toEqual('srividhya.pasupathy@imaginea.com');
// 			});

// 		userPassField.getAttribute('value')
// 			.then((attribValue: string) => {
// 				expect(attribValue).toEqual('Chittu@123');
// 			});

// 		console.log('clicking sigin button');
// 		loginForm.submit();
// 		console.log("done");
// 		browser.waitForAngular();
// 	});

// });

