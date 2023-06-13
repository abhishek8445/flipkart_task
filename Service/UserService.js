import * as cheerio from 'cheerio';
import axios from "axios";


const url = "https://www.flipkart.com/search?q=mobile";

const FetchMobile = async () => {
    try {

    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    const ProductDetails= $('._2kHMtA');
    const ProductData = [];
      ProductDetails.each((v, i) => {
      const FetchData = { Mobname: "" , storage:"" , Price:""};   
      FetchData.Mobname =$("div[class=_4rR01T]").text();         
      FetchData.storage = $(i)(".fMghEO").text()                
      FetchData.Price = $(i).children("._25b18c").text()     

      ProductData.push(FetchData);
    });

    console.dir(ProductData);
   


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
        throw new Error(`Fetch Snapeal T-Shirt Data Failed===============> ${err}`)
    }
}


export { FetchMobile, FetchTshirt }