var express = require('express');
var router = express.Router();

var burger = require('../models')['burgers2'];
burger.sync();

router.get('/', function (req, res){
  res.redirect('/burgers');
});

router.get('/burgers', function(req, res){
  burger.findAll({
    attributes: ['id', 'burger_name', 'devoured']
  }).then(function(data){
    res.render('index', {burgers: data});
  });
});

router.post('/burgers/create', function(req, res){

  burger.create({
    burger_name: req.body.burgerInput,
    devoured: 0
  });

  res.redirect('/burgers');


});

router.put('/burgers/update/:id', function(req, res){
  burger.update({
    devoured: [req.body.devoured],
  },{
    where: {
      id: [req.params.id]
    }
  });

  res.redirect('/burgers');

});

router.delete('/burgers/delete/:id', function(req, res){
  burger.destroy({
    where:{
      id: [req.params.id]
    }
  });

  res.redirect('/burgers');

});

module.exports = router;