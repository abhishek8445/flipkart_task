import express from "express";
import { FetchMobileCategory , FetchSnapdealTshirt } from "../Controller/ResUser.js";

const Router = express.Router();

Router.get('/flipkart/mobile' , FetchMobileCategory)
Router.get('/snapdeal/t-shirt' , FetchSnapdealTshirt)



export default Router
