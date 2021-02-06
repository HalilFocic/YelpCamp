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
