import calculatePrice from "../../_calculator";
import Selected from "../../selected/_selected";
import CalculatorInput from "../../_input";
import CustomCheckbox from "../../_checkbox";

export default {
  data() {
    return {
      addFloorBoard: false,
      inputs: [{
          title: "A",
          value: null,
          type: "width"
        },
        {
          title: "B",
          value: null,
          type: "width"
        },
        {
          title: "C",
          value: null,
          type: "height"
        },
        {
          title: "D",
          value: null,
          type: "height"
        },
      ],
      selected: Selected
    }
  },
  template: `
  <form id="opening-size-form" class="process__finale grid">
   <div class="process__finale-img ibg">
    <img loading="lazy" src="img/svg/opening-size.svg" class="image" width="505" height="340" alt="Opening Size Image">
   </div>
   <div class="process__finale-body grid">
    <p class="uppercase-bold process__finale-title">
     provide your opening size in mm
    </p>
    <div class="process__finale-inputs grid">
     <CalculatorInput v-for="(input, index) in inputs" :key="index" :title="input.title" labelClasses="grid process__finale-label" inputClasses="process__finale-input" v-model:modelValue="input.value"></CalculatorInput>
    </div>
    <div class="process__notice grid">
     <CustomCheckbox label="add floor board" v-model:checked="addFloorBoard" value="Add Floor Board" />



     <p v-if="addFloorBoard" class="text text-300 process__notice-text">
      16mm melamine board recommended to use on top of carpet or concrete floor. The bottom track applies on top of it.
              Please provide the actual opening sizes and we will take care of deductions!
     </p>
    </div>
    <p class="process__finale-total uppercase-bold text">
     <span>{{calculatedPrice}}</span>
    </p>
   </div>
  </form>
  <button type="submit" form="opening-size-form" class="uppercase-bold process__finale-btn btn btn-dark"> Add to cart</button>

  `,
  components: {
    'CalculatorInput': CalculatorInput,
    'CustomCheckbox': CustomCheckbox
  },
  computed: {
    selectedTable() {
      return this.selected.length > 0 ? this.selected[0].table : null;
    },

    calculatedPrice() {
      if (this.inputs.some(item => !item.value) || !this.selectedTable) {
        return null;
      }

      const width = this.calculateMetric("width", this.inputs);
      const height = this.calculateMetric("height", this.inputs);

      const thickness = this.selected.find(item => item.track)?.track || "double";
      const doorType = this.selected.find(item => item.doorType)?.doorType || "default";
      const total = calculatePrice(width, height, doorType, thickness, this.selectedTable);


      return total;

    },
  },
  methods: {
    calculateMetric(metric, arr) {
      return arr.filter(item => item.type === metric).reduce((acc, item) => acc + item.value, 0);
    },
  },
}
