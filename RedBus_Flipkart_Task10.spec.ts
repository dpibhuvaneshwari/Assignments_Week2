
import {test} from "@playwright/test";

test("Launch RedBus in Edge",async ({})=>{

    const edge = await import("playwright");

    const browser = await edge.chromium.launch({
        channel: "msedge",
        headless: false
    });

    const page = await browser.newPage();

    await page.goto("https://www.redbus.in/");

    console.log(`Page Title: ${await page.title()}`);
    console.log(`Page URL: ${page.url()}`);

    await browser.close();

});

test("Launch Flipkart in WebKit",async ({})=>{

    const webkit = await import("playwright");

    const browser = await webkit.webkit.launch({
        headless: false
    });

    const page = await browser.newPage();

    await page.goto("https://www.flipkart.com/");

    console.log(`Page Title: ${await page.title()}`);
    console.log(`Page URL: ${page.url()}`);

    await browser.close();

});
