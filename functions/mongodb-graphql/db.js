const MongoClient = require("mongodb").MongoClient;
const URI = process.env.DB_URI;
const DB_NAME = process.env.DB_NAME;

let cachedDb = null;
module.exports = () => {
  if (cachedDb && cachedDb.serverConfig.isConnected()) {
    return Promise.resolve(cachedDb);
  }
  return MongoClient.connect(URI, { useNewUrlParser: true }).then(client => {
    cachedDb = client.db(DB_NAME);
    return cachedDb;
  });
};
