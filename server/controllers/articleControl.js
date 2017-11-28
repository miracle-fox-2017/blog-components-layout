const Article=require("../models/articleModel");
const ObjectId=require("mongoose").Types.ObjectId;
const jwt=require("jsonwebtoken");

module.exports={
  create:(req,res)=>{
    if(req.headers.login_token != null){
      const userId=jwt.verify(req.headers.login_token,process.env.TOKEN_SECRET).userId;
      new Article({
        title:req.body.title,
        content:req.body.content,
        authorId:userId
      }).save().then((response)=>{
        res.send({status:true,msg:response});
      }).catch((err)=>{
        res.send({status:false,msg:err});
      });
    }else{
      res.send({status:false,msg:"Invalid login token!"});
    }
  },
  all:(req,res)=>{
    Article.find().populate("authorId").then((articles)=>{
      res.send({status:true,msg:articles});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  findAscLimit:(req,res)=>{
    Article.find().limit(+req.params.limit).then((articles)=>{
      res.send({status:true,msg:articles});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  byId:(req,res)=>{
    Article.findOne({
      "_id":ObjectId(req.params.articleId)
    }).populate("authorId","email").then((article)=>{
      if(article){
        res.send({status:true,msg:article});
      }else {
        res.send({status:false,msg:"Article not found"});
      }
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  update:(req,res)=>{
    if(req.headers.login_token != null){
      const userId=jwt.verify(req.headers.login_token,process.env.TOKEN_SECRET).userId;
      Article.findOne({
        "_id":ObjectId(req.params.articleId),
        "authorId":ObjectId(userId)
      }).then((article)=>{
        if(article == null){
          res.send({status:false,msg:"Article not found!"});
        }else{
          Article.updateOne({
            "_id":ObjectId(req.params.articleId),
            "authorId":ObjectId(userId)
          },{
            title:req.body.title,
            content:req.body.content
          }).then((response)=>{
            res.send({status:true,msg:response});
          });
        }
      }).catch((err)=>{
        res.send({status:false,msg:err});
      });
    }else{
      res.send({status:false,msg:"Invalid login token!"});
    }
  },
  delete:(req,res)=>{
    if(req.headers.login_token != null){
      const userId=jwt.verify(req.headers.login_token,process.env.TOKEN_SECRET).userId;
      Article.findOne({
        "_id":ObjectId(req.params.id),
        "authorId":ObjectId(userId)
      }).then((article)=>{
        if(article == null){
          res.send({status:false,msg:"Article not found!"});
        }else{
          Article.deleteOne({
            "_id":ObjectId(req.params.id)
          }).then((response)=>{
            res.send({status:true,msg:response});
          });
        }
      }).catch((err)=>{
        res.send({status:false,msg:err});
      });
    }else{
      res.send({status:false,msg:"Invalid login token!"});
    }
  }
};
