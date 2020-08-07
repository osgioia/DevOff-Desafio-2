const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

module.exports = router;

router.get('/', function(req, res) {
    res.send('Dev Off! Desafio 2');
  });

router.post("/decode", controller.decode);
router.post("/encode", controller.encode);

router.use(controller.send404);


