const router=require("express").Router();
const articleControl=require("../controllers/articleControl");

// Create new article
router.post("/create",articleControl.create);

// Get all article
router.get("/all",articleControl.all);

// Get articles limit
router.get("/getasc/:limit",articleControl.findAscLimit);

// Get article by id
router.get("/:articleId",articleControl.byId);

// Update article by id
router.put("/update/:articleId",articleControl.update);

// Delete article
router.delete("/delete/:id",articleControl.delete);

module.exports=router;
