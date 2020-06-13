import ParentsApiGenerated from "./generated/ParentsApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ParentsApi extends ParentsApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Parents List
  static getParentsList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/parentss")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ParentsApi;