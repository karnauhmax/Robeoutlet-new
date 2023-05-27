import selectedItem from "./_selected-item"



export default {
  template: `
  <div class="process__selected grid white-block">
          <div class="process__selected-head">
           You selected:
          </div>
          <div class="process__selected-body grid">
            <SelectedItem
              v-for="item in selectedArr" :title="item.title" :imgPath="imgPath" :img="item.img"
            />
          </div>
         </div>
  `,
  props: {
    selectedArr: Array,
    imgPath: String
  },
  components: {
    'SelectedItem': selectedItem
  }
}
