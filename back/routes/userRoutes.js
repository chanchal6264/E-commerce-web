const userController = require("../controller/userController");
const express = require("express");
const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/userById/:id", userController.userdata);
router.patch("/update/:id", userController.updateUser);
router.delete("/delete/:id", userController.deleteUser);

exports.router = router;
