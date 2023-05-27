import selected from "../../selected/_selected";

export default {
  data() {
    return {
      selected
    }
  },
  template: `
  <div tabindex="0" class="process__item grid" @click="nextStep" @keyup.enter="nextStep">
         <div class="process__img ibg">
          <img loading="lazy" :src="imgPath + img" width="445" height="290" alt="Framed Silver Doorss">
        </div>
        <p class="process__name uppercase-bold">
          {{title}}
        </p>
      </div>
  `,
  props: {
    title: String,
    img: String,
    imgPath: String,
    table: Array,
    trackValue: String,
    doorType: String
  },
  methods: {
    nextStep() {
      let selectedItem = {
        title: this.title,
        img: this.img,
        table: this.table,
        track: this.trackValue,
        doorType: this.doorType
      };

      let selectedKeys = {};

      Object.keys(selectedItem).forEach(key => {
        if (selectedItem.hasOwnProperty(key) && selectedItem[key]) {
          selectedKeys[key] = selectedItem[key];
        }
      });

      this.$root.selectedArr.push(selectedKeys);
      this.$root.currentStep++;

      console.log(this.$root.selectedArr);

    }
  }
};
