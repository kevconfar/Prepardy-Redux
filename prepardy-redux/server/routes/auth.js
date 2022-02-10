const express = require('express');
const router = express.Router();

// const { register, login } = '../controllers/auth';
const authController = require('../controllers/auth');

router.post("/register", authController.register);
router.post("/login", authController.login);
// router.route("/forgotpassword").post(authController.forgotpassword);
// router.route("/resetpassword/:resetToken").put(authController.resetpassword);

// const { register, login, forgotpassword, resetpassword } = require('../controllers/auth')


// router.route("/register").post(register);
// router.route("/login").post(login);
// router.route("/forgotpassword").post(forgotpassword);
// router.route("/resetpassword/:resetToken").put(resetpassword);


module.exports = router;