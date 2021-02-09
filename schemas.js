const Joi = require("joi");
const campgroundSchema = Joi.object({
  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    location: Joi.string(),
    description: Joi.string(),
    image: Joi.string(),
  }).required(),
});
module.exports.campgroundSchema = campgroundSchema;

module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    body: Joi.string().required(),
  }).required(),
});
