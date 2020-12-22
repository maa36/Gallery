//initialize express router
let router = require("express").Router();

//set default API response


//Import Bio Controller
var imagesConroller = require("../controllers/imagesConroller");


// Bio routes

router.route("/add").post(imagesConroller.addImage);

router.route("/images").get(imagesConroller.getImages);


//Export API routes
module.exports = router;
