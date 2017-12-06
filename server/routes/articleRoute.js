const router=require("express").Router();
const articleControl=require("../controllers/articleControl");

// Create new article
router.post("/create",articleControl.create);

// Get all article
router.get("/all",articleControl.all);

// Update article by id
router.put("/update/:articleId",articleControl.update);

// Delete article
router.delete("/delete/:id",articleControl.delete);

module.exports=router;
