export default {
  template: `
          <div class="process__selected-item grid">
            <div class="process__selected-img ibg">
             <img loading="lazy" :src="imgPath + img" width="445" height="290" alt="Framed Silver Doorss">
            </div>
            <p class="process__selected-name">
             {{title}}
            </p>
        </div>
  `,
  props: {
    img: String,
    title: String,
    imgPath: String
  }
}
