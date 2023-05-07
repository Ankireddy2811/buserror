const express = require("express");
const app = express();

const path = require("path");
const dbPath = path.join(__dirname, "userData.db");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const bcrypt = require("bcrypt");
const db = null;
const initlaizeAndDb = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server is running ate http://localhost:3000/");
    });
  } catch (e) {
    console.log(`Db error is ${e.message}`);
    process.exit(1);
  }
};
initlaizeAndDb();
