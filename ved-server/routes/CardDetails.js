import {Schema, model} from "mongoose";
const cardSchema = new Schema(
    {
        link: {
            type:String,
            required : true,
        },
        image: {
            type:String,
            required : true,
        },
        item_name: {
            type:String,
            required : true,
        },
        item_category:{
            type:String,
            requird:true,
        },
        item_description: {
            type:String,
            required : true,
        },
    },
    {timestamp:true}
);
const Card = model("Card", cardSchema);
export default Card;