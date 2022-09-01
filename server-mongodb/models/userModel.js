const { dbConnection } = require("../db/mongoConnection");

var User = function (id, name, age, descripcion) {
  this.id = id;
  this.name = name;
  this.age = age;
  this.descripcion = descripcion;
};

User.prototype.toString = function () {
  return "id" + this.id + " | Name: " + this.name;
};

User.get = function () {
  return new Promise((resolve, reject) => {
    dbConnection
      .getConnection()
      .collection("users")
      .find({})
      .limit(50)
      .toArray(function (err, result) {
        if (err) {
          console.log("REJECT");
          console.log(err);

          reject(err);
        } else {
          console.log("RESOLVE");
          resolve(result);
        }
      });
  });
};

User.add = async function (user) {
  const users = [
    {
      id: 1,
      name: "David Navarro Navarro",
      age: 31,
      descripcion: "Prueba",
    },
    {
      id: 2,
      name: "Cesar Cardona",
      age: 32,
      descripcion: "Todo",
    },
  ];
  result = await dbConnection
    .getConnection()
    .collection("users")
    .insertMany(users);

  // display the results of your operation
  console.log(result.insertedIds);
};

User.delete = async function (id) {
  return new Promise((resolve, reject) => {
    result = dbConnection
      .getConnection()
      .collection("users")
      .deleteOne({ id: id })
      .then((response) => {
        response.deletedCount === 1 ? resolve(true) : reject(false);
      })
      .catch((response) => {
        reject(response);
      });
  });
};

module.exports = User;
