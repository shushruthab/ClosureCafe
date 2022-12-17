import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server gives CRUD endpoints on snacks and drinks.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const result = await axios.get(`${BASE_API_URL}/drinks`);
    return result.data;
  }

  static async postSnacks(data) {
    let strforid = data.name
    let id = strforid.replace(/ /g,'-').toLowerCase(); 
    const request = {
        id: id,
        ...data
    }
    const foodItem = await axios.post(`${BASE_API_URL}/snacks`, request);
    return foodItem.data;
  }

  static async postDrinks(data) {
    let strforid = data.name
    let id = strforid.replace(/ /g,'-').toLowerCase(); 
    const request = {
        id: id,
        ...data
    }
    const foodItem = await axios.post(`${BASE_API_URL}/drinks`, request);
    return foodItem.data;
  }

}

export default SnackOrBoozeApi;
