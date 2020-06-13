import actionsFunction from "./generated/ParentsActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import ParentsApi from "../../api/ParentsApi";
 
 actionsFunction.loadParentsList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return ParentsApi
     .getParentsList()
     .then(list => {
       dispatch(actionsFunction.loadParentsSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
