var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var List = require('../models/list');
var Card = require('../models/card');

router.get('/', function(req, res) {
  var query = List.find({});
  query.where('boardId', req.query.boardId);
  query.exec( function(err, lists) {
    res.json(lists);
  });
});

router.post('/', function(req, res) {
  new List({
    name: req.body.name,
    boardId: req.body.boardId
  }).save( function(err, list) {
    res.json(list);
  });
});

router.put('/:id', function(req, res) {
  List.findByIdAndUpdate(
    req.params.id,
    { $set: { name: req.body.name }},
    { new: true },
    function(err, list) {
      res.json(list);
    });
});

router.delete('/:id', function(req, res) {
  List.findById(req.params.id, function(err, list) {
    list.remove();
    Card.find({ listId: req.query.id }).remove()
      .exec( function(err, card) {
        res.status(200).send({ success: true });
      });
  });
});

module.exports = router;
