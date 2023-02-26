const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../middleware/validate-request');
const Company = require('../helpers/company');
const userService = require('./user.service');

// routes

router.get('/', getAll);
router.post('/', createSchema, create);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// route functions

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}

function create(req, res, next) {
  userService
    .create(req.body)
    .then(() => res.json({ message: 'User created' }))
    .catch(next);
}

function update(req, res, next) {
  userService
    .update(req.params.id, req.body)
    .then(() => res.json({ message: 'User updated' }))
    .catch(next);
}

function _delete(req, res, next) {
  userService
    .delete(req.params.id)
    .then(() => res.json({ message: 'User deleted' }))
    .catch(next);
}

// schema functions

function createSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthDay: Joi.date().required(),
    company: Joi.string()
      .valid(Company.Fabrikam, Company.FabrikStore, Company.FabrikDistribution)
      .empty(''),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    addressOne: Joi.string().required(),
    addressTwo: Joi.string().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
    userId: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}

function updateSchema(req, res, next) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    birthDay: Joi.date().required(),
    company: Joi.string()
      .valid(Company.Fabrikam, Company.FabrikStore, Company.FabrikDistribution)
      .empty(''),
    startDate: Joi.date().required(),
    endDate: Joi.date().required(),
    addressOne: Joi.string().required(),
    addressTwo: Joi.string().required(),
    city: Joi.string().required(),
    province: Joi.string().required(),
    userId: Joi.number().required(),
  });
  validateRequest(req, next, schema);
}
