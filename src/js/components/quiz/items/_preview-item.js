export default {
  template: `
    <div tabindex="0" class="process__item" data-item-type="preview" @keyup.enter="nextStep" @click="nextStep">
     <div class="process__info grid">
      <p class="process__name uppercase-bold">
       {{title}}
      </p>
      <div class="process__color" :style="'background-color: ' + color"></div>
      </div>
      </div>
  `,
  props: {
    title: String,
    img: String,
    color: String,
    imgPath: String
  },
  methods: {
    nextStep() {
      this.$root.selectedArr.push({ title: this.title, img: this.img });
      this.$root.currentStep++;
      console.log(this.$root.selectedArr);
    }
  }
}
