import axios from "axios";

export default {
  // Gets books from the Google API

  // Gets all saved books
  getSavedWines: function() {
    return axios.get("/api/wines");
  },
  // Deletes the saved book with the given id

  // Saves an book to the database
  saveWine: function(wineData) {
    return axios.post("/api/wines", wineData);
  }
};
