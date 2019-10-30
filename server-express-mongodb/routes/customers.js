var express = require("express");
var router = express.Router();
var CustomerModel = require("../models/customer");

router.get("/", function(req, res, next) {
  CustomerModel.find().then(customers => res.json(customers));
});

router.post("/", function(req, res, next) {
  let newCustomer = new CustomerModel();
  newCustomer.name = req.body.name;
  newCustomer.email = req.body.email;
  newCustomer.phone = req.body.phone;
  newCustomer.save()
  .then(customer => res.json(customer))
  .catch(error => {
    console.error(error);
  });
});

router.delete("/:id", function(req, res, next) {
  CustomerModel.findByIdAndRemove(req.params.id, (err, customer) => {
    if (err) return res.status(400).send(err);
    res.send(customer);
  });
});

router.put("/:id", function(req, res, next) {
  CustomerModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    },
    { new: true },
    (err, customer) => {
      if (err) return res.status(400).send(err);
      res.send(customer);
    }
  );
});

module.exports = router;
