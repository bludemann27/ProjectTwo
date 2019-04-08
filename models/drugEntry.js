module.exports = function(sequelize, DataTypes) {
  var drugEntry = sequelize.define("drug_infos", {
    DRUG_NAME: DataTypes.STRING,
    DRUG_ID: DataTypes.INTEGER,
    DOSAGE: DataTypes.INTEGER,
    INSTRUCTIONS: DataTypes.TEXT,
    START_DATE: DataTypes.DATE,
    END_DATE: DataTypes.DATE
  });
  return drugEntry;
};
