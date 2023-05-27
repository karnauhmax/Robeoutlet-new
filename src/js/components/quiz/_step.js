import DefaultItem from "./items/_default-item";
import PreviewItem from './items/_preview-item';
import FinalItem from "./items/_final-item";
import Selected from "../selected/_selected-component";



export default {
  components: {
    'DefaultItem': DefaultItem,
    'PreviewItem': PreviewItem,
    'FinalItem': FinalItem,
    'Selected': Selected
  },
  template: `
  <div class="process__step grid process__step-start" :data-show-selected=showSelected :data-step-final="itemsType === 'final' ? 'true' : null">
    <p class="uppercase-bold section-title process__step-title">
      Step {{index + 1}}. {{title}}
    </p>

      <div v-if="isNotFinal(itemsType)" class="process__items grid" :data-items-type=itemsType>

      <template v-if="itemsType === 'preview'">
        <PreviewItem
        v-for="(item, itemIndex) in items"
        :key="itemIndex"
        :title="item.title"
        :img="item.img"
        :imgPath="imgPath"
        :table="item.table"
        :color="item.color"
        :index="index"
        />
      </template>

      <template v-if="itemsType === 'default'">
        <DefaultItem
          v-for="(item, itemIndex) in items"
          :key="itemIndex"
          :title="item.title"
          :table="item.table"
          :trackValue="item.trackValue"
          :img="item.img"
          :imgPath="imgPath"
          :doorType="item.doorType"
        />
      </template>

      </div>

      <Selected
        v-if="showSelected" :selectedArr="selected" :imgPath="imgPath"
       />

      <FinalItem
        v-if="itemsType === 'final'"
      />

    </div>
  `,
  props: {
    showSelected: Boolean,
    itemsType: String,
    index: Number,
    items: Array,
    title: String,
    selected: Array,
    imgPath: String
  },
  methods: {
    isNotFinal(type) {
      return type !== "final";
    },
  }
}
