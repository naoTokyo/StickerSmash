import { Image, ImageURISource, StyleSheet } from "react-native"

type ImageProps = {
  placeholderImageSource: ImageURISource
  selectedImage: string
}

const ImageViewer = ({placeholderImageSource, selectedImage}: ImageProps) => {

  const imageSource =
  // 画像が選択されていたらそれを、されていなかったら初期画像をimageSourceとする
  // selectedImageはstring、placeholderImageSourceはURI
  selectedImage!=='' ? { uri: selectedImage} : placeholderImageSource

  return (
    <Image
      source={imageSource}
      style={styles.image}
    />
  )
}

const styles = StyleSheet.create({
image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
})

export default ImageViewer