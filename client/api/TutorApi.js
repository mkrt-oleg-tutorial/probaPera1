import TutorApiGenerated from "./generated/TutorApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class TutorApi extends TutorApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Tutor List
  static getTutorList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/tutors")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default TutorApi;