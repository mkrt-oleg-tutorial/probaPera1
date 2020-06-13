import actionsFunction from "./generated/TutorActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import TutorApi from "../../api/TutorApi";
 
 actionsFunction.loadTutorList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return TutorApi
     .getTutorList()
     .then(list => {
       dispatch(actionsFunction.loadTutorSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
