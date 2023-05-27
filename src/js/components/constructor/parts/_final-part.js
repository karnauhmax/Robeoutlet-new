import calculatePrice from "../../_constructor-calculator";
export default {
  data() {
    return {
      images: [
      ]
    }
  },
  components: {
    'draggable': window['vuedraggable']
  },

  template: `
  <div class="process__step process__step-final grid" data-show-selected="false">
    <p class="uppercase-bold section-title process__step-title">
      {{ title }}
    </p>
    <form id="confirm-selected-wardrobe-form" class="process__finale grid">
    <div class="process__finale-wrapper">
      <div class="process__result">
        <div class="topshelf">
        </div>
        <draggable v-model="images" tag="div" class="process__result-items" item-key="id">
          <template #item="{element: img}">
            <div class="process__result-item">
              <img :src="img.imgResult">
              <span class="process__result-metric">{{img.width}} mm</span>
              <span class="line"></span>
            </div>
          </template>
        <div class="empty-space" :style="{width: emptyWidth}"></div>
        </draggable>
      </div>
      </div>
      <div class="process__finale-body grid">
        <div class="process__unit text text-300">
          <p>Width</p>
          <p>{{ width }} мм</p>
        </div>
        <div class="process__unit text text-300">
          <p>Height</p>
          <p>{{ height }} мм</p>
        </div>
        <p v-if="!isOverWidth" class="text text-500 process-constructor__notice">
          {{ notice }}
        </p>
        <p class="process__finale-total uppercase-bold text ">
          <span v-if="!isOverWidth">Total:  {{ priceTotal }}$ INCL GST</span>
          <span v-else>The initial wardrobe width exceeds the width of selected units, please go back and update your order</span>
        </p>
        <button type="submit" form="confirm-selected-wardrobe-form" :class="{ disabled: isOverWidth }" class="uppercase-bold arrow-link dark-arrow-link process__finale-btn"> Add to cart</button>
      </div>
    </form>
  </div>
`,


  computed: {
    selected() {
      return this.$root.selectedObj;
    },

    width() {
      return this.selected.metrics ? this.selected.metrics.width : "N / A";
    },

    height() {
      return this.selected.metrics ? this.selected.metrics.height : "N / A";
    },

    type() {
      return this.selected.metrics ? this.selected.metrics.type : "N / A";
    },

    emptyWidth() {
      // const parentWidthInPx = 792;
      const percentage = 100 - this.overallWidth / this.width * 100;
      return percentage + "%";
    },

    // emptyWidth() {
    //   const parentWidthInPx = 792;
    //   const percentage = 100 - (this.overallWidth / this.width) * 100;
    //   const result = parentWidthInPx * (percentage / 100) + "px";
    //   return result;
    // },




    units() {
      return this.selected.units ? this.selected.units : [];
    },

    overallWidth() {
      const overallWidth = this.units.reduce((acc, unit) => {
        return acc + unit.items.reduce((acc2, item) => {
          return acc2 + item.width * item.quantity;
        }, 0);
      }, 0);

      return overallWidth;
    },

    isOverWidth() {
      return this.overallWidth > this.width;
    },

    priceTotal() {
      let price = 0;
      if (this.units.length) {
        this.units.filter(unit => unit.items.length).forEach(unit => {
          price += calculatePrice(this.width, this.height, this.type, unit.items, unit.itemTable, unit.id);
        })
      } else {
        price = calculatePrice(this.width, this.height, this.type);
      }
      return price;
    }
  },

  watch: {
    units: {
      immediate: true,
      handler() {
        this.images = this.units.flatMap(unit =>
          unit.items.flatMap(item =>
            Array.from({ length: item.quantity }, () => ({ img: unit.img, width: item.width, imgResult: unit.resultImg }))
          )
        );

      }
    }
  },
  methods: {
    calculatedWidth(itemWidth) {
      return `${Math.floor(itemWidth / this.width * 100)}%`;
    }
  },
  props: {
    img: String,
    notice: String,
    title: String,
  }
}










