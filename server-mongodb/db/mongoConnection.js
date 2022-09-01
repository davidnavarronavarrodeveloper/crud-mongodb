const { MongoClient } = require("mongodb");
// Replace the uri string with your MongoDB deployment's connection string.
const uri =
  "mongodb+srv://david:D1a2v3i4d5.@cluster0.zopkdqc.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri);
let db = null;

async function run() {
  try {
    await client.connect();
    console.log("Connected Mongo Client");
    // database and collection code goes here
    let db = await client.db("test");
    console.log("Connection Schema");

    return db;
  } finally {
    console.log("finally");
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

var dbConnection = {
  db: null,
  connect: async function () {
    console.log("Connecting DB ...");
    db = await run();
    this.db = db;
  },
  getConnection: function () {
    console.log("Get Connection DB");
    return this.db;
  },
};

module.exports = { dbConnection };
