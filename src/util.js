// Placeholder
import placeholderImage from './img/placeholder.jpeg';

// Media Resize
export const smallImage = (imagePath, size) => {
  if (!imagePath) {
    return placeholderImage;
  }

  const image = imagePath.match(/media\/screenshots/)
    ? imagePath.replace(
        'media/screenshots',
        `media/resize/${size}/-/screenshots`
      )
    : imagePath.replace('/media/games/', `/media/resize/${size}/-/games/`);

  return image;
};
