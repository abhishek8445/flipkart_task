import puppeteer from "puppeteer";

const FetchMobile = async () => {
    try {
        const Browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null,
        })
        const page = await Browser.newPage();
        await page.goto("https://www.flipkart.com/search?q=mobile&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_3_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=mobile%7CMobiles&requestId=aed93c48-2b6f-4478-9722-cd2047137978", {
            waitUntil: "domcontentloaded",
        });
    }

    catch (err) {
        throw Error(` Fetch Mobile Data Failed ==========> ${err}`)
    }
}

const FetchTshirt = async () => {
    try {
        const ShowBrowser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });

        const Page = await ShowBrowser.newPage();
        await Page.goto("https://www.flipkart.com/search?q=oversized+t+shirt&sid=clo%2Cash%2Cank%2Cedy&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_13_na_pm_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_13_na_pm_na&as-pos=1&as-type=RECENT&suggestionId=oversized+t+shirt%7CMen%27s+T-shirts&requestId=a230508f-6681-4f3f-b02c-0b95f0e648ff&as-backfill=on")
    }
    catch (err) {
        throw new Error(`Fetch Snapeal T-Shirt Data Faild===============> ${err}`)
    }
}


export { FetchMobile, FetchTshirt }