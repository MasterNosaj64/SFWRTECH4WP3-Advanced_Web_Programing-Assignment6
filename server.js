const sqlite3 = require("sqlite3").verbose();
const sqlite = require("sqlite");
const express = require('express');
const app = express();

app.use(express.json());

app.get("/api", async function (req, res) {
  console.log("GET ALL PROPERTIES REQUEST RECEIVED");

  const data =
    await db.all("SELECT rowid as id, address, postal_code, city, community, province, price, bedrooms, bathrooms, img, description FROM Properties");

  console.log(JSON.stringify(data));

  res.json(data);
});

app.get("/api/:id", async function (req, res) {
  console.log("GET PROPERTY BY ID REQUEST RECEIVED");

  const data =
    await db.all("SELECT rowid as id, address, postal_code, city, community, province, price, bedrooms, bathrooms, img, description FROM Properties WHERE id = ?", [req.params.id]);

  console.log(JSON.stringify(data));

  res.json(data);
});


app.put("/api", async function (req, res) {
  console.log("PUT PROPERTY REQUEST RECEIVED");

  await db.run("DELETE * FROM PROPERTIES")

  const data =
    await db.prepare("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)");

  for (const property of req.body) {

    await data.run(
      [property.address,
      property.postal_code,
      property.city,
      property.community,
      property.province,
      property.price,
      property.bedrooms,
      property.bathrooms,
      property.img,
      property.description]
    );

  }

  res.json({ "response": "COLLECTION UPDATED" });
});

app.put("/api/:id", async function (req, res) {
  console.log("PUT PROPERTY by ID REQUEST RECEIVED");

  await db.run("UPDATE Properties SET address = ?, postal_code = ?, city = ?, community = ?, province = ?, price = ?, bedrooms = ?, bathrooms = ?, img = ?, description = ? WHERE rowid = ?",
    [req.body.address,
    req.body.postal_code,
    req.body.city,
    req.body.community,
    req.body.province,
    req.body.price,
    req.body.bedrooms,
    req.body.bathrooms,
    req.body.img,
    req.body.description,
    req.params.id]);

  res.json({ "response": "ITEM UPDATED" });
});

app.delete("/api/", async function (req, res) {
  console.log("DELETE ALL PROPERTIES REQUEST RECEIVED");
  await db.run("DELETE FROM Properties");

  res.json({ "response": "COLLECTION DELETED" });

});

app.delete("/api/:id", async function (req, res) {
  console.log("DELETE PROPERTY by ID REQUEST RECEIVED");
  await db.run("DELETE FROM Properties WHERE rowid=?", [req.params.id]);

  res.json({ "response": "ITEM DELETED" });

});

app.post("/api", async function (req, res) {
  console.log("POST PROPERTY REQUEST RECEIVED");

  await db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)",
    [req.body.address,
    req.body.postal_code,
    req.body.city,
    req.body.community,
    req.body.province,
    req.body.price,
    req.body.bedrooms,
    req.body.bathrooms,
    req.body.img,
    req.body.description]);

  res.json({ "response": "ITEM INSERTED" });

});


async function startup() {
  db = await sqlite.open({
    filename: 'properties.db',
    driver: sqlite3.Database
  });

  const server = app.listen(3000, function () {
    console.log("RESTful API listening on port 3000!")
  });
}

startup();
