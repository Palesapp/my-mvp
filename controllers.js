const ExampleModel = require('../models/exampleModel');

exports.getExample = async (req, res) => {
  try {
    const data = await ExampleModel.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createExample = async (req, res) => {
  const example = new ExampleModel({
    name: req.body.name,
    value: req.body.value
  });

  try {
    const newExample = await example.save();
    res.status(201).json(newExample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
