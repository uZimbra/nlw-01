import { Joi } from 'celebrate';

const dataValidation = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  whatsapp: Joi.number().required(),
  latitude: Joi.number().required(),
  longitude: Joi.number().required(),
  city: Joi.string().required(),
  uf: Joi.string().required().max(2),
  items: Joi.string().required()
})

export default dataValidation;