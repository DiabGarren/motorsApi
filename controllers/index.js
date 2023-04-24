const mongodb = require('../db');

const getCars = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('motors').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

module.exports = { getCars };
