import * as joi from 'joi';

export const JoiValidationSchema = {
  MONGODB: joi.required(),
  PORT: joi.number().default(3002),
  DEFAULT_LIMIT: joi.number().default(6),
};
