var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/drug_infos", function(req, res) {
    db.drug_infos.findAll({}).then(function(dbDrugEntry) {
      res.json(dbDrugEntry);
    });
  });
  app.get("/api/drug_infos/:id", function(req, res) {
    db.drug_infos
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbDrugEntry) {
        res.json(dbDrugEntry);
      });
  });

  // Create a new example
  app.post("/api/drug_infos", function(req, res) {
    db.drug_infos
      .create({
        drugName: req.body.drug_name,
        drugID: req.body.drug_id,
        dosage: req.body.dosage,
        instructions: req.body.instructions,
        startDate: req.body.start_date,
        endDate: req.body.end_date
      })
      .then(function(dbDrugEntry) {
        res.json(dbDrugEntry);
      });
  });

  // Delete an example by id
  app.delete("/api/drug_infos/:id", function(req, res) {
    db.drug_infos
      .destroy({ where: { id: req.params.id } })
      .then(function(dbDrugEntry) {
        res.json(dbDrugEntry);
      });
  });

  app.get("/api/user_infos", function(req, res) {
    db.user_info.findAll({}).then(function(dbPrescriptionDetails) {
      res.json(dbPrescriptionDetails);
    });
  });
  app.get("/api/user_infos/:id", function(req, res) {
    db.user_info
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbPrescriptionDetails) {
        res.json(dbPrescriptionDetails);
      });
  });
};
