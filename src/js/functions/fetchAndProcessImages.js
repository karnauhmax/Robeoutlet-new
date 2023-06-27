import fetchData from "../functions/fetchData";
import credentials from "../components/_credentials";

async function fetchAndProcessImages(imageIds, basePath) {
  const processedImages = await Promise.all(
    imageIds.map(async (obj) => {
      const renderedImage = await fetchData(`${basePath}wp-json/wp/v2/media/${obj.image}`, {
        "Authorization": credentials.rendered
      });
      const media = renderedImage.media_details;

      const { width, height } = media;

      return {
        ...obj,
        renderedImage: {
          width,
          height,
          path: renderedImage.guid.rendered,
        },
      };
    })
  );

  return processedImages;
}

export default fetchAndProcessImages;
