import ParentsModelGenerated from "./generated/ParentsModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ParentsModelGenerated.init();
  
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
      return await ParentsModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ParentsModelGenerated,
  ...customModel
};
