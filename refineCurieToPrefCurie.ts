import { ColumnRefinement } from "@netwerkdigitaalerfgoed/ldwizard/types/WizardConfig";

const transformation: ColumnRefinement = {
  label: "Convert CURIEs of biomedical entities to their preferred CURIE using the Translator NodeNormalization API",
  type:"single",
  description:
    "This transformation will take CURIEs of biomedical entities, and convert them to their preferred CURIE using the Translator NodeNormalization API: https://nodenormalization-sri.renci.org/docs",
  transformation: async (searchTerm: string) => {
    const response = await fetch(`https://nodenormalization-sri.renci.org/get_normalized_nodes?curie=${searchTerm}`, {
      method: "GET",
      headers: {"Accept": "application/json"},
      // body: ""
    })
      .then(function(response) {
        return response.json();
      })
      .then((responseJSON) => {
        return responseJSON;
      });

    if (Object.keys(response).length > 0) {
      // Returns the first result
      return `https://identifiers.org/${Object.keys(response)[0]}`
    } else {
      return searchTerm;
    }
  },
};
export default transformation;
