
export default {
  props: {
    videos: {
      type: Array,
      required: true
    },
    brochures: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      tabs: ['video', 'brochure'],
      activeTab: 'video'
    };
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab;
    }
  },

  template: `
  <div>
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="{'tabs-active': activeTab === tab}"
        @click="changeTab(tab)"
      >
        {{ tab }}
      </button>
    </div>

    <div v-if="activeTab === 'video'" class="tabs-content tabs-content-active">
      <div class="swiper guide__videos">
        <div class="swiper-wrapper">
          <div class="swiper-slide guide__videos-item" v-for="video in videos" :key="video.title">
            <div class="guide__videos-media">
              <div class="guide__videos-video"></div>
              <button class="guide__videos-btn"></button>
            </div>
            <div class="guide__videos-info">
              <h3 class="guide__videos-title">{{ video.title }}</h3>
              <p class="guide__videos-descr text text-300">{{ video.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="activeTab === 'brochure'" class="tabs-content" data-tabs-target="brochure">
      <div class="swiper guide__brochures">
        <div class="swiper-wrapper">
          <div class="swiper-slide guide__brochures-item" v-for="brochure in brochures" :key="brochure">
            <p class="text text-300">{{ brochure }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  `
};
