import selectedArr from "../components/selected/_selected";
import steps from "../components/quiz/frameless/_frameless-steps";
import customSelect from "../components/_custom-select";
import selectedComponent from "../components/selected/_selected-component";
import step from "../components/quiz/_step";
import stepBtn from "../components/_step-btn";

import { createPinia } from 'pinia';

const { createApp } = Vue;

const pinia = createPinia();



const app = createApp({
  data() {
    return {
      stepBtns: ['Step 1', 'Step 2', 'Step 3', 'Step 4'],
      currentStep: 1,
      steps,
      selectedArr,
      imgPath: "img/content/",
    };
  },
  methods: {
    selectStep(index) {
      if (this.currentStep > index) {
        this.selectedArr.splice(index - 1);
        for (let i = index; i < this.currentStep; i++) {
          this.selectedArr.splice(i - 1);
        }
        this.currentStep = index;
      }
    },

  },
  components: {
    'custom-select': customSelect,
    'selected': selectedComponent,
    'step': step,
    'step-btn': stepBtn,
  }
});

app.use(pinia);

if (document.querySelector("[data-quiz-type='frameless-doors']")) {
  app.mount("[data-quiz-type='frameless-doors']");
}


