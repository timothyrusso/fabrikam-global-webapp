const express = require('express');
const router = express.Router();
const Joi = require('joi');

const validateRequest = require('../middleware/validate-request');
const Company = require('../helpers/company');
const userService = require('./user.service');

// Routes

router.get('/', getAll);
router.get('/main', getMain);
router.get('/:id', getById);
router.post('/', createSchema, create);
router.put('/:id', updateSchema, update);
router.delete('/:id', _delete);

module.exports = router;

// Route functions

function getAll(req, res, next) {
  userService
    .getAll()
    .then((users) => res.json(users))
    .catch(next);
}

function getMain(req, res, next) {
  userService
    .getMainFields()
    .then((users) => res.json(users))
    .catch(next);
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then((user) => res.json(user))
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

// Schema functions to check the incoming requests

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
    userId: Joi.number().max(99999).required(),
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
    userId: Joi.number().max(99999).required(),
  });
  validateRequest(req, next, schema);
}
