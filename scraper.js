const puppeteer = require("puppeteer");

async function scrapeWebsite(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

}
scrapeWebsite()