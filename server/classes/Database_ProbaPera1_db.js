// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import ParentsModel from "../models/ProbaPera1_db/ParentsModel";
import StudentModel from "../models/ProbaPera1_db/StudentModel";
import TutorModel from "../models/ProbaPera1_db/TutorModel";
import UserModel from "../models/ProbaPera1_db/UserModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.probaPera1_db_dbUrl);

    // Start Init Models

		ParentsModel.init();
		StudentModel.init();
		TutorModel.init();
		UserModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_probaPera1_db = await mongoose.connect(
        "mongodb://" + properties.probaPera1_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_probaPera1_db;
  }
}

export default new Database();
