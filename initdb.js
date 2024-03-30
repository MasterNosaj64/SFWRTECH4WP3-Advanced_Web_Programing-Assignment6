// You can use this file to create your property database and populate it
// with some initial data.  You can run it with: node initdb.js

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("properties.db");

db.serialize(function() {

  // create properties table
  db.run("DROP TABLE IF EXISTS Properties");
  db.run("CREATE TABLE Properties (address TEXT, postal_code TEXT, city TEXT," + 
                                  "community TEXT, province TEXT, price INTEGER," +
                                  "bedrooms INTEGER, bathrooms INTEGER, img TEXT," +
                                  "description TEXT)");

  // insert records into the properties table
  db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", 
         ["224 EAST 25TH ST", "L8V 3A5", "Hamilton", "Mountain","Ontario", 
          779900,4, 3,"224east.jpeg",
          "Beautiful 100% Turn-Key 1.5 Storey Home On East Mountain Feat 3+1 Beds, 3 Baths, In-Law Suite W/ Duplex Conversion Potential, Ample Storage Space, Detached Garage, Up To 5 Car Parking, & Waterproofed Bsmt."]);

  db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", 
         ["183 Kitty Murray Lane","L9K 1H7","Hamilton","Ancaster","Ontario",
         1050000,4, 4, "183kitty.jpeg", "Steps to Meadowlands,schools, parks and easy access to 403/LINC. 2 Storey, 3+1 bedrm,3.5 baths with large backyard. Hardwood stairs and hardwood floors in all principal and bed rooms, no carpet!"]);

  db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", 
          ["20 ERINGATE Court", "L8J 3Y4", "Hamilton", "Stoney Creek","Ontario",
          1925000, 4, 4, "20eringate.jpeg", "Built by award winning Zeina Homes. All brick on the sides and rear. Modern open concept main floor has 9ft ceiling, oak staircase with iron spindles, hardwood floors on main level and upper hallways, oversized windows, large kitchen with custom extended height cabinets, granite counters, large island, stainless steel appliances and porcelain tiles."]);

  db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", 
          ["11 Cloverhill Avenue", "L8J 3Y4", "Hamilton", "Dundas", "Ontario",
          899900, 3, 3, "11cloverhill.jpeg", "Fabulous home and property in sought after Dundas neighborhood. Superb location on a quiet cul de sac just a short walk to downtown Dundas's shops, restaurants and amenities."]); 

  db.run("INSERT INTO Properties VALUES (?,?,?,?,?,?,?,?,?,?)", 
          ["257 PARKSIDE Drive Unit# 8", "L8B 0W5", "Hamilton", "Waterdown", "Ontario", 799900,
          2, 3, "257parkside.jpeg", "This condo townhome boasts two huge bedrooms, both with 4-piece ensuite bathrooms. The laundry is also on the bedroom level with custom California Closet built-ins around it. The main floor is stunning! Open concept living/dining room and kitchen with a breakfast bar."]);

});
