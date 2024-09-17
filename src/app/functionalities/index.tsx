import { router } from "expo-router";
import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons';

import { THEME } from "@/src/styles/themes";
import { styles } from "./styles";

const FunctionalitiesPage = () => {

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.container}
      >
        <Image
          style={styles.logo}
          source={require('@/src/assets/images/robot-01.png')}
        />
        <Text
          style={{
            ...styles.title,
            marginTop: 40,
          }}
        >
          See all possibilities
        </Text>
        <Text style={styles.title}>
          to learn a new language
        </Text>

        <View style={styles.contentWrapper}>
          <TouchableOpacity
            style={styles.contentCard}
            onPress={() => {
              router.replace('/conversations')
            }}
          >
            <Ionicons name="chatbox-ellipses-outline" size={40} color={THEME.COLORS.PRIMARY} />
            <Text style={styles.contentCardText}>Simulate chating</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentCard}
            onPress={() => {
              router.replace('/pronunciation')
            }}
          >
            <Ionicons name="happy-outline" size={40} color={THEME.COLORS.PRIMARY} />
            <Text style={styles.contentCardText}>Pronounce correctly</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.contentCard}
            onPress={() => {
              router.replace('/translations')
            }}
          >
            <Ionicons name="globe-outline" size={40} color={THEME.COLORS.PRIMARY} />
            <Text style={styles.contentCardText}>Translate anything</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default FunctionalitiesPage;