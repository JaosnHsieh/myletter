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


router.get('/test', function (req, res, next) {
  console.log(123);
  db.Paper.findAll().then(function (papers) {

    res.json(papers);
  });
});

// update single todo
router.put('/todo/:id', function(req, res) {
  models.Todo.find({
    where: {
      id: req.params.id
    }
  }).then(function(todo) {
    if(todo){
      todo.updateAttributes({
        title: req.body.title,
        complete: req.body.complete
      }).then(function(todo) {
        res.send(todo);
      });
    }
  });
});

router.post('/test', function (req, res, next) {

  var updatedData = JSON.parse(req.body.data);


function storeData(index){
  db.Paper.find({
    where:{
      id : updatedData[index].id
    }
    }).then(function(paper){
      paper.updateAttributes({
        fromtext:updatedData[index].fromtext,
        fromnumber:updatedData[index].fromnumber,
        totext:updatedData[index].totext,
        tonumber:updatedData[index].tonumber,
        summary:updatedData[index].summary
      });
    });
}
  for(i in updatedData){
    storeData(i);
  }

  res.send(req.body);
});

router.get('/getpapers', function (req, res, next) {
  db.Paper.findAll().then(function (papers) {

    res.json(papers);
  });
});


router.post('/test2', function (req, res, next) {

console.log("test222");
//// Sequilize 的 upsert 方法 ， 如果是新的資料的話 就新增，如果不是的話 就 更新

        var updatedData = JSON.parse(req.body.data);


          function storeData(index){
            db.Paper.upsert(
              updatedData[index]
            ).then(function(paper){
                console.log("successfully!!");
              });
            }

            for(i in updatedData){
              storeData(i);
            }



            res.send(req.body);

  });



  router.delete('/test2', function (req, res, next) {
    var deleteId = JSON.parse(req.body.data);
      db.Paper.destroy({
          where: {
            id: deleteId
          }
        }).then(function(todo) {
          res.json('delete successfully!!');
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
