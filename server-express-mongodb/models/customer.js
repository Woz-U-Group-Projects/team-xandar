"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
  id: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true}
});

// Duplicate the ID field.
CustomerSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
CustomerSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Customer", CustomerSchema);
