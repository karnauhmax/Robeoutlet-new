import ConstructorItem from "../items/_constructor-item"

export default {
  data() {
    return {
      selectedValues: [],
    }
  },
  components: {
    'ConstructorItem': ConstructorItem
  },
  template: `
  <div class="process__wrapper grid">

  <div class="process__items">
  <ConstructorItem v-for="(unit, index) in units"
    :img="unit.img"
    :title="unit.name"
    :counters="unit.counters"
    :checkboxes="unit.checkboxes"
    :table="unit.itemTable"
    :id="unit.id"
    :key="unit.id"
    :resultImg="unit.resultImg"
    @selected-value-changed="handleSelectedValueChange"
  />
</div>
  <button class="arrow-link next-btn next-btn-light white-arrow-link" @click="pushSelectedValues">Next Step</button>


  </div>

  `,

  props: {
    img: String,
    title: String,
    units: Array,
    resultImg: String,
  },

  methods: {
    handleSelectedValueChange(newSelectedValue) {
      this.selectedValues.push(newSelectedValue);
    },
    pushSelectedValues() {
      const filtered = this.selectedValues.filter(item => item.items.length);
      this.$root.selectedObj.units = [...new Set(filtered)];
      this.$root.currentStep++;
      console.log(this.$root.selectedObj.units);
    }
  }
}
