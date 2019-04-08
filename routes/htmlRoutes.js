var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.drug_infos.findAll({}).then(function(dbDrugEntry) {
      res.render("index", {
        msg: "Welcome!",
        drugEntry: dbDrugEntry
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/drugEntry/:id", function(req, res) {
    db.drug_infos
      .findOne({ where: { id: req.params.id } })
      .then(function(dbDrugEntry) {
        res.render("drugEntry", {
          drugEntry: dbDrugEntry
        });
      });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
