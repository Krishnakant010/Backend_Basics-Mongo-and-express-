const Todo = require("../models/todo.js");

exports.createTodo = async (req, res) => {
  try {
    // extract title from request bodu
    const { title, description } = req.body;
    // create a new TOdo object and insert into db
    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "errpr ontenal server error",
      message: err.message,
    });
  }
};
