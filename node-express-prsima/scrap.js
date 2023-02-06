
import {fs, writeFile} from 'fs';
import puppeteer from 'puppeteer-core';

//Script to scraping a web page
(async (title, src) => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Url scraping
    await page.goto('https://unsplash.com/fr');
    const result = await page.evaluate(() => {

        //Select Query selector
        const images = document.querySelectorAll('div.rJ2xz bYpwS U8eXG M5vdR figure img');
        const urls = Array.from(images).map(v => v.src);
        const titles = Array.from(images).map(v => v.alt);
        return { urls, titles };
    });  
    console.log(result);
    await browser.close();
})();