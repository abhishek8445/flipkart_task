import { FetchMobile ,FetchTshirt } from "../Service/UserService.js"

const FetchMobileCategory = async (req, res) => {
    try {
       const Pagination = req.query
       await FetchMobile(Pagination);
       res.json({ status: true, message:"Fetch Mobile Data Successfully" })
    }
    catch (err) {
       res.json({ status: false, error:err.keyValue, message:err.message })
    }
 }
 
 const FetchSnapdealTshirt = async (req, res) => {
    try {
      const CurrentPageNo  =req.query
        await FetchTshirt(CurrentPageNo)
       res.json({ status: true, message:"Fetch Snapdeal T-Shirt Data Successfully" })
    }
    catch (err) {
       res.json({ status: false, error: err.keyValue, message:err.message })
    }
 } 


 export { FetchMobileCategory ,  FetchSnapdealTshirt}