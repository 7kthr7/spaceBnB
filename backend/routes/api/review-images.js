const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, requireAuth } = require("../../utils/auth");
const {
  User,
  Spot,
  Booking,
  Review,
  ReviewImage,
  SpotImage,
} = require("../../db/models");
const { sequelize } = require("../../db/models");
const { Op } = require("sequelize");

const router = express.Router();

//----->DELETE/ a reviewImage<-----//

router.delete("/:imageId", requireAuth, async (req, res) => {
  const reviewImage = await ReviewImage.findByPk(req.params.imageId);
  if (!reviewImage) {
    let err = new Error();
    err.message = `Review image couldn't be found`;
    err.statusCode = 404;
    return res.status(err.statusCode).json(err);
  }
  
  const image = await Review.findByPk(req.params.imageId);
  if (image.userId !== req.user.id) {
    let err = new Error();
    err.message = `Review image must belong to current user`;
    err.statusCode = 404;
    return res.status(err.statusCode).json(err);
  }

  const deletedImage = await image.destroy();
  res.status(200).json({
    message: "Successfully deleted",
    status: 200,
  });

  res.status(200).json(deletedImage);
});
 

module.exports = router;
