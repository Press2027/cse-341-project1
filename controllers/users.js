const MongoDB = require('../data/database');

const { ObjectId } = require('mongodb');

const getAll = async (req, res) => {
  const result = await MongoDB.getDatabase().collection('users').find();

  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users);
  });
};

const getSingle = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const result = await MongoDB.getDatabase().collection('users').find({ _id: userId });

  result.toArray().then((users) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(users[0]);
  });
};

module.exports = {
  getAll,
  getSingle
};
