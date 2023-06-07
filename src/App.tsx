import ImageViewer from './components/image-viewer';
import * as ImagePicker from 'expo-image-picker'
import Button from './components/button';
import { registerRootComponent } from 'expo';
import { StyleSheet, View, ImageURISource, StatusBar, Text } from 'react-native';
import PrimaryButton from './components/primary-button';
import { useState } from 'react';
import CircleButton from './components/circle-button';
import IconButton from './components/icon-button';

const placeholderImage: ImageURISource = require('../assets/images/background-image.png')

const App = () => {
  // 自分が選択した画像
  const [selectedImage, setSelectedImage] = useState<string>('')
  // showOptionがtrueのときモーダルを表示したい
  // showOptionの真偽値は画像が選択されたら、trueに変更する

  const [showOption, setShowOption] = useState(false)


  // 関数
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowOption(true)
    }
// このreturnの意味
    return ('please select image')
  }

  // 下のボタンがクリックされたらshowOptionの真偽値をtrueにする
  // trueになったらモーダルが表示される
  // 下のボタンがあるときはshowOptionは必ずfalseで、trueにしたい
  // リセットボタンがあるときはshowOptionは必ずtrueで、falseにしたい
  const handlePress = () => {
    setShowOption(!showOption)
  }

  const onAddSticker = () => {}

  const onSaveImageAsync = () => {}





  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
        />
      </View>

      {/* showOptionがtrueになったときだけ写真選択ボタンの代わりにモーダルを表示させたい */}
      {showOption ?
      // trueのとき
      (
        <View style={styles.optionContainer}>
          <View style={styles.optionRow}>
            {/* MaterialIconsのnameを変数にしたい */}
            {/* アイコン横の文字を変数にしたい */}
            <IconButton icon='refresh' label='Reset' onPress={handlePress}/>
            <CircleButton onPress={onAddSticker}/>
            <IconButton icon='save-alt' label='Save' onPress={onSaveImageAsync}/>
          </View>
        </View>
      )
      :
      // falseのとき
      (<View style={styles.footerContainer}>
        {/* ボーダーとアイコン付きのボタン */}
        <PrimaryButton
          label='Choose a photo'
          onPress={pickImageAsync}
        />
        {/* 普通のボタン */}
        <Button
        label='Use this photo'
        onPress={handlePress}
        />
      </View>)}

    {/* statusBarって何？ */}
    {/* JSX内でコメントアウトするとき */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1/3,
    alignItems: 'center',
  },
  optionContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default App

registerRootComponent(App);