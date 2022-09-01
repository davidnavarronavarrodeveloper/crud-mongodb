var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

/* GET users listing. */
router.get("/", userController.get);
router.delete("/:id", userController.delete);

module.exports = router;
