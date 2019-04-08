CREATE DATABASE PRESC_DRUG;
USE PRESC_DRUG;

create TABLE user_info
(
    USER_ID int NOT NULL auto_increment,
    USER_NAME varchar
(255),
    PHN_NUMB integer
(15),
   DRUG_NAME varchar
(255),
   DRUG_ID int NOT NULL,
   START_DT TIMESTAMP NOT NULL,
   END_DT TIMESTAMP NOT NULL,
   DOSAGE varchar
(100) NOT NULL,
   FREQUENCY varchar
(300),
   INSTRUCTIONS varchar
(300),
   PILLS_REMNG integer
(10),
   REFILL_STATUS varchar
(2) DEFAULT 'N',
   PRIMARY KEY
(USER_ID));

create TABLE presc_drug_info
(
    DRUG_ID int NOT NULL auto_increment,
   DRUG_NAME varchar
(255),
    USER_NAME varchar
(255),
   PHN_NUMB integer
(15),
   PRIMARY KEY
(DRUG_ID));
