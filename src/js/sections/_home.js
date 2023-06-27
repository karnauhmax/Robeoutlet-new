
import { useHomeStore } from "../stores/homeStore";
import _vars from "../_vars";
const { createApp } = Vue;
const { createPinia, mapState, mapActions } = Pinia;
import Tabs from "../components/_photos-tabs";
import PhotosAccordion from "../components/_photos-accordion";
import FaqAccordion from "../components/_faq-accordion";

const pinia = createPinia();

const app = createApp({
  data() {
    return {
      path: _vars.path,
      testArr: [
        {
          title: "Fully Framed Vinyl",
          image: "img/content/fully-framed-vinyl.jpg"
        },
        {
          title: "Fully Framed Vinyl",
          image: "img/content/fully-framed-vinyl.jpg"
        },

      ]
    }
  },

  components: {
    "photos-tabs": Tabs,
    "photos-accordion": PhotosAccordion,
    "faq-accordion": FaqAccordion,
  },

  computed: {
    ...mapState(useHomeStore, {
      homeFields: "homeFields",
      homeLogos: "homeLogos",
      homeFaqs: "homeFaqs",
      homePhotos: "homePhotos"
    })
  },

  methods: {
    ...mapActions(useHomeStore, {
      getHomeFields: "getHomeFields",
      getRenderedImages: "getRenderedImages"
    })
  },

  mounted() {
    this.getHomeFields();
  }
});

app.use(pinia);

if (document.querySelector('[data-page="home"]')) {
  app.mount('[data-page="home"]');
}

