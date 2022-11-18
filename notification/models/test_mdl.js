const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const testSchema = new Schema({
  test_name: { type: String, required: true, unique: true }, //add  property
});

testSchema.plugin(AutoIncrement, { inc_field: "test_id" });

var test = mongoose.model("test.test", testSchema);

module.exports = test;
