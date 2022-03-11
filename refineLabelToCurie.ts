import { ColumnRefinement } from "@netwerkdigitaalerfgoed/ldwizard/types/WizardConfig";

const transformation: ColumnRefinement = {
  label: "Convert labels of biomedical entities to their preferred CURIE using the Translator NameResolution API",
  type:"single",
  description:
    "This transformation will take labels of biomedical entities, and convert them to their preferred CURIE using the Translator NameResolution API: https://name-resolution-sri.renci.org/docs",
  transformation: async (searchTerm: string) => {
    const response = await fetch(`https://name-resolution-sri.renci.org/lookup?string=${searchTerm}&offset=0&limit=5`, {
      method: "POST",
      headers: {"Accept": "application/json"},
      body: ""
    })
      .then(function(response) {
        return response.json();
      })
      .then((responseJSON) => {
        console.log(responseJSON);
        return responseJSON
      });
      // .catch(function(error) {
      //   console.log(error.message);
      //   return searchTerm;
      // });
    
    if (Object.keys(response).length > 0) {
      // Returns the first result
      return `https://identifiers.org/${Object.keys(response)[0]}`
    } else {
      return searchTerm;
    }
  },
};
export default transformation;
