import mongoose from "mongoose";

import config from "./config";

const createConnection = () => {
  mongoose.connect(config.mongoConnection, { useNewUrlParser: true });
  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "connection error"));
  db.once("open", () => {
    console.log("Conectado no Mongo");
  });
};

export default {
  createConnection
};
