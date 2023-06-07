import { StyleSheet, Pressable, View, Text } from "react-native"
import { type ButtonProps } from './button';
import { FontAwesome } from "@expo/vector-icons"

const PrimaryButton = ({label, onPress}: ButtonProps) => {
    return (
      <View style={[styles.buttonContainer, styles.primaryButtonContainer]}>
        <Pressable
          style={[styles.button, styles.primaryButton]}
          onPress={onPress}
        >
          <FontAwesome name="picture-o" size={18} color="black" style={styles.buttonIcon}/>
          <Text style={[styles.primaryButtonLabel]}>{label}</Text>
        </Pressable>
      </View>
    )
  }

const styles = StyleSheet.create({
  primaryButtonContainer: {
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 18,
  },
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primaryButton: {
    backgroundColor: '#fff'
  },
  primaryButtonLabel: {
    color: "#25292e",
    fontSize: 16,
  },
  buttonIcon: {
    paddingRight: 8,
  },
})

export default PrimaryButton