import { View, Text, Image, TouchableOpacity } from "react-native";

import { router } from 'expo-router';

import { styles } from "./styles";

const HomeView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Bem vindo de volta!
      </Text>

      <Image
        style={styles.logo}
        source={require('@/src/assets/images/logo.png')}
      />

      <View>
        <Text style={styles.text}>
          Vamos aprender algo novo
        </Text>
        <Text style={styles.subtext}>
          Você pode melhorar sua conversação, pronúncia e falar sobre qualquer assunto
        </Text>
      </View>

      <TouchableOpacity
        style={styles.linkWrapper}
        onPress={() => {
          router.replace('/functionalities')
        }}
      >
        <Text style={styles.linkText}>
          Iniciar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeView;