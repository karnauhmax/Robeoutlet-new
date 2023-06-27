
import fetchData from "../functions/fetchData";
import credentials from "../components/_credentials";

const {defineStore} = Pinia;

export const useStore = defineStore('store', {
  state: () => ({
    homeFields: [],
  }),
  actions: {

    async getHomeFields() {
      const fields = await fetchData('http://robeoutlet/wp-json/pages', {
        "Authorization": `Basic ${credentials.rendered}`
      })
      this.fields = fields;
    }
  },
  getters: {
  }
});
