import TutorModelGenerated from "./generated/TutorModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TutorModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await TutorModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TutorModelGenerated,
  ...customModel
};
