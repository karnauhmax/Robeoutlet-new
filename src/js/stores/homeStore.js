import fetchData from "../functions/fetchData";
import credentials from "../components/_credentials";
import _vars from "../_vars";
import fetchAndProcessImages from "../functions/fetchAndProcessImages";

const { defineStore } = Pinia;

export const useHomeStore = defineStore('homeStore', {
  state: () => ({
    homeFields: {},
    renderedImages: [],
    homeLogos: [],
    path: _vars.path,
    homeFaqs: [],
    homePhotos: [],
    authHeader: {
      "Authorization": credentials.rendered
    }
  }),
  actions: {
    async getHomeFields() {
      const data = await fetchData(`${this.path}wp-json/wp/v2/pages/43`, this.authHeader);
      const fields = data.acf;
      const { partners_logos, home_faqs, home_photos } = fields;

      this.homeLogos = await fetchAndProcessImages(partners_logos, this.path);


      this.homeFaqs = home_faqs;
      this.homePhotos = await fetchAndProcessImages(home_photos, this.path);;


      console.log(this.homePhotos);


    }
  },
  getters: {}
});
