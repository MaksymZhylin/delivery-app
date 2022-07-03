const express = require("express");
const app = express();
const mysql = require("mysql2");
const PORT = process.env.PORT || 3001;
const cors = require("cors");

let query_stores = "SELECT * FROM stores";
let query_items = "SELECT * FROM items";
let query_buyers =
  "INSERT INTO buyers (id, name, email, phone, address) VALUES (?,?,?,?,?)";
let query_buyers_last_id = "SELECT * FROM buyers";

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "mysql5046.site4now.net",
  user: "a8949b_maksymz",
  database: "db_a8949b_maksymz",
  password: "060477maks",
});

app.get("/stores", (req, res) => {
  db.query(query_stores, (err, result) => {
    if (err) {
      console.error("Warning: " + err.message);
    } else {
      res.send(result);
    }
  });
});

app.get("/items", (req, res) => {
  db.query(query_items, (err, result) => {
    if (err) {
      console.error("Warning: " + err.message);
    } else {
      res.send(result);
    }
  });
});

app.get("/buyers_last_id", (req, res) => {
  db.query(query_buyers_last_id, (err, result) => {
    if (err) {
      console.error("Warning: " + err.message);
    } else {
      res.send(result);
    }
  });
});

app.post("/buyers", (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;

  db.query(query_buyers, [id, name, email, phone, address], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send("Values Inserted");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
