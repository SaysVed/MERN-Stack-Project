import express from 'express';
import mongoose from 'mongoose';
import Card from "./routes/CardDetails.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
const port = 5000;
app.use(express.json());

mongoose.connect(process.env.MONGO_CRED).then((db) => {
    console.log("Connected to MongoDB!");
});
app.get("/", (req, res) => {
    res.status(401).json({ 
        message: "Server working fine!",
    })
})
app.listen(port, () => {
    console.log("Server listening on port "+ port);
});

//API
app.post("/create", (req, res) => {
    Card.create({
        link: req.body.link,
        image: req.body.image,
        item_name: req.body.item_name,
        item_category: req.body.item_category,
        item_description: req.body.item_description,
    }).then((data, err) => {
        if(err){
            res.status(500).json({
                message: "Something went wrong!",
            })
        }else{
            res.status(200).json({
                message: "Card created successfully!",
                card: data,
            })
        }
    })
})

app.get("/load-cards", (req, res) => {
    Card.find().then((data, err) => {
        if(err){
            return res.status(500).json({
                message: "Something went wrong!",
            });
        }else{
            return res.status(200).json({
                message: "Cards loaded successfully!",
                cards: data,
            });
        }
    });
});
