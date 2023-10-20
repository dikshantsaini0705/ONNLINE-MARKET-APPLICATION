const express=require("express");
import mongoose from 'mongoose';
const bodyParser= require("body-parser")
mongoose.connect("mongodb+srv://dikshantsaini072002:uFosAknQIVPLSHgU@cluster0.7pwcnum.mongodb.net/MarketPlace",{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected with mongodb")
}).catch((err)=>{
    console.log(err)
})
const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
 
});

const product = new mongoose.model("product",productSchema)

app.post("/api/products/v1/new",async(req,res)=>{

    const product = await Product.create(req.body);
    res.status(200).json({
        success:true,
        product
    })
})
