export default class Page {
    open(path) {
        browser.maximizeWindow();
        browser.url(`http://automationpractice.com${path}`);
    }
}