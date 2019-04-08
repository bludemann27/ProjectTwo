module.exports = function(sequelize, DataTypes) {
  var prescriptionDetails = sequelize.define("user_info", {
    USER_NAME: DataTypes.STRING,
    PHN_NUMB: DataTypes.STRING,
    DRUG_NAME: DataTypes.STRING,
    DRUG_ID: DataTypes.INTEGER,
    START_DATE: DataTypes.DATE,
    END_DATE: DataTypes.DATE
  });
  return prescriptionDetails;
};
