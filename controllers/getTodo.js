const Todo = require("../models/todo.js");

exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});

    // respomse
    res.status(200).json({
      success: true,
      data: todos,
      message: "Entire data fetched successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "  server error",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract todo item based on ID
    const id = req.params.id;
    const todo = await Todo.findById({ _id: id });

    // data for given id not found
    if (!todo) {
      return res.status(404).json({
        susccess: false,
        message: "no data found with given id",
      });
    }
    // if found
    res.status(200).json({
      susccess: true,
      data: todo,
      message: "Data found",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      data: "  server error",
      message: err.message,
    });
  }
};
