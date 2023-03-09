const db = require('../helpers/db');

module.exports = {
  getAll,
  getMainFields,
  getById,
  create,
  update,
  delete: _delete,
};

async function getAll() {
  return await db.User.findAll();
}

async function getMainFields() {
  return await db.User.findAll({
    attributes: ['firstName', 'lastName', 'userId', 'company'],
    where: { endDate: null }
  });
}

async function getById(id) {
  return await getUser(id);
}

async function create(params) {
  
  /**
   * Check if the users is already created
   */
  if (await db.User.findOne({ where: { userId: params.userId } })) {
    throw 'User Id "' + params.userId + '" is already created';
  }

  const user = new db.User(params);

  /**
   * Save the created user.
   * save() method is a Sequelize instance method that saves or updates a record to the database.
   */
  await user.save();
}

async function update(id, params) {
  const user = await getUser(id);

  /**
   * Validation for the update method to check if the userId field is not already in use by another user when the current user is being updated
   */
  const userIdChanged = params.userId && user.userId !== params.userId;
  if (
    userIdChanged &&
    (await db.User.findOne({ where: { userId: params.userId } }))
  ) {
    throw 'User Id "' + params.userId + '" is already created';
  }

  /**
   * Copy params to user and save
   */
  Object.assign(user, params);
  await user.save();
}

async function _delete(id) {
  const user = await getUser(id);
  await user.destroy();
}

async function getUser(id) {
  const user = await db.User.findByPk(id);
  if (!user) throw 'User not found';
  return user;
}