import MaterialIcons from "@expo/vector-icons/build/MaterialIcons"
import { Pressable, StyleSheet, Text, ImageURISource } from 'react-native';

interface IconButtonProps {
  // iconの型後で考える
  // glyphMapが何なのかあとで調べる
  icon: keyof typeof MaterialIcons.glyphMap,
  // icon: any,
  label: string,
  onPress: () => void
}

const IconButton = ({icon, label, onPress}: IconButtonProps) => {
  return (
    // タップしたいのでPressable
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="black" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>

  )
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12
  }
})



export default IconButton