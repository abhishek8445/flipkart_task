import * as cheerio from 'cheerio';
import axios from "axios";
import FlipkartModel from '../Model/FlipSchema.js';


const FetchMobile = async (Pagination) => {
    try {
        const PageNumber = Pagination.page
        for (let IncPage = PageNumber; IncPage>0; IncPage--) {
            const url = `https://www.flipkart.com/search?q=mobile&page=${IncPage}`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            const ProductDetails = $(' ._2kHMtA');
            const ProductData = [];
            ProductDetails.each((v, el) => {
                const data = {}
                data.MobileImg = $(el).find('.CXW8mj >img').attr('src');
                data.MobileName = $(el).find('._4rR01T').text();
                data.MobileActualPrice = $(el).find('._3I9_wc').text();
                data.MobilePrice = $(el).find('._30jeq3').text();
                data.MobileRating = $(el).find('.gUuXy-').text();
                data.Mobileave()
            })
        }

    }
    catch (err) {
        throw new Error(err)
    }
}

const FetchTshirt = async () => {
    try {
        const ShowBrowser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });

        const Page = await ShowBrowser.newPage();
        await Page.goto("https://www.flipkart.com/search?q=mobile&page=3")
    }
    catch (err) {
        throw new Error(`Fetch Snapeal T-Shirt Data Failed===============> ${err}`)
    }
}

export { FetchMobile, FetchTshirt }