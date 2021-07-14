
const express = require('express');
const router = express.Router();
const pets = require("../Model/model");//חיבור למודל

router.get('/allpets', function (req, res, next) {
  pets.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.post('/addpet', function (req, res, next) {
  pets.create(req.body).then(function (p) {
    res.send(p);
  }).catch(next);
});
router.post('/addpets', function (req, res, next) {
  pets.insertMany(req.body, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
router.delete('/deletepet/:id', function (req, res, next) {
  pets.findOneAndDelete({ _id: req.params.id }).then(function (pet) {
    res.send(pet)
  });
});

//עדכון אוביקט
router.put('/updatepet/:id', function (req, res, next) {
  pets.findOneAndUpdate({ _id: req.params.id }, req.body).then(function (pet) {
    pets.findOne({ _id: req.params.id }).then(function (pet) {
      res.send(pet)
    });
  });
});
module.exports = router;

