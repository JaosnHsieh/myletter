var express = require('express'),
  router = express.Router(),
  db = require('../models');

module.exports = function (app) {
  app.use('/api', router);
};

router.get('/papers', function (req, res, next) {
  db.Paper.findAll().then(function (papers) {
    console.log(papers);
    res.render('paper', {
      papers:papers
    });

  });
});


router.get('/getpapers', function (req, res, next) {
  db.Paper.findAll().then(function (papers) {

    res.json(papers);
  });
});

// router.get('/paper:id', function (req, res, next) {
//   models.Todo.find({
//     where: {
//       id: req.params.id
//     }
//
//   db.Paper.find({
//     where: {
//       id:
//     }
//   }).then(function (paper) {
//
//     console.log(paper);
//     // res.render('index', {
//     // });
// });

router.post('/paper', function (req, res, next) {
  db.Paper.create({
    fromtext: req.body.fromtext, // 來文內容
    fromnumber: req.body.fromnumber,
    totext: req.body.totext,
    tonumber: req.body.tonumber,
    summary: req.body.summary, //
  }).then(function (paper) {

    // console.log(req.body.fromtext);
    res.send(req.body.fromtext);

  });

  // res.send(req.body);
});

router.post('/test', function (req, res, next) {
  console.log(req.body.name);
  res.send(req.body.name);
});


//
// router.delete('/', function (req, res, next) {
//   db.Paper.destroy({
//     where: {
//       id:
//     }
//   }).then(function (articles) {
//
//   });
// });
