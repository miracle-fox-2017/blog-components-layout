const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const articleSchema=new Schema({
  title:String,
  content:String,
  authorId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  createdAt:{
    type:Date,
    default:new Date()
  }
});
const Article=mongoose.model("Article",articleSchema);

module.exports=Article;
