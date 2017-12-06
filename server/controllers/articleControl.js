const Article=require("../models/articleModel");
const User=require("../models/userModel");
const ObjectId=require("mongoose").Types.ObjectId;
const jwt=require("jsonwebtoken");

module.exports={
  all:(req,res)=>{
    Article.find().sort({"_id":-1}).populate("authorId").then((articles)=>{
      res.send({status:true,msg:articles});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  create:(req,res)=>{
    const userId=jwt.verify(req.headers.token,process.env.TOKEN_SECRET).userId;
    User.findOne({
      "_id":ObjectId(userId)
    }).then((user)=>{
      if(user != null){
        req.body.authorId=userId;
        new Article(req.body).save().then((response)=>{
          res.send({status:true,msg:response});
        });
      }else{
        res.send({status:false,msg:"Invalid token!"});
      }
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  update:(req,res)=>{
    const userId=jwt.verify(req.headers.token,process.env.TOKEN_SECRET).userId;
    User.findOne({
      "_id":ObjectId(userId)
    }).then((user)=>{
      if(user != null){
        Article.updateOne({
          "_id":ObjectId(req.params.articleId)
        },req.body).then((response)=>{
          res.send({status:true,msg:response});
        });
      }else{
        res.send({status:false,msg:"Invalid token!"});
      }
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  delete:(req,res)=>{
    const userId=jwt.verify(req.headers.token,process.env.TOKEN_SECRET).userId;
    User.findOne({
      "_id":ObjectId(userId)
    }).then((user)=>{
      if(user != null){
        Article.deleteOne({
          "_id":ObjectId(req.params.id)
        }).then((response)=>{
          res.send({status:true,msg:response});
        });
      }else{
        res.send({status:false,msg:"Invalid token!"});
      }
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  }
};
