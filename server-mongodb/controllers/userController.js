var User = require("../models/userModel");

exports.get = async function (request, response) {
  response.status(200).json(await User.get());
};

exports.delete = async function (request, response) {
  result = await User.delete(parseInt(request.params.id));

  if (result === true) {
    response
      .status(200)
      .json({ message: "Se ha realizado correctamente el borrado" });
  } else {
    response
      .status(400)
      .json({ message: "No se ha podido realizar el borrado" });
  }
};
