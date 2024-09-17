import { View, Text, Image, TouchableOpacity } from "react-native";

import { router } from 'expo-router';

import { styles } from "./styles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome Back
      </Text>

      <Image
        style={styles.logo}
        source={require('@/src/assets/images/logo.png')}
      />

      <View>
        <Text style={styles.text}>
          Let´s learning something new
        </Text>
        <Text style={styles.subtext}>
          You can improve your conversation, pronunciation and talk about any topics
        </Text>
      </View>

      <TouchableOpacity
        style={styles.linkWrapper}
        onPress={() => {
          router.replace('/functionalities')
        }}
      >
        <Text style={styles.linkText}>
          Start
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeView;