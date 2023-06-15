import * as cheerio from 'cheerio';
import axios from "axios";
import {FlipkartModel , TshirtModel} from '../Model/FlipSchema.js';


const FetchMobile = async (Pagination) => {
    try {
        const PageNumber = Pagination.page
        for (let IncPage = 1; IncPage <= PageNumber; IncPage++) {
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
                ProductData.push(data)
            })
            console.log(ProductData);
            ProductData.map(async (data) => {
                const SaveInDB = FlipkartModel(data)
                await SaveInDB.save()
            })
        }
    }
    catch (err) {
        throw new Error(err)
    }
}

const FetchTshirt = async () => {
    try {
        const response = await axios.get('https://www.snapdeal.com/acors/json/product/get/search/2/6/40?q=&sort=rlvncy&brandPageUrl=&keyword=tshirt');
        const html = response.data;
        const $ = cheerio.load(html);
        const data = $(
                     "div.product-tuple-description > div.product-desc-rating > a"  
                     );
            const AlloverData = []
           data.each((i , ele)=>{
            AlloverData.push($(ele).attr("href"));
        })

        return AlloverData 
      } catch (error) {
        throw Error (err)
      }
    }

     const AnotherMethod = async ()=>{
         const a = await FetchTshirt()
         console.log(a);
        //   const $ = cheerio.load(a)
        //   const ProductDetails  = {}

        //   ProductDetails.image = $(".cloudzoom").attr("src")
        //   console.log(ProductDetails);
     }

     AnotherMethod()





export { FetchMobile, FetchTshirt }



// https://www.snapdeal.com/acors/json/product/get/search/2/6/40?q=&sort=rlvncy&brandPageUrl=&keyword=tshirt